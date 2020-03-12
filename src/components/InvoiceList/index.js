import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../stores';

import Invoice from '../Invoice';
import Button from '../Button';

import styles from './invoice-list.module.css';

const InvoiceList = observer (() => {

    const { invoicesStore, globalStore } = useStores()

    return (
        <section className={styles['invoice-list']}>
            <div className={styles['button-container']}>
                <Button onClick={() => globalStore.setDisplayAddInvoiceForm()}>create invoice</Button>
            </div>
            {invoicesStore.invoicesList.map((invoice, i )=> <Invoice key={i} index={i} {...invoice}/>)}
        </section>
    )
})

export default InvoiceList;
