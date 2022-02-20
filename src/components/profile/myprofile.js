import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Label,
  List,
  Row,
  Input,
  Button,
} from "reactstrap";
import user from "../../images/member2.png";
import verifycheck from "../../images/verify-check.png";

export default function MyProfile() {
  return (
    <Card className="myprofile">
      <Row>
        <Col xs="8">
          <Card className="myprofile-left">
            <CardTitle tag="h2">
              <strong>First Name Last Name</strong>
            </CardTitle>
            <CardText>
              <strong>Location</strong>
            </CardText>
            <CardText>City, Country</CardText>
            <CardText></CardText>
            <CardText>
              First Name is available for new engagements Engage First Name
            </CardText>
            <Button>Engage First name</Button>
            <CardTitle tag="h2">
              <strong>About</strong>
            </CardTitle>
            <CardText>About Line 1</CardText>
            <CardText>About Line 2</CardText>
          </Card>
        </Col>
        <Col xs="4">
          <Card className="myprofile-right">
            <Card className="profile-image">
              <Input id="exampleFile" name="file" type="file" />
              <img src={user} alt="" />
            </Card>
            <Card className="myprofile-verifaction">
              <CardTitle tag="h5" className="text-center">
                <strong>Vertifications</strong>
              </CardTitle>
              <List>
                <li>
                  <Label>Preferred profile</Label>
                  <span>Join now</span>
                </li>
                <li>
                  <Label>Identity Verified</Label>
                  <span className="verify">Verify</span>
                </li>
                <li>
                  <Label>Email Verified</Label>
                  <span className="verify-check">
                    <img src={verifycheck} alt=""/>
                  </span>
                </li>
                <li>
                  <Label>Phone Verified</Label>
                  <span className="verify-check">
                    <img src={verifycheck} alt=""/>
                  </span>
                </li>
                <li>
                  <Label>Linkedin Verified</Label>
                  <span className="verify-check">
                    <img src={verifycheck} alt=""/>
                  </span>
                </li>
                <li>
                  <Label>Facebook Verified</Label>
                  <span className="verify">Connect</span>
                </li>
              </List>
            </Card>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}
