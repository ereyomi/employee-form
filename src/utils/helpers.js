export const maritalStatus = [
    {
        label: 'Male',
        value: 'M'
    },
    {
        label: 'Female',
        value: 'F'
    }
]

const formExtraFieldsByCountries = {
    // for (ES) spanin
    ES: {
        extralFields: [
            {
                type: 'select',
                options: maritalStatus,
                label: 'Marital Status',
                name: 'maritalStatus'
            },
            {
                type: 'number',
                label: 'Social Insurance Number',
                name: 'socialInsuranceNumber'
            }
        ],
        rules: {
            holidayAllowance: {
                min: 30,
            }
        } 
    },
    // for (GH) Ghana
    GH: {
        extralFields: [
            {
                type: 'select',
                options: maritalStatus,
                label: 'Marital Status',
                name: 'maritalStatus'
            },
            {
                type: 'number',
                label: 'Number Of Children',
                name: 'numberOfChildren'
            }
        ],
    },
    // for (ES) Brazil
    BR: {
        extralFields: [
            {
                type: 'number',
                label: 'Working Hours',
                name: 'workingHours'
            }
        ],
        rules: {
            holidayAllowance: {
                max: 30,
            }
        } 
    },
};

export const getExtraFormAccessByCountries = ( key ) => {
    const formAccess = formExtraFieldsByCountries[ key ]
    return {
        status: formAccess ? true : false,
        formAccess: formAccess ? formAccess: null,
    }
}