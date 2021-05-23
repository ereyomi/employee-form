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
export const formFields = [
    {
        field: {
            type: 'select',
            label: 'Country of work',
            name: 'countryOfWork'
        },
        rules: {
            required: true
        }
        
    },
    {
        field: {
            type: 'text',
            label: 'First Name',
            name: 'firstName'
        },
        rules: {
            required: true
        }
        
    },
    {
        field: {
            type: 'text',
            label: 'Last Name',
            name: 'lastName'
        },
        rules: {
            required: true
        }
    },
    {
        field: {
            type: 'date',
            label: 'Date of Birth',
            name: 'dateOfBirth'
        },
        rules: {
            required: true
        }
    },
    {
        field: {
            type: 'number',
            label: 'Holiday Allowance',
            name: 'holidayAllowance'
        },
        rules: {
            required: true
        }
    },
];
export const getFormField = () => {
    return formFields;
}
const formExtraFieldsByCountries = {
    // for (ES) spanin
    ES: {
        extralFields: [
            {
                type: 'select',
                options: maritalStatus,
                label: 'Select Marital Status',
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
                label: 'Select Marital Status',
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

export const getExtraFormAccessByCountries = key => {
    const formAccess = formExtraFieldsByCountries[ key ]
    return {
        status: formAccess ? true : false,
        formAccess: formAccess ? formAccess: null,
    }
}