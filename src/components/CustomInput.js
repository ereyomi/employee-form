import React from 'react';

const CustomInput = (
    {
        type,
        name,
        label = '',
        register,
        rules,
        error
    }
) => {
    
    return (
        <div
            className="custom-app-form"
            key={name}
        >
            <label htmlFor={name}>
                {label}
            </label>
            <input
                type={ type }
                {...register(name, { ...rules })}
            />
            <p>{error && "required"}</p>
        </div>
    )
}

export default CustomInput