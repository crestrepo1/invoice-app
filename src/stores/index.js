import { createContext, useContext } from 'react'
import InvoicesStore from './Invoices';

// create store context
export const storesContext = createContext({
    invoicesStore: new InvoicesStore(),
})

// create hook to implement store
export const useStores = () => useContext(storesContext);