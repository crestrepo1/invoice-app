import { action, observable, computed, toJS } from 'mobx';

const detail = { desc: '', amount: '$0' };
const invoice = {
    name: '',
    email: '',
    date: '',
    details: [detail]
}

export default class InvoicesStore {
    @observable invoicesList = [];
    @observable invoiceIndex = 0;
    @observable displayForm = false;
    @observable isEditing = false;

    @action addInvoice = () => this.invoicesList.push(invoice);
    @action deleteInvoice = (idx) => this.invoicesList.splice(idx, 1);
    @action addDetailrow = () => this.currentInvoice.details.push(detail);
    @action setInvoiceIndex = num => this.invoiceIndex = num;
    @action setFormData = ({ name, value }) => this.currentInvoice[name] = value;
    @action setDetailData = ({ name, value, dataset: { index } }) => this.currentInvoice.details[index][name] = value;
    @action setDisplayForm = () =>  this.displayForm = !this.displayForm;
    @action setIsEditing = (bool) =>  this.isEditing = bool;

    @computed get currentInvoice() {
        return this.invoicesList[this.invoiceIndex];
    }

    @computed get invoiceTotalAmoutArray() {
        // loop over all invoices
        return toJS(this.invoicesList).map(invoice => {
            /// on each invoice loop over each detail and add them up
            return invoice.details.reduce((prev, { amount }) => {
                // make sure the amount is a number or can be parsed into one aka remove $ from string
                const formattedAmount = amount === '' ? 0 : amount.substr(1);

                return prev + parseFloat(formattedAmount);
            }, 0)
        })
    }

}
