import React, { useMemo } from 'react'
import {
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import countryList from 'react-select-country-list'
export default function FormInput({
    formValue,
    firstError,
    lastError,
    emailError,
    mobError,
    nationError,
    firstValid,
    lastValid,
    emailValid,
    mobValid,
    nationValid,
    handleInputChange,
    handleCheckEmail,
    addAnother
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
        <>
           <FormGroup>
            <div className="shareholder-fields">
              <Input 
              name="" 
              value={formValue.firstName} 
              valid={firstValid} 
              invalid={firstError} 
              placeholder="First Name" type="text" 
              onChange={(ev) => handleInputChange(ev, 'firstName')}
              />
              {firstError ? <p className="required-text">First name is required</p> : ''}
            </div>
            <div className="shareholder-fields"> 
              <Input 
              name="" 
              valid={lastValid} 
              invalid={lastError} 
              placeholder="Last name" 
              type="text" 
              onChange={(ev) => handleInputChange(ev, 'lastName')} 
              value={formValue.lastName} 
              />
              {lastError ? <p className="required-text">Last name is required</p>  : ''}           
            </div>          
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="email-check">
              <div>
                <Input 
                name="" 
                value={formValue.email} 
                valid={emailValid} 
                invalid={emailError} 
                placeholder="Email address" 
                type="email" 
                onChange={(ev) => handleInputChange(ev, 'email')}
                />
                {emailError ? <p className="required-text">Email seems to be valid</p>  : ''}     
              </div>
              <Button onClick={handleCheckEmail}>Check</Button>
            </div>
            <div className="shareholder-fields">
              <Input 
               name=""
               type="number"
               valid={mobValid}
               invalid={mobError} 
               value={formValue.phoneNumber} 
               placeholder="Mobile number" 
               onChange={(ev) => handleInputChange(ev, 'phoneNumber')}
               />
              {mobError ? <p className="required-text">Mobile number is required</p>  : ''}    
            </div>
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="shareholder-fields">
            <Input id="exampleSelect" 
            name="select" 
            valid={nationValid} 
            invalid={nationError} 
            type="select" 
            value={formValue.nationality} 
            onChange={(ev) => handleInputChange(ev, 'nationality')}
            >
              {renderOption(options)}
            </Input>
              {nationError ? <p className="required-text">Nationality is required</p>  : ''}   
            </div>
            <div className="add-another">
              <Button onClick={addAnother}>Add another</Button>
            </div>
          </FormGroup>
        </>
    )
}
