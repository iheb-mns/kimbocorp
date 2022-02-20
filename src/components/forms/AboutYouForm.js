import React, { useMemo } from 'react'
import {
  FormGroup,
  Input,
  Button,
  Form,
} from "reactstrap";
import countryList from 'react-select-country-list'
export default function AboutYouForm({
    formValue,
    handleCheckEmail,
    handleInputChange,
    aboutError,
    aboutValid,
}) {
  const options = useMemo(() => countryList().getData(), [])
  const renderOption = (activity) => {
    return activity.map((value, i) => {
    return(
        <option value={value.value} key={i}>{value.label}</option>
    )
    })
  }

    return (
        <Form>
           <FormGroup>
            <div className="shareholder-fields">
              <Input 
              name="" 
              value={formValue.firstName} 
              valid={aboutValid.firstValid} 
              invalid={aboutError.firstError} 
              placeholder="First Name" type="text" 
              onChange={(ev) => handleInputChange(ev, 'firstName')}
              />
              {aboutError.firstError ? <p className="required-text">First name is required</p> : ''}
            </div>
            <div className="shareholder-fields"> 
              <Input 
              name="" 
              valid={aboutValid.lastValid} 
              invalid={aboutError.lastError} 
              placeholder="Last name" 
              type="text" 
              onChange={(ev) => handleInputChange(ev, 'lastName')} 
              value={formValue.lastName} 
              />
              {aboutError.lastError ? <p className="required-text">Last name is required</p>  : ''}           
            </div>          
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="email-check">
              <div>
                <Input 
                name="" 
                value={formValue.email} 
                valid={aboutValid.emailValid} 
                invalid={aboutError.emailError} 
                placeholder="Email address" 
                type="email" 
                onChange={(ev) => handleInputChange(ev, 'email')}
                />
                {aboutError.emailError ? <p className="required-text">Email seems to be valid</p>  : ''}     
              </div>
              <Button onClick={handleCheckEmail}>Check</Button>
            </div>
            <div className="shareholder-fields">
              <Input 
               name=""
               type="number"
               valid={aboutValid.mobValid}
               invalid={aboutError.mobError} 
               value={formValue.phoneNumber} 
               placeholder="Mobile number" 
               onChange={(ev) => handleInputChange(ev, 'phoneNumber')}
               />
              {aboutError.mobError ? <p className="required-text">Mobile number is required</p>  : ''}    
            </div>
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="shareholder-fields">
            <Input id="exampleSelect" 
            name="select" 
            valid={aboutValid.nationValid} 
            invalid={aboutError.nationError} 
            type="select" 
            value={formValue.nationality} 
            onChange={(ev) => handleInputChange(ev, 'nationality')}
            >
              {renderOption(options)}
            </Input>
              {aboutError.nationError ? <p className="required-text">Nationality is required</p>  : ''}   
            </div>
          </FormGroup>
        </Form>
    )
}
