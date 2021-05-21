import React from 'react'
import MaritalStatusSelection from './MaritalStatusSelection'
import Input from './Input'

const ExtraFields = ({value, onChange}) => {
    return (
        <div>
            <MaritalStatusSelection />
            <div>
                <Input
                    label="Date Of Birth"
                    type="number"
                    name="dateOfBirth"
                />
            </div>
            <div>
                <Input
                    label="Social Insurance Number"
                    type="number"
                    name="socialInsuranceNumber"
                />
            </div>
            <div>
                <Input
                    label="Number Of Children"
                    type="number"
                    name="numberOfChildren"
                />
            </div>
            <div>
                <Input
                    label="Working Hours"
                    type="number"
                    name="workingHours"
                />
            </div>
        </div>
    )
}

export default ExtraFields
