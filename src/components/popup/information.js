import { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

export default function Information({ show10, setShow10 }) {
  // const [currentIdNub, setCurrentIdNub] = useState("");
  // const [addressLine1, setAddressLine1] = useState("");
  // const [addressLine2, setAddressLine2] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  // const [postCode, setPostalCode] = useState("");
  // const [uploadPassport, setUploadPassord] = useState("");
  const [newCurrentIdNub, setNewCurrentIdNub] = useState("");
  const [newAddressLine1, setNewAddressLine1] = useState("");
  const [newAddressLine2, setNewAddressLine2] = useState("");
  const [newCountryCode, setNewCountryCode] = useState("");
  const [newPostCode, setNewPostalCode] = useState("");
  const [newUploadPassport, setNewUploadPassord] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [error6, setError6] = useState(false);
  const closeHandle = () => {
    setShow10(false);
  };
  const saveData = () => {
    setError1(false)
    setError2(false)
    setError3(false)
    setError4(false)
    setError5(false)
    setError6(false)
    var error = false;
    if(newCurrentIdNub === ""){
      setError1(true)
      error= true
    }
    if(newAddressLine1 === ""){
      setError2(true)
      error= true
    } 
    if(newAddressLine2 === ""){
      setError3(true)
      error= true
    }
    if(newCountryCode === ""){
      setError4(true)
      error= true
    }
    if(newPostCode === ""){
      setError5(true)
      error= true
    }
    if(newUploadPassport === ""){
      setError6(true)
      error= true
    }
    if(error === false){
      setShow10(false);
    }
  }
  return (
    <Modal className="information-popup" isOpen={show10}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Information about First Name Last Name</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <Row>
            <Col xs="5">
              <Label>Current ID number</Label>
              <FormGroup>
                <Input name="1234567F" placeholder="1234567F" type="text" />
              </FormGroup>
              <Label>Upload Passport copy</Label>
              <FormGroup>
                <Input id="exampleFile" name="file" type="file"/>
              </FormGroup>
            </Col>
            <Col xs="7">
              <Label>Current registered address</Label>
              <FormGroup>
                <Input
                  name="Address line 1"
                  placeholder="Address line 1"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="Address line 2"
                  placeholder="Address line 2"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input name="Country" placeholder="Country" type="text" />
                <Input name="Post code" placeholder="Post code" type="text" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs="5">
              <Label>New ID number</Label>
              <FormGroup>
                <Input name="1234567F" invalid={error1} placeholder="1234567F" type="text" onChange={(ev) => setNewCurrentIdNub(ev.target.value)}/>
              </FormGroup>
              <Label>Upload Passport copy</Label>
              <FormGroup>
                <Input id="exampleFile" invalid={error6} name="file" type="file" onChange={(ev) => setNewUploadPassord(ev.target.files[0])}/>
              </FormGroup>
            </Col>
            <Col xs="7">
              <Label>New registered address</Label>
              <FormGroup>
                <Input
                  name="Address line 1"
                  placeholder="Address line 1"
                  type="text"
                  onChange={(ev) => setNewAddressLine1(ev.target.value)}
                  invalid={error2}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="Address line 2"
                  placeholder="Address line 2"
                  type="text"
                  onChange={(ev) => setNewAddressLine2(ev.target.value)}
                  invalid={error3}
                />
              </FormGroup>
              <FormGroup>
                <Input 
                  name="Country"
                  placeholder="Country"
                  type="text"
                  onChange={(ev) => setNewCountryCode(ev.target.value)} 
                  invalid={error4}
                  />
                <Input
                name="Post code"
                placeholder="Post code"
                type="text"
                onChange={(ev) => setNewPostalCode(ev.target.value)} 
                invalid={error5}
                />
              </FormGroup>
            </Col>
          </Row>
          <Card className="popup-btn">
            <Button className="contact-link">Contact us</Button>
            <Button onClick={saveData}>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
