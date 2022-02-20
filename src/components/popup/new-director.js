import React from "react";
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

export default function NewDirector({ show8, setShow8 }) {
  const closeHandle = () => {
    setShow8(false);
  };
  return (
    <Modal isOpen={show8}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Information about new director</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input name="First name" placeholder="First name" type="text" />
            <Input name="Last name" placeholder="Last name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="Email" placeholder="Email" type="email" />
            <Button>Check</Button>
          </FormGroup>
          <FormGroup>
            <Input
              name="Mobile number"
              placeholder="Mobile number"
              type="text"
            />
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
            <Button>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
