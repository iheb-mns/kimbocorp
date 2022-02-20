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

export default function RemoveShareholder({ show2, setShow2 }) {
  const closeHandle = () => {
    setShow2(false);
  };
  return (
    <Modal isOpen={show2}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Are you sure you want to remove this shareholder?</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input name="First name" placeholder="First name" type="text" />
            <Input name="Last name" placeholder="Last name" type="text" />
          </FormGroup>

          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the removal
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
