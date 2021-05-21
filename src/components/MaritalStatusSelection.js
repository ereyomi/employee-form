import React from 'react'
import {maritalStatus} from './../utils/helpers'
const MaritalStatusSelection = ({value, onChange}) => {
    return (
        <div>
            <div>
                <select>
                    <option key="default-marital-status" value="">Select Marital Status</option>
                    {
                        maritalStatus.map(
                            ( d ) =>
                                <option key={d.value}>{ d.label }</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}

export default MaritalStatusSelection
