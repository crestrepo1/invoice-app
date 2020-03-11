import React, {useContext}  from 'react';
import { observer } from 'mobx-react-lite';

import formContext from '../../stores/Form';
import invoicesContext from '../../stores/Invoices';

import Button from '../Button';
import FormInput from '../FormInput';

const Form = observer(() => {

    const formStore = useContext(formContext);
    const invoicesStore = useContext(invoicesContext);

    const formSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev);
        invoicesStore.addInvoice({
            name: 'bill 4',
            email: 'email@email.com',
            dueDate: 'monday',
            items: [
                {
                    itemName: 'item1',
                    itemValue: '4.00'
                },
                {
                    itemName: 'item2',
                    itemValue: '5.00'
                }, {
                    itemName: 'item3',
                    itemValue: '3.00'
                }
            ]
        })
    }

    const addDetailRow = (ev) => {
        ev.preventDefault();
        formStore.addDetail();
    }

    const {
        form,
        setFormData,
        details
    } = formStore

    return (
        <form onSubmit={formSubmit}>
            {Object.entries(form).map(([key, value], i) => {
                return (
                    <FormInput
                        key={i}
                        name={key}
                        value={value.value}
                        error={value.error}
                        type={value.type}
                        onChange={setFormData}
                    />
                )
            })}
            {details.map((detail, i ) => {
                return (
                    <div key={i}>
                        {Object.entries(detail).map(([key, value], i) => {
                            return (
                                <FormInput
                                    key={i}
                                    name={key}
                                    value={value.value}
                                    error={value.error}
                                    type={value.type}
                                    onChange={setFormData}
                                />
                            )
                        })}
                    </div>
                )
            })}
            <span onClick={addDetailRow}> add row</span>
            <Button type="submit">Add</Button>
        </form>
    )
})

export default Form;
