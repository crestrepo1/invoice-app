import { action, observable } from 'mobx';
import { createContext } from 'react';

const detailsStructure = {
    detailName: {
        value: '',
        error: '',
        type: 'text',

    },
    detailAmount: {
        value: '',
        error: '',
        type: 'number',

    }
}

class FormStore {
    form = observable({
        name: {
            name: 'name',
            value: '',
            error: '',
            type: 'text',

        },
        email: {
            value: '',
            error: '',
            type: 'email',

        },
        date: {
            value: '',
            error: '',
            type: 'date',

        },
    });
    // initiate rows array with 1 row
    details = observable([detailsStructure]);
    // set input value
    setFormData = action((name, value) => this.form[name].value = value);
    // add details row
    addDetail = action(() => this.details.push(detailsStructure));
}

const formContext = createContext(new FormStore());

export default formContext;