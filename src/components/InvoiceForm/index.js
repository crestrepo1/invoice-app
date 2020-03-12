import React  from 'react';
import { observer } from 'mobx-react-lite';

import formatCurrency from '../../common/formatCurrency';
import { useStores } from '../../stores';

import Button from '../Button';
import FormInput from '../FormInput';

import styles from './invoice-form.module.css';

const RenderInputs = (inputs, onChange, i) => 
        Object.entries(inputs).map(([key, value], j) => {
            return (
                <FormInput
                    key={j}
                    name={key}
                    onChange={onChange}
                    data-index={i}
                    {...value}
                />
            )
        })

const Form = observer(() => {

    const { 
        invoicesStore: { addInvoice }, 
        formStore: { form, setFormData, setDetailData, details, detailsTotal, invoiceValues, clearForm, addDetail }, 
        globalStore: { setDisplayAddInvoiceForm}
    } = useStores()

    const formSubmit = (ev) => {
        ev.preventDefault();
        addInvoice(invoiceValues);
        clearForm();
        setDisplayAddInvoiceForm();
    }

    const addDetailRow = () => addDetail();

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            {RenderInputs(form, setFormData)}
            {details.map((detail, i ) => (
                    <div className={styles.details} key={i}>
                        {RenderInputs(detail, setDetailData, i)}
                    </div>
                ))}
            <p className={styles.total}>Total: {formatCurrency(detailsTotal)}</p>
            <span tabIndex="0" className={styles.add} onClick={addDetailRow}>add row</span>
            <Button type="submit">Add</Button>
        </form>
    )
})

export default Form;
