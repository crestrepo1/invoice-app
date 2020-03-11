
import React from 'react';
import PropTypes from 'prop-types';


const FormInput = props =>(
    <span className='form-input'>
        <input {...props}
            type={props.type || 'test'}
            className="form-input__field"
            onChange={(e) => props.onChange(e.target.name, e.target.value)} />
        {props.error && <div className="form-input__error">{props.error}</div>}
    </span>
)

FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'date']),
    error: PropTypes.string,
    placeholder: PropTypes.string,
};

export default FormInput