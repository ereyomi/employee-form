import React, {useState, useEffect} from 'react';
import ExtraFields from './ExtraFields';
import {getExtraFormAccessByCountries, formFields} from './../utils/helpers'
import {useForm} from "react-hook-form";
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect'
const formDataStructure = {
    countryOfWork: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    holidayAllowance: 0,
    maritalStatus: '',
    numberOfChildren: 0,
    socialInsuranceNumber: 0,
    workingHours: 0,
    country: '',

}

const FormPage = () => {
  const [countriesData,setCountriesData]=useState([]);
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
  }, [] )
    // react form handlew
    const { register, formState: { errors }, handleSubmit } = useForm();
    // for from data
    const [ formData, setFormData ] = useState( formDataStructure )
    // For Extrafields
    const [ extraFieldData, setExtraFieldData ] = useState( null )
    // handle form data
    /* const handleForm = ( event ) => {
        event.preventDefault()
        const {name, value} = event.target
        setFormData( (prevData) => ({
            ...prevData,
            [name]: value 
        }))
    } */
    /* const handleSubmit = ( event ) => {
        event.preventDefault()
        console.log(formData)
    } */
    const handleOnSubmit = data => {
        console.log(data)
    }
    const handleOnChangeCountrySeletion = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        const getExtraFieldData = getExtraFormAccessByCountries(value)
        console.log( name, value, getExtraFieldData )
        setExtraFieldData(getExtraFieldData)
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
                                            options={formField.field.name === 'countryOfWork' ? countriesData : ''}
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
                        {
                            extraFieldData?.status && (
                                <ExtraFields {...extraFieldData} value={formData} register={register} errors={ errors }/>
                            )
                        }  
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