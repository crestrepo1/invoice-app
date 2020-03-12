import { action, observable } from 'mobx';

export default class GlobalStore {
    @observable displayAddInvoiceForm = false;

    @action setDisplayAddInvoiceForm = () => this.displayAddInvoiceForm = !this.displayAddInvoiceForm;
}