import React, {useContext}  from 'react';
import { observer } from 'mobx-react-lite';

import formContext from '../../stores/Form';
import invoicesContext from '../../stores/Invoices';

import Button from '../Button';
import FormInput from '../FormInput';

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

    const formStore = useContext(formContext);
    const invoicesStore = useContext(invoicesContext);

    const formSubmit = (ev) => {
        ev.preventDefault();
        invoicesStore.addInvoice(formStore.invoiceValues)
    }

    const addDetailRow = (ev) => {
        ev.preventDefault();
        formStore.addDetail();
    }

    const {
        form,
        setFormData,
        setDetailData,
        details
    } = formStore

    return (
        <form onSubmit={formSubmit}>
            {RenderInputs(form, setFormData)}
            {details.map((detail, i ) => {
                return (
                    <div key={i}>
                        {RenderInputs(detail, setDetailData, i)}
                    </div>
                )
            })}
            <span onClick={addDetailRow}>add row</span>
            <Button type="submit">Add</Button>
        </form>
    )
})

export default Form;
