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
  FormFeedback,
  Input,
} from "reactstrap";

export default function EditBusinessName({ show, setShow }) {
  const [currentName, setCurrentName] = useState("");
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);
  const closeHandle = () => {
    setShow(false);
  };
  const saveData = () => {
    setError(false)
    if(newName === ''){
      setError(true)
    }else{
      setShow(false);
    }
  }
  const handleCheck = () => {
    console.log('check');
  }
  return (
    <Modal isOpen={show}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Edit business name</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input 
              name="Current name" 
              onChange={(ev) =>{
                setCurrentName(ev.target.value)
              }} 
              placeholder="Current name" 
              type="text" 
              value={currentName}
            />
          </FormGroup>
          <FormGroup>
            <div>
            <Input 
              valid={valid}
              name="New name" 
              placeholder="New name" 
              type="text" 
              value={newName}
              onChange={(ev) =>{
                if(ev.target.value === ''){
                  setError(true)
                  setValid(false);
                }else{
                  setError(false)
                  setValid(true);
                }
                setNewName(ev.target.value)
              }}
              invalid={error}
            />
            {error ? <p className="required-text">"It seems like it is available in Singapore", or "Please enter another name, it seems like it is not available in Singapore"</p> : ''}
            </div>
            <Button onClick={handleCheck}>Check</Button>
          </FormGroup>
          <FormFeedback>
            "It seems like it is available in Singapore", or "Please enter
            another name, it seems like it is not available in Singapore
          </FormFeedback>
          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the amendment
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
