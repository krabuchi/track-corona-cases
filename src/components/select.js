import React from 'react';

function Select(props) {
    return (
        <div className='select'>
            <select 
                className="select-country" 
                onChange={props.handleChange} 
                country={props.data.country}
            >
                <option value={'India'}>select country</option>
                {props.data}
            </select>
        </div>
    )
}

export default Select