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
  Label,
} from "reactstrap";

export default function ChangeAddress({ show5, setShow5 }) {
  const closeHandle = () => {
    setShow5(false);
  };
  return (
    <Modal isOpen={show5}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Change registered address</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
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
              name="Address line 1"
              placeholder="Address line 1"
              type="text"
            />
          </FormGroup>
          <Label>New registered address</Label>
          <FormGroup>
            <Input
              name="Address line 1"
              placeholder="Address line 1"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="Address line 1"
              placeholder="Address line 1"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Country</option>
              <option>Country 2</option>
              <option>Country 3</option>
              <option>Country 4</option>
              <option>Country 5</option>
            </Input>
            <Input name="Post code" placeholder="Post code" type="text" />
          </FormGroup>

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
            <Button>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
