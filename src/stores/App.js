import { action, observable } from 'mobx';
import { createContext } from 'react';

class AppStore {
    displayAddInvoiceForm = observable(false);

    setDisplayAddInvoiceForm = action(() => this.displayAddInvoiceForm = !this.displayAddInvoiceForm);
}

const appContext = createContext(new AppStore());

export default appContext;