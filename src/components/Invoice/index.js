import React, { useState} from 'react';

import formatCurrency from '../../common/formatCurrency';
import { useStores } from '../../stores';

import Button from '../Button';

import styles from './invoice.module.css';

export default ({ name, email, date, index, details}) =>{

    const { invoicesStore: { setInvoiceIndex, setDisplayForm, invoiceTotalAmoutArray, setIsEditing} } = useStores();
    // display invoiceDetails
    const [displayDetails, setDisplayDetails] = useState(false)

    const editInvoice = (ev) => {
        setIsEditing(true);
        // set active invoice to this one and open the form
        setInvoiceIndex(ev.target.dataset.index);
        setDisplayForm();
    }

    return (
        <div className={styles.invoice}>
            <p><span className={styles.detail}>Name:</span> {name}</p>
            <p><span className={styles.detail}>Email:</span> {email}</p>
            <p><span className={styles.detail}>Date:</span> {date}</p>
            <p><span className={styles.detail}>Total:</span> {formatCurrency(invoiceTotalAmoutArray[index])}</p>
            {displayDetails && 
                <ol>
                    {details.map(({desc, amount}, i) => <li key={i}>{desc} : {formatCurrency(amount)}</li>)}
                </ol>
            }
            <div className={styles['button-container']}>
                <Button modifier={styles.button} data-index={index} onClick={() => setDisplayDetails(!displayDetails)}>{displayDetails ? 'Hide' : 'View'} Details</Button>
                <Button modifier={styles.button} data-index={index} onClick={editInvoice}>Edit</Button>
            </div>
        </div>
    )
}