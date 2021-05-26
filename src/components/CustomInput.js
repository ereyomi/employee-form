import React from 'react';
import {getError} from './../utils/helpers'

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
            className="my-form-group"
            key={name}
        >
            <label htmlFor={name}>
                {label}
            </label>
            <input
                type={ type }
                {...register(name, rules)}
            />
            <p className="error">{error && getError(error)}</p>
        </div>
    )
}

export default CustomInput
