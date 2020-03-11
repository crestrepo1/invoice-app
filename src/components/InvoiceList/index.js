import React, { useContext} from 'react';
import { observer } from 'mobx-react-lite';

import invoicesContext from '../../stores/Invoices';
import appContext from '../../stores/App';

import Invoice from '../Invoice';
import Button from '../Button';

import './invoice-list.css';

const InvoiceList = observer (() => {

    const invoicesStore = useContext(invoicesContext);
    const appStore = useContext(appContext);
    
    return (
        <section className='invoice-list'>
            <div className='invoice-list__button-container'>
                <Button onClick={appStore.setDisplayAddInvoiceForm}>create invoice</Button>
            </div>
            {invoicesStore.invoicesList.map((invoice, i )=> <Invoice key={i} {...invoice}/>)}
        </section>
    )
})

export default InvoiceList;
