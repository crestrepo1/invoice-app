import { action, observable } from 'mobx';

export default class InvoicesStore {
    @observable invoicesList = [];

    @action addInvoice = invoice => this.invoicesList.push(invoice);
}
