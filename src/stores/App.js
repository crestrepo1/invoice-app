import { action, observable } from 'mobx';
import { createContext } from 'react';

class AppStore {
    @observable displayAddInvoiceForm = true;

    @action setDisplayAddInvoiceForm = () => this.displayAddInvoiceForm = !this.displayAddInvoiceForm;
}

const appContext = createContext(new AppStore());

export default appContext;