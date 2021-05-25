import React from 'react'


const CustomSelect = (
    {
        name,
        label = '',
        register,
        rules,
        error,
        options,
        ...others
    }
) => {
    return (
        <div key={name} className="my-form-group">
            <label htmlFor={name}>{ label }</label>
            <select  {...register(name, rules)} {...others}>
                <option
                    key={`default-status-${name}`}
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
            <p className="error">{error && "required"}</p>
        </div>
    )
}

export default CustomSelect
