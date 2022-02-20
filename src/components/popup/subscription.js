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
  Label,
} from "reactstrap";

export default function Subscription({ show9, setShow9 }) {
  const [business, setBusiness] = useState("");
  const [error, setError] = useState(false);
  const closeHandle = () => {
    setShow9(false);
  };
  const saveData = () => {
    if(business === ""){
      setError(true);
    }
  }
  return (
    <Modal isOpen={show9}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Manage subscription plan</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <Label>Current plan</Label>
          <FormGroup>
            <Input name="Free" placeholder="Free" type="text" />
          </FormGroup>

          <Label>New plan</Label>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select" invalid={error} onChange={(ev) => setBusiness(ev.target.value)}>
              <option>Close business</option>
              <option>Business 2</option>
              <option>Business 3</option>
              <option>Business 4</option>
              <option>Business 5</option>
            </Input>
          </FormGroup>

          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the cancelation
            </CardText>
            <CardText>2.Refer to our terms of cancelation</CardText>
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
