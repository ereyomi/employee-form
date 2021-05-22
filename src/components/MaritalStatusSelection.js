import React from 'react'
const MaritalStatusSelection = ({value, onChange, options}) => {
    return (
        <div>
            <label htmlFor="country">Select Country</label>
            <select>
                <option
                    key="default-marital-status"
                    value=""
                >
                    Select Marital Status
                </option>
                {
                    options.map(
                        ( d ) =>
                            <option key={d.value}>{ d.label }</option>
                    )
                }
            </select>
        </div>
    )
}

export default MaritalStatusSelection
