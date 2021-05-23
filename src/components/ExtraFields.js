import React from 'react'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'

const ExtraFields = ( {formAccess, register, errors} ) => {
    const {extralFields} = formAccess
    return (
        <div>
            <div>
                {
                    extralFields && extralFields.map( (field) => (
                        field.type === 'select'
                            ?
                            (
                                <CustomSelect
                                    {...field}
                                    register={register}
                                    error={errors[ field.name ]}
                                    key={field.name}
                                /> 
                             ) :
                            <CustomInput
                                key={field.name}
                                {...field}
                                register={register}
                                error={errors[ field.name ]}
                            />
                    )    
                  )  
                }
                
            </div>
        </div>
    )
}

export default ExtraFields
