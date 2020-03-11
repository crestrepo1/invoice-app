import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({modifier, children, ...rest}) => (
    <button className={`button ${modifier}`} {...rest}>{children}</button>
)

Button.propTypes = {
    // onClick: PropTypes.func,
    modifier: PropTypes.string
}

Button.defaultProps = {
    modifier: ''
};

export default Button;