import React from 'react';

import Button from '../Button';

import './invoice.css';

export default ({name, email, dueDate}) => (
    <div className='invoice'>
        <p><span className='invoice__detail'>Name:</span> {name}</p>
        <p><span className='invoice__detail'>Email:</span> {email}</p>
        <p><span className='invoice__detail'>Date:</span> {dueDate}</p>
        <Button>View</Button>
        <Button>Edit</Button>
    </div>
)