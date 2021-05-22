import React from 'react'


const Select = ({value, onChange, options, label, name, required=false}) => {
    return (
        <div>
            <label htmlFor={name}>{ label }</label>
            <select onChange={onChange} value={value} name={ name } id={ name } required={ required }>
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
