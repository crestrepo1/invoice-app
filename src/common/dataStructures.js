export const invoiceForm = {
        name: {
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
    }

export const detailsStructure = {
        name: {
            value: '',
            error: '',
            type: 'text',
            placeholder: 'item'
        },
        value: {
            value: '0',
            error: '',
            type: 'number',
            placeholder: "1.00",
            step:"0.01", 
            min:"0",
            max:"999"
        }
    }