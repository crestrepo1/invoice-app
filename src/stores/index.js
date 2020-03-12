import { createContext, useContext } from 'react'
import InvoicesStore from './Invoices';
import GlobalStore from './Global';
import FormStore from './Form';

export const storesContext = createContext({
    invoicesStore: new InvoicesStore(),
    globalStore: new GlobalStore(),
    formStore: new FormStore()
})

export const useStores = () => useContext(storesContext);