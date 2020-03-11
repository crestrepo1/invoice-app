import { action, observable, computed } from 'mobx';
import { createContext } from 'react';

const detailsStructure = {
    name: {
        value: '',
        error: '',
        type: 'text',

    },
    value: {
        value: '',
        error: '',
        type: 'number',

    }
}

class FormStore {
    @observable form = {
        name: {
            name: 'name',
            value: '',
            error: '',
            placeholder: 'enter your name',
            type: 'text',

        },
        email: {
            value: '',
            error: '',
            type: 'email',
            placeholder: 'enter your email',
        },
        date: {
            value: '',
            error: '',
            type: 'date',

        },
    };
    // initiate rows array with 1 row
    @observable details = [detailsStructure];
    // set input value
    @action setFormData = ({name, value}) => this.form[name].value = value;
    // add details row
    @action addDetail = () => this.details.push(detailsStructure);
    // set detail data
    @action setDetailData = ({ name, value, dataset}) => this.details[dataset.index][name].value = value

    @computed get invoiceValues() {
        const { name, email, date } = this.form

        const detailValues = this.details.map(detail => {
            return {name: detail.name.value, value: detail.value.value}
        });
        
        return {
            name: name.value,
            email: email.value,
            dueDate: date.value,
            details: detailValues
        }
    }
}

const formContext = createContext(new FormStore());

export default formContext;