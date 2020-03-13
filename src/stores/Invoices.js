import { action, observable, computed, toJS } from 'mobx';

// data models for invoice
const detail = { desc: '', amount: '$0' };
const invoice = {
    name: '',
    email: '',
    date: '',
    details: [detail]
}

export default class InvoicesStore {
    // list of all invoices, each invoice has the data model above
    @observable invoicesList = [];
    // current working invoice, to keep track when editing/deleting
    @observable invoiceIndex = 0;
    // display the  invoice form for edit/add or display invoice list
    @observable displayForm = false;
    // display editing options in the invoice form
    @observable isEditing = false;

    // actions to modify the state
    @action addInvoice = () => this.invoicesList.push(invoice);
    @action deleteInvoice = (idx) => this.invoicesList.splice(idx, 1);
    @action addDetailrow = () => this.currentInvoice.details.push(detail);
    @action setInvoiceIndex = num => this.invoiceIndex = num;
    @action setFormData = ({ name, value }) => this.currentInvoice[name] = value;
    @action setDetailData = ({ name, value, dataset: { index } }) => this.currentInvoice.details[index][name] = value;
    @action setDisplayForm = () =>  this.displayForm = !this.displayForm;
    @action setIsEditing = (bool) =>  this.isEditing = bool;

    // shorthard to display current invoice 
    @computed get currentInvoice() {
        return this.invoicesList[this.invoiceIndex];
    }

    // create array off the incoice list that has the added amount of all details amounts to display the invoice total
    @computed get invoiceTotalAmoutArray() {
        // loop over all invoices
        return toJS(this.invoicesList).map(invoice => {
            /// on each invoice loop over each detail and add them up
            return invoice.details.reduce((prev, { amount }) => {
                // make sure the amount is a number or can be parsed into one aka remove $ from string
                const formattedAmount = amount === '' ? 0 : amount.substr(1);
                // add previus amount with current amount
                return prev + parseFloat(formattedAmount);
            }, 0)
        })
    }

}
