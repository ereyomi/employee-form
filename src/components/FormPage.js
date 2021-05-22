import React, {useState, useEffect} from 'react';
import Input from './Input';
import Select from './Select';
import ExtraFields from './ExtraFields';
import {getExtraFormAccessByCountries} from './../utils/helpers'

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
    const [ formData, setFormData ] = useState( formDataStructure )
    const [extraFieldData, setExtraFieldData ] = useState( null )
    const handleForm = ( event ) => {
        event.preventDefault()
        const {name, value} = event.target
        setFormData( (prevData) => ({
            ...prevData,
            [name]: value 
        }))
    }
    const handleSubmit = ( event ) => {
        event.preventDefault()
        console.log(formData)
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
                <form onSubmit={handleSubmit}>
                    <div className="custom-app-form">
                        <Select
                            value={formData.countryOfWork}
                            onChange={handleOnChangeCountrySeletion}
                            name="countryOfWork"
                            options={countriesData}
                            label="Select country of work"
                        />
                    </div>
                    <Input
                        label="First Name"
                        type="text"
                        value={formData.firstName}
                        onChange={handleForm}
                        name="firstName"
                        required={true}
                    />
                    <Input
                        type="text"
                        value={formData.lastName}
                        onChange={handleForm}
                        name="lastName"
                        label="Last Name"
                        required={true}
                    />
                    <Input
                        label="Date Of Birth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleForm}
                        name="dateOfBirth"
                        required={true}
                    />
                    <Input
                        label="Holiday"
                        type="number"
                        value={formData.holidayAllowance}
                        onChange={handleForm}
                        name="holidayAllowance"
                        required={true}
                    />
                    
                    <div>
                        {
                            extraFieldData?.status && (
                                <ExtraFields {...extraFieldData} onChange={handleForm} value={formData}/>
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