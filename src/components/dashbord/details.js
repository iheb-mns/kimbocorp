import React from "react";
import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardText,
  Button,
} from "reactstrap";
import user from "../../images/member2.png";

export default function ProfileDetail() {
  return (
    <Form>
      <Card className="profile-detail">
        <CardTitle tag="h4">
          <strong>Profile details</strong>
        </CardTitle>

        <Label>Full Name</Label>
        <FormGroup>
          <Input
            id="exampleEmail"
            name="First Name"
            placeholder="First Name"
            type="text"
          />
          <Input
            id="exampleEmail"
            name="Last Name"
            placeholder="Last Name"
            type="text"
          />
          <Input
            id="exampleEmail"
            name="Alias"
            placeholder="Alias"
            type="text"
          />
          <Card className="profile-image">
            <Input id="exampleFile" name="file" type="file" />
            <img src={user} alt="" />
          </Card>
        </FormGroup>
      </Card>

      <Card className="profile-detail profile-about">
        <CardTitle tag="h4">Profile details</CardTitle>
        <Input id="exampleEmail" name="About 1" type="text" />
        <Input id="exampleEmail" name="About 2" type="text" />
      </Card>

      <Card className="profile-detail profile-address">
        <Row>
          <Col xs="6">
            <Label>Address</Label>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="Address line 1"
                placeholder="Address line 1"
                type="text"
              />
              <Input
                id="exampleEmail"
                name="City"
                placeholder="City"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="Address line 2"
                placeholder="Address line 2"
                type="text"
              />
              <Input
                id="exampleEmail"
                name="Province"
                placeholder="Province"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col xs="6">
            <Label>Country</Label>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="Country"
                placeholder="Country"
                type="text"
              />
              <Input
                id="exampleEmail"
                name="Zip / Post code"
                placeholder="Zip / Post code"
                type="text"
              />
            </FormGroup>
            <CardText>
              In order to change your country, we require you to verify your
              identity. This is so we can verify your address details. The
              country will be automatically updated once the process is
              complete.
            </CardText>
          </Col>
        </Row>
      </Card>

      <Card className="profile-detail profile-security">
        <Row>
          <Col xs="6">
            <Label>Security phone number</Label>

            <FormGroup>
              <Input
                id="exampleEmail"
                name="Security phone number"
                type="text"
              />
              <Button>Request to change</Button>
            </FormGroup>
          </Col>
          <Col xs="6">
            <Label>Email address</Label>
            <FormGroup>
              <Input id="exampleEmail" name="Email address" type="text" />
              <Button>Request to change</Button>
            </FormGroup>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
