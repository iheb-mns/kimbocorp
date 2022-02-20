import {  useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import FormInput from './FormInput';
export default function Forms({
    myform,
    setMyForm,
    backStep,
    nextStep,
    shareholders,
    onlyDirector,
    abFormValue,
    aboutError,
    setAboutError,
    aboutYou
}) {
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobError, setMobError] = useState(false);
  const [nationError, setNationError] = useState(false);
  const [firstValid, setFirstValid] = useState(false);
  const [lastValid, setLastValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [mobValid, setMobValid] = useState(false);
  const [nationValid, setNationValid] = useState(false);
  const [formValue, setFormValue] = useState({
    firstName :'',
    lastName :'', 
    email :'', 
    phoneNumber :'', 
    nationality :'',
  });  
  const [multip, setMultip] = useState([]);
  const validateEmail = (email) => {
    if(email === undefined){
      return;
    }
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleInputChange = (ev, name) => {
    setFormValue({...formValue , [name]: ev.target.value})
    if(name === 'firstName'){
      if(ev.target.value === ""){
        setFirstError(true)
      }else{
        setFirstError(false)
        setFirstValid(true)
      }
    }
    if(name === 'lastName'){
      if(ev.target.value === ""){
        setLastError(true)
      }else{
        setLastError(false)
        setLastValid(true)
      }
    }
    if(name === 'email'){
      if(ev.target.value === ""){
        setEmailError(true)
      }else if(!validateEmail(formValue.email)){
        setEmailError(true)
      }else{
        setEmailError(false)
        setEmailValid(true)
      }
    }
    if(name === 'phoneNumber'){
      if(ev.target.value === "" || ev.target.value.length < 10){
        setMobError(true)
      }else{
        setMobError(false)
        setMobValid(true)
      } 
    }
    if(name === 'nationality'){
      if(ev.target.value === ""){
        setNationError(true)
      }else{
        setNationError(false)
        setNationValid(true)
      }
    }
  }
  const handleCheckEmail = () => {
    if(formValue.email === ""){
      setEmailError(true)
      return false;
    }else if(!validateEmail(formValue.email)){
      setEmailError(true)
      return false; 
    }else{
      setEmailError(false)
    }
  }

  const saveData = () => {
      var error = false;
      if (shareholders === 'directors') {
      if(myform.permanentResident === true){
        if(abFormValue.firstName === ""){
          setAboutError({...aboutError, 'firstError': true})
          error= true;
        } 
        if(abFormValue.lastName === "" ){
          setAboutError({...aboutError, 'lastError': true})
          error= true;
        } 
        if(abFormValue.email === ""){
          setAboutError({...aboutError, 'emailError': true})
          error= true;
        }else if(!validateEmail(abFormValue.email)){
          setAboutError({...aboutError, 'emailError': true})
          error= true;
        }
        if(abFormValue.phoneNumber ===""){
          setAboutError({...aboutError, 'mobError': true})
          error= true;
        } 
        if(abFormValue.nationality === ""){
          setAboutError({...aboutError, 'nationError': true})
          error= true;
        }
      }
    }
      if(onlyDirector === true){
        if(formValue.firstName === ""){
          setFirstError(true)
          error= true;
        } 
        if(formValue.lastName === "" ){
          setLastError(true)
          error= true;
        } 
        if(formValue.email === ""){
          setEmailError(true)
          error= true;
        }else if(!validateEmail(formValue.email)){
          setEmailError(true)
          error= true;
        }
        if(formValue.phoneNumber ===""){
          setMobError(true)
          error= true;
        } 
        if(formValue.nationality === ""){
          setNationError(true)
          error= true;
        }
        if(error === false){
          var rr = multip;
          rr.push(formValue);
          setMyForm({...myform ,[shareholders]: rr});
          setMultip([]);
          localStorage.setItem('myForm', JSON.stringify(myform));
          nextStep()
        }
      }else{
        localStorage.setItem('myForm', JSON.stringify(myform));
        nextStep()
      }
      
  }
  const addAnother = () => {
    var error = false;
    if(formValue.firstName === ""){
      setFirstError(true)
      error= true;
    } 
    if(formValue.lastName === "" ){
      setLastError(true)
      error= true;
    } 
    if(formValue.email === ""){
      setEmailError(true)
      error= true;
    }else if(!validateEmail(formValue.email)){
      setEmailError(true)
      error= true;
    }
    if(formValue.phoneNumber ===""){
      setMobError(true)
      error= true;
    } 
    if(error === false){
      var rr = multip;
      rr.push(formValue);
      setMultip(rr);
      setFormValue({
        firstName :'',
        lastName :'', 
        email :'', 
        phoneNumber :'', 
        nationality :'',
      });
      setFirstValid(false);
      setLastValid(false);
      setEmailValid(false);
      setMobValid(false);
      setNationValid(false);
    }
    
  }
  useEffect(()=>{
    // if(myform.directorAr.length)
    if (shareholders === 'directors') {
      if(myform.directors.length > 0){
        setFormValue(myform.directors[0]);
      }else{
        setFormValue(myform.directors);
      }
    } else {
      if(myform.shareholders.length > 0){
        setFormValue(myform.shareholders[0])
      }else{
        setFormValue(myform.shareholders)
      }
    }
  },[])
  
    return (
        <Form>
          {onlyDirector? 
          <FormInput 
            formValue={formValue}
            handleCheckEmail={handleCheckEmail}
            handleInputChange={handleInputChange}
            firstError={firstError}
            lastError={lastError}
            emailError={emailError}
            mobError={mobError}
            nationError={nationError}
            firstValid={firstValid}
            lastValid={lastValid}
            emailValid={emailValid}
            mobValid={mobValid}
            nationValid={nationValid}
            addAnother={addAnother}
          />
          :
          ''
        }
          <FormGroup className="step-from-btn">
            <Button onClick={backStep}>Back</Button>
            <Button onClick={saveData}>Save & Next</Button>
          </FormGroup>
        </Form>
    )
}