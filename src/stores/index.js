import { createContext, useContext } from 'react'
import InvoicesStore from './Invoices';
import GlobalStore from './Global';
import FormStore from './Form';

// create store context
export const storesContext = createContext({
    invoicesStore: new InvoicesStore(),
    globalStore: new GlobalStore(),
    formStore: new FormStore()
})

// create hook to implement stores
export const useStores = () => useContext(storesContext);