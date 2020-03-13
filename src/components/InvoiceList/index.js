import React, {Fragment} from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../stores';

import Invoice from '../Invoice';
import InvoiceForm from '../InvoiceForm';
import Button from '../Button';

import styles from './invoice-list.module.css';

const InvoiceList = observer (() => {

    const { invoicesStore: { invoiceTotalAmoutArray, setInvoiceIndex, addInvoice, setDisplayForm, invoicesList, displayForm} } = useStores();

    const createInvoice = () => {
        setInvoiceIndex(invoicesList.length)
        addInvoice();
        setDisplayForm();
    }

    return (
        <section className={styles['invoice-list']}>
            {displayForm ? 
                <InvoiceForm />
                :
                <Fragment>
                    <div className={styles['button-container']}>
                        <Button onClick={() => createInvoice()}>create invoice</Button>
                    </div>
                    <div className={styles['list-container']}>
                        {invoicesList.map((invoice, i) => <Invoice key={i} total={invoiceTotalAmoutArray[i]} index={i} {...invoice} />)}
                    </div>
                </Fragment>
            }
        </section>
    )
})

export default InvoiceList;
