import React from 'react';

const Input = ({type, name, value, onChange, required=false, disabled=false}) => {
    
    return (
        <div className="custom-app-form" key={name}>
            <label htmlFor={name}></label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                required={required}
                disabled={disabled}
            />
        </div>
    )
}

export default Input