
import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import styles from './form-input.module.css';

const FormInput = ({ modifier, onChange, type, currency, ...rest}) =>{
    // default options for currency input
    const defaultMaskOptions = {
        prefix: '$',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ',',
        allowDecimal: true,
        decimalSymbol: '.',
        decimalLimit: 2, // how many digits allowed after the decimal
        integerLimit: 7, // limit length of integer numbers
        allowNegative: false,
        allowLeadingZeroes: false,
    }

    const currencyMask = createNumberMask(defaultMaskOptions)
    
    return (
        <span className={`${styles.wrapper} ${modifier || ''}`}>
            {currency ?
                <MaskedInput 
                    {...rest}
                    mask={currencyMask} 
                    className={styles.input}
                    onChange={e => onChange(e.target)} 
                    inputMode="numeric"
                />
                :
                <input 
                    {...rest}
                    type={type}
                    className={styles.input}
                    onChange={e => onChange(e.target)} 
                />
            }

        </span>
    )
}

FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'date', 'number']),
    error: PropTypes.string,
    placeholder: PropTypes.string,
};

export default FormInput