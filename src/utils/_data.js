const formExtraFieldsByCountries = {
    // for (ES) spanin
    ES: {
        extralField: {
            maritalStatus: true,
            socialInsuranceNumber: true,
            numberOfChildren: false,
            workingHours: false,
        },
        minimumHolidayAllowed: 30
    },
    // for (GH) Ghana
    GH: {
        extralField: {
            maritalStatus: true,
            socialInsuranceNumber: false,
            numberOfChildren: true,
            workingHours: false,
        },
        minimumHolidayAllowed: 0
    },
    // for (ES) Brazil
    BR: {
        extralField: {
            maritalStatus: false,
            socialInsuranceNumber: false,
            numberOfChildren: false,
            workingHours: true,
        },
        maximumHolidayAllowed: 30
    },
};
export const getExtraFormAccessByCountries = ( key ) => {
    const formAccess = formExtraFieldsByCountries[ key ]
    return {
        status: formAccess ? true : false,
        formAccess: formAccess ? formAccess : null,
    }
}