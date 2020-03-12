import React, { useState} from 'react';

import formatCurrency from '../../common/formatCurrency';
import { useStores } from '../../stores';

import Button from '../Button';

import styles from './invoice.module.css';

export default ({ name, email, dueDate, index, total, details}) =>{

    const { invoicesStore } = useStores();
    const [displayDetails, setDisplayDetails] = useState(false)

    const viewInvoice = (ev) => console.log(invoicesStore.invoicesList[ev.target.dataset.index]);

    return (
        <div className={styles.invoice}>
            <p><span className={styles.detail}>Name:</span> {name}</p>
            <p><span className={styles.detail}>Email:</span> {email}</p>
            <p><span className={styles.detail}>Date:</span> {dueDate}</p>
            <p><span className={styles.detail}>Total:</span> {formatCurrency(total)}</p>
            {displayDetails && details.map((detail, i) => <p key={i}>{detail.name} : {detail.value}</p>)}
            <div className={styles['button-container']}>
                <Button modifier={styles.button} data-index={index} onClick={() => setDisplayDetails(!displayDetails)}>{displayDetails ? 'Hide Details' : 'View'}</Button>
                <Button modifier={styles.button} data-index={index} onClick={viewInvoice}>Edit</Button>
            </div>
        </div>
    )
}