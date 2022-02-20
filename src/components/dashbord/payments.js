import React from "react";
import {
  Card,
  CardTitle,
  Col,
  FormGroup,
  Label,
  Row,
  Input,
  Button,
  Form,
} from "reactstrap";
import checkicon from "../../images/green-check-icon.png";

export default function Payments() {
  return (
    <Form>
      <Card className="profile-detail profile-payment">
        <CardTitle tag="h4">
          <strong>Payment and financials</strong>
        </CardTitle>
        <Label>Payment method</Label>
        <Row>
          <Col xs="4">
            <FormGroup>
              <Input
                id="exampleEmail"
                name="First Name Last Name"
                placeholder="First Name Last Name"
                type="text"
                className="profile-paypal"
              />
            </FormGroup>
          </Col>
          <Col xs="8">
            <FormGroup check>
              <span className="authenticated-check">
                <Input id="exampleCheck" name="check" type="checkbox" />
                <img src={checkicon} alt="" />
              </span>
              <Label check for="exampleCheck">
                authenticated X
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <FormGroup>
              <Button>Add another payment method</Button>
            </FormGroup>
          </Col>
          <Col xs="8"></Col>
        </Row>
        <Row>
          <Col xs="4">
            <FormGroup>
              <Input id="exampleSelect" name="select" type="select">
                <option>Select your preferred payment method</option>
                <option>payment method 2</option>
                <option>payment method 3</option>
                <option>payment method 4</option>
                <option>payment method 5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col xs="8"></Col>
        </Row>
      </Card>
      <Card className="profile-detail profie-financial">
        <Row>
          <Col xs="4">
            <Label>Financial settings</Label>
            <FormGroup>
              <Input id="exampleSelect" name="select" type="select">
                <option>My currency</option>
                <option>My currency 1</option>
                <option>My currency 2</option>
                <option>My currency 3</option>
                <option>My currency 4</option>
              </Input>
            </FormGroup>
          </Col>
          <Col xs="8">
            <Label>Taxes used when you create an invoice for a client</Label>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="Tax Type"
                placeholder="Tax Type"
                type="text"
              />
              <Input id="exampleEmail" name="%" placeholder="%" type="text" />
              <Input
                id="exampleEmail"
                name="Tax or company ID"
                placeholder="Tax or company ID"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
