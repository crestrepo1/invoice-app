
import React from 'react';
import PropTypes from 'prop-types';

import styles from './form-input.module.css';

const FormInput = ({modifier, onChange, ...rest}) =>(
    <span className={styles.wrapper}>
        <input {...rest}
            type={rest.type}
            className={`${styles.input} ${modifier || ''}`}
            onChange={e => onChange(e.target)} />
        {rest.error && <div className="form-input__error">{rest.error}</div>}
    </span>
)

FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'date', 'number']),
    error: PropTypes.string,
    placeholder: PropTypes.string,
};

export default FormInput