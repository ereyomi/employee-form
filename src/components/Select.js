import React from 'react'
const Select = ({value, onChange, options, label}) => {
    return (
        <div>
            <label htmlFor="country">{ label }</label>
            <select onChange={onChange} value={value}>
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
        </div>
    )
}

export default Select
