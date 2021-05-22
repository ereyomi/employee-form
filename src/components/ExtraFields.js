import React from 'react'
import MaritalStatusSelection from './MaritalStatusSelection'
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
                            ( <MaritalStatusSelection {...field}/> ) :
                            <Input
                                key={field.name}
                                {...field}
                            />
                    )    
                  )  
                }
                
            </div>
        </div>
    )
}

export default ExtraFields
