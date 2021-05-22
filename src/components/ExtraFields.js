import React from 'react'
import Select from './Select'
import Input from './Input'


const ExtraFields = ( {formAccess, value, onChange} ) => {
    const {extralFields} = formAccess
    return (
        <div>
            
            <div>
                {
                    extralFields && extralFields.map( (field) => (
                        field.type === 'select'
                            ?
                            ( <Select {...field} key={field.name} onChange={onChange} value={ value[field.name] }/> ) :
                            <Input
                                key={field.name}
                                {...field}
                                onChange={onChange}
                                value={value[field.name]}
                            />
                    )    
                  )  
                }
                
            </div>
        </div>
    )
}

export default ExtraFields
