export const maritalStatus = [
    {
        label: 'Male',
        value: 'M'
    },
    {
        label: 'Female',
        value: 'F'
    }
];
export const formFields = {
    countryOfWork: {
        field: {
            type: 'select',
            label: 'Country of work',
            name: 'countryOfWork'
        },
        rules: {
            required: true
        }

    },
    firstName: {
        field: {
            type: 'text',
            label: 'First Name',
            name: 'firstName'
        },
        rules: {
            required: true
        }

    },
    lastName: {
        field: {
            type: 'text',
            label: 'Last Name',
            name: 'lastName'
        },
        rules: {
            required: true
        }
    },
    dateOfBirth: {
        field: {
            type: 'date',
            label: 'Date of Birth',
            name: 'dateOfBirth'
        },
        rules: {
            required: true
        }
    },
    holidayAllowance: {
        field: {
            type: 'number',
            label: 'Holiday Allowance',
            name: 'holidayAllowance'
        },
        rules: {
            required: true
        }
    },
};

const formExtraField = {
    // for (ES) spanin
    ES: {
        extralFields: {
            maritalStatus: {
                field: {
                    type: 'select',
                    options: maritalStatus,
                    label: 'Select Marital Status',
                    name: 'maritalStatus'
                },
                rules: {
                    required: true
                }
            },
            socialInsuranceNumber: {
                field: {
                    type: 'number',
                    label: 'Social Insurance Number',
                    name: 'socialInsuranceNumber'
                },
                rules: {
                    required: true
                }
            }
        },
        extralRules: {
            holidayAllowance: {
                min: 30,
            }
        }
    },
    // for (GH) Ghana
    GH: {
        extralFields: {
            maritalStatus: {
                field: {
                    type: 'select',
                    options: maritalStatus,
                    label: 'Select Marital Status',
                    name: 'maritalStatus'
                },
                rules: {
                    required: true
                }
            },
            numberOfChildren: {
                field: {
                    type: 'number',
                    label: 'Number Of Children',
                    name: 'numberOfChildren'
                },
                rules: {
                    required: true
                }
            }
        },
    },
    // for (ES) Brazil
    BR: {
        extralFields: {
            workingHours: {
                field: {
                    type: 'number',
                    label: 'Working Hours',
                    name: 'workingHours'
                },
                rules: {
                    required: true
                }
            }
        },
        extralRules: {
            holidayAllowance: {
                max: 40
            }
        }
    },
};
export const getField = (fField = formFields) => {
    return Object.keys( fField ).map( key => {
        return {
            ...fField[key]
        }
    })
}
export const getExtraFormAccessByCountries = key => {
    const formAccess = formExtraField[ key ]
    return {
        status: formAccess ? true : false,
        formAccess: formAccess ? {
            ...formAccess,
            extralFields: getField(formAccess.extralFields)
        }: null,
    }
}
const setExtralRulesIfExist = ( data ) => {
    const mapData =  Object.keys( formFields ).map( key => {
        return [
            [ key ] , {
                ...formFields[key],
                rules: {
                    ...formFields[key].rules,
                    ...data.extralRules[ key ],
                }
            }
        ]
    } )
    return Object.fromEntries(mapData)
}
export const updateFieldAccess = key => {
    const formAccessData = formExtraField[ key ]
    console.log('dsdsd',formAccessData)
    if ( formAccessData.hasOwnProperty( 'extralRules' ) && formAccessData.hasOwnProperty( 'extralFields' ) ) {
        console.log('here', setExtralRulesIfExist( formAccessData ))
        return [
            ...getField( setExtralRulesIfExist( formAccessData ) ),
            ...getField(formAccessData.extralFields)
        ]
    } else if(!formAccessData.hasOwnProperty('extralRules') && formAccessData.hasOwnProperty('extralFields') ) {
        return [
            ...getField(),
            ...getField(formAccessData.extralFields)
        ]
    } else {
        return getField()
    }

}
export const getError = (error) => {
  switch (error.type) {
    case 'required':
        return 'required'
      // eslint-disable-next-line no-unreachable
      break;
      case 'min':
          return 'unexpected min. Min 30 allowed.'
        // eslint-disable-next-line no-unreachable
        break;
        case 'max':
            return 'unexpected max. Max 40 allowed.'
          // eslint-disable-next-line no-unreachable
          break;
    default:
      return 'required'
  }
}
