import React  from 'react';
import { observer } from 'mobx-react-lite';

import formatCurrency from '../../common/formatCurrency';
import { useStores } from '../../stores';

import Button from '../Button';
import FormInput from '../FormInput';

import styles from './invoice-form.module.css';


const Form = observer(() => {

    const { invoicesStore: { 
        setFormData, 
        addDetailrow, 
        currentInvoice, 
        setDetailData,
        setDisplayForm, 
        invoiceTotalAmoutArray,
        isEditing,
        invoiceIndex,
        deleteInvoice,
        invoicesList,
        setIsEditing
    }} = useStores();
    const {name, email, date, details} = currentInvoice;

    const closeForm = () => {
        setDisplayForm();
        if (isEditing) setIsEditing(!isEditing);
    }
    // all data is saved live so just close the form
    const formSubmit = (ev) => {
        ev.preventDefault();
        closeForm()
    }

    const cancelWork = () => {
        // if we are not editing aka, creating a new invoice delte it
        if (!isEditing) deleteInvoice(invoicesList.length - 1);
        closeForm();
    }

    const deleteThisInvoice = () => {
        deleteInvoice(invoiceIndex);
        closeForm();
    }

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            <span tabIndex="0" className={styles.close} onClick={() => cancelWork()}>X</span>
            <FormInput onChange={setFormData} required placeholder='invoice name' name='name' value={name} type='text' />
            <FormInput onChange={setFormData} required placeholder='email' name='email' value={email} type='email' />
            <FormInput onChange={setFormData} required placeholder='date' name='date' value={date} type='date' />
            {details.map(({desc, amount}, i) =>
                <div className={styles.details} key={i}>
                    <FormInput modifier={styles.description} required placeholder='description' onChange={setDetailData} name='desc' data-index={i} value={desc} type='text' />
                    <FormInput modifier={styles.amount} required currency={true} placeholder='0.00' onChange={setDetailData} name='amount' data-index={i} value={amount} type='number' step='0.01' />
                </div>
            )}
            <p className={styles.total}>Total: {formatCurrency(invoiceTotalAmoutArray[invoiceIndex])}</p>
            <span tabIndex="0" className={styles.add} onClick={() => addDetailrow()}>add row</span>
            {isEditing && <span tabIndex="0" className={styles.add} onClick={() => deleteThisInvoice()}>Delete</span>}
            <Button type="submit" >{isEditing ? 'Save': 'Create'}</Button>
        </form>
    )
})

export default Form;