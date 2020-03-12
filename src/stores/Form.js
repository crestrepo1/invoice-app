import { action, observable, computed } from 'mobx';

import { invoiceForm, detailsStructure } from '../common/dataStructures';

// store to control input form
export default class FormStore {
    @observable form = invoiceForm;
    // initiate rows array with 1 row
    @observable details = [detailsStructure];
    // set input value
    @action setFormData = ({name, value}) => this.form[name].value = value;
    // add details row
    @action addDetail = () => this.details.push(detailsStructure);
    // set detail data
    @action setDetailData = ({ name, value, dataset}) => this.details[dataset.index][name].value = value;

    @action clearForm = () => {
        this.form = invoiceForm;
        this.details = [detailsStructure];
    }

    @computed get detailsTotal() {
        return this.details.reduce((accumulator, currentValue) => {
            const amount = currentValue.value.value === '' ? 0 : currentValue.value.value;
            return accumulator + parseFloat(amount)}
        , 0)
    }

    @computed get invoiceValues() {
        const { name, email, date } = this.form

        const detailValues = this.details.map(detail => {
            return {name: detail.name.value, value: detail.value.value}
        });
        
        return {
            name: name.value,
            email: email.value,
            dueDate: date.value,
            details: detailValues,
            total: this.detailsTotal
        }
    }
}