import { action, observable } from 'mobx';
import { createContext } from 'react';

class InvoicesStore {
    @observable invoicesList = [];

    @action addInvoice = invoice => this.invoicesList.push(invoice);
}

const invoicesContext = createContext(new InvoicesStore());

export default invoicesContext;

