import React from 'react'


const CustomSelect = (
    {
        name,
        label = '',
        register,
        rules,
        error,
        options
    }
) => {
    return (
        <div>
            <label htmlFor={name}>{ label }</label>
            <select  {...register(name, { ...rules })}>
                <option
                    key="default-marital-status"
                    value=""
                >
                   {label}
                </option>
                {
                    options.map(
                        ( d ) =>
                            <option key={d.value} value={d.value}>{ d.label }</option>
                    )
                }
            </select>
            <p>{error && "required"}</p>
        </div>
    )
}

export default CustomSelect
