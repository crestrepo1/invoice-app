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

    const { invoicesStore, formStore, globalStore } = useStores()

    const formSubmit = (ev) => {
        ev.preventDefault();
        invoicesStore.addInvoice(formStore.invoiceValues);
        formStore.clearForm();
        globalStore.setDisplayAddInvoiceForm();
    }

    const addDetailRow = (ev) => {
        ev.preventDefault();
        formStore.addDetail();
    }

    const {
        form,
        setFormData,
        setDetailData,
        details,
        detailsTotal
    } = formStore

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            {RenderInputs(form, setFormData)}
            {details.map((detail, i ) => {
                return (
                    <div className={styles.details} key={i}>
                        {RenderInputs(detail, setDetailData, i)}
                    </div>
                )
            })}
            <p className={styles.total}>Total: {formatCurrency(detailsTotal)}</p>
            <span tabIndex="0" className={styles.add} onClick={addDetailRow}>add row</span>
            <Button type="submit">Add</Button>
        </form>
    )
})

export default Form;
