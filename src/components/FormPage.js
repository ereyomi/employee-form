import React, {useState, useEffect} from 'react';
import Input from './Input';
import ExtraFields from './ExtraFields';

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
  }, [] )
    const [ formData, setFormData ] = useState( formDataStructure )
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
                        <select value={formData.country} onChange={handleForm} name="country">
                         
                            {
                                countriesData && countriesData.length > 0 && countriesData.map(
                                    ( item ) => <option key={item.code} value={item.code}>{item.countryName}</option>
                                )
                            }
                        </select>
                    </div>
                    <div>
                        <ExtraFields />
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