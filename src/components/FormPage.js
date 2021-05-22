import React, {useState, useEffect} from 'react';
import Input from './Input';
import ExtraFields from './ExtraFields';
import {getExtraFormAccessByCountries} from './../utils/helpers'

const formDataStructure = {
    countryOfWork: 'ES',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    holidayAllowance: 0,
    maritalStatus: 'M',
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
                        code: key,
                        countryName: myJson[key]
                    }
              }
            )
        setCountriesData(mapCountryData)
      });
  }
  useEffect(()=>{
      getData()
      console.log( getExtraFormAccessByCountries( 'ES' ) )
      setExtraFieldData(getExtraFormAccessByCountries( 'ES' ))
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
                <form onSubmit={ handleSubmit}>
                    <Input
                        label="Country Of Work"
                        type="text"
                        value={formData.countryOfWork}
                        onChange={handleForm}
                        name="countryOfWork"
                        required={true}
                    />
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
                    <div className="custom-app-form">
                        <label htmlFor="country">Select Country</label>
                        <select value={formData.countryOfWork} onChange={handleOnChangeCountrySeletion} name="countryOfWork">
                         
                            {
                                countriesData && countriesData.length > 0 && countriesData.map(
                                    ( item ) => <option key={item.code} value={item.code}>{item.countryName}</option>
                                )
                            }
                        </select>
                    </div>
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