import React, {useState, useEffect} from 'react';
import {getExtraFormAccessByCountries, getField, updateFieldAccess} from './../utils/helpers'
import {useForm} from "react-hook-form";
import CustomInput from './../components/CustomInput';
import CustomSelect from './../components/CustomSelect'

const FormPage = () => {
  // react form handle state
  const { register, formState: { errors }, handleSubmit } = useForm();
  // set country data state
    const [ countriesData, setCountriesData ] = useState( [] );
    // formField state
    const [formFields, setFormFields] = useState( [] );

  useEffect(()=>{
    console.log(updateFieldAccess('ES'))
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
        // set countries data
        setCountriesData(mapCountryData)
      })
      .catch(err => console.log(err))
      .finally(
        ()=> setFormFields( getField() )
      );

  }, [] )
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
        <div className="formPage">
            <h1>Employee Form Page</h1>
            <div>
                <form onSubmit={handleSubmit( handleOnSubmit )} className="myForm">
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
                    <div className="my-form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPage
