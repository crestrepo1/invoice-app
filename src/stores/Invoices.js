import { action, observable } from 'mobx';
import { createContext } from 'react';

class InvoicesStore {
    invoicesList = observable([]);

    addInvoice = action(invoice => this.invoicesList.push(invoice));
}

const invoicesContext = createContext(new InvoicesStore());

export default invoicesContext;

