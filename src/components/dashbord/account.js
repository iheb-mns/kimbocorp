import React from "react";
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function Account() {
  return (
    <Form>
      <Card className="profile-detail profile-account">
        <CardTitle tag="h4">
          <strong>Account</strong>
        </CardTitle>
        <Label>Directory and Follow Settings</Label>
        <FormGroup check>
          <Card className="toggle-btn">
            <Input type="checkbox" />
            <span></span>
          </Card>
          <Label check>
            List my profile publicly, allowing anyone to engage me directly for
            projects
          </Label>
        </FormGroup>
        <FormGroup check>
          <Card className="toggle-btn">
            <Input type="checkbox" />
            <span></span>
          </Card>
          <Label check>
            Allow anyone to follow me, notifying them when I have updated my
            profile and opportunities I've posted
          </Label>
        </FormGroup>
        <hr />
        <Label>Close my account</Label>
        <Button>Close my account</Button>
      </Card>
    </Form>
  );
}
