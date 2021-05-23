import React, {useState, useEffect} from 'react';
import {getExtraFormAccessByCountries, getField, updateFieldAccess} from './../utils/helpers'
import {useForm} from "react-hook-form";
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect'

const FormPage = () => {
    const [ countriesData, setCountriesData ] = useState( [] );
    const [formFields, setFormFields] = useState( [] );
  const getData = () => {
    fetch('countries-key-value.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => {
        return response.json();
      })
        .then( ( myJson ) => {
            const mapCountryData = Object.keys(myJson).map(
                key => {
                    return {
                        value: key,
                        label: myJson[key]
                    }
              }
            )
        setCountriesData(mapCountryData)
      });
  }
  useEffect(()=>{
      getData()
      setFormFields( getField() )
  }, [] )
    // react form handlew
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleOnSubmit = data => {
        console.log(data)
    }
    const handleOnChangeCountrySeletion = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        if(name !== 'countryOfWork') return
        const getExtraFieldData = getExtraFormAccessByCountries(value)
        console.log( name, value, getExtraFieldData )
        setFormFields(updateFieldAccess(value))
    }
    return (
        <div className="sdsdsds">
            <h1>Employee Form Page</h1>
            <div>
                <form onSubmit={handleSubmit( handleOnSubmit )}>
                    <div>
                        {
                            formFields.map( formField => (
                                formField.field.type === 'select' ?
                                    (

                                        <CustomSelect
                                            {...formField.field}
                                            register={register}
                                            rules={formField.rules}
                                            error={errors[ formField.field.name ]}
                                            // this can be improved on
                                            options={formField.field.name === 'countryOfWork' ? countriesData : formField.field.options}
                                            key={formField.field.name}
                                            onChange={handleOnChangeCountrySeletion}
                                        /> 
                                    ) : (
                                        <CustomInput
                                            label={formField.field.label}
                                            type={formField.field.type}
                                            name={formField.field.name}
                                            register={register}
                                            rules={formField.rules}
                                            error={errors[ formField.field.name ]}
                                            key={formField.field.name}
                                        />   
                                    )
                                
                            ))
                        }
                    </div>
                    <div>
                    </div>
                    <div className="formControl">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPage