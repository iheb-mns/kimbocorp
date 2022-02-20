import { useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
} from "reactstrap";

export default function NewShareholder({ show3, setShow3 }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [nation, setNation] = useState("");
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobError, setMobError] = useState(false);
  const [nationError, setNationError] = useState(false);
  const closeHandle = () => {
    setShow3(false);
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleCheckEmail = () => {
    if(email === ""){
      setEmailError(true)
      return false;
    }else if(!validateEmail(email)){
      console.log("erro");
      setEmailError(true)
      return false; 
    }else{
      setEmailError(false)
    }
  }
  const saveData = () => {
    setFirstError(false)
    setLastError(false)
    setEmailError(false)
    setMobError(false)
    setNationError(false)
    var error = false;
    if(first === ""){
      setFirstError(true)
      error= true
    }
    if(last === ""){
      setLastError(true)
      error= true
    } 
    if(email === "" || !validateEmail(email)){
      setEmailError(true)
      error= true
    }
    if(mob === ""){
      setMobError(true)
      error= true
    }
    if(nation === ""){
      setNationError(true)
      error= true
    }
    if(error === false){
      setShow3(false);
    }
  }
  return (
    <Modal isOpen={show3}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Information about new shareholder</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input name="First name" placeholder="First name" type="text" invalid={firstError} onChange={(ev) => setFirst(ev.target.value)}/>
            <Input name="Last name" placeholder="Last name" type="text" invalid={lastError} onChange={(ev) => setLast(ev.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Input name="Email" placeholder="Email" type="email" invalid={emailError} onChange={(ev) => setEmail(ev.target.value)}/>
            <Button onClick={handleCheckEmail}>Check</Button>
          </FormGroup>
          <FormGroup>
            <Input
              name="Mobile number"
              placeholder="Mobile number"
              type="text"
              onChange={(ev) => setMob(ev.target.value)}
              invalid={mobError}
            />
          </FormGroup>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select" invalid={nationError} onChange={(ev) => setNation(ev.target.value)}>
              <option>Nationality</option>
              <option>Nationality 2</option>
              <option>Nationality 3</option>
              <option>Nationality 4</option>
              <option>Nationality 5</option>
            </Input>
          </FormGroup>

          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the appointment
            </CardText>
          </Card>
          <Card className="popup-btn">
            <Button className="contact-link">Contact us</Button>
            <Button onClick={saveData}>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
