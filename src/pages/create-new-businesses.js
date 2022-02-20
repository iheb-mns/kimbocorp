import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Label,
  List,
  Row,
  Input,
  Button,
} from "reactstrap";
import facebook from "../images/share-facebook.png";
import linkedin from "../images/share-linkedin.png";
import whatsapp from "../images/share-whatsapp.png";
import xls from "../images/xls.png";
import email from "../images/email-icon.png";

export default function CreateNewBusiness() {
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active">
              <span>Invite to create new businesses</span>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main create-new-businesses">
          <Card className="cnb-top">
            <Row>
              <Col xs="8">
                <Card className="cnb-top-left">
                  <CardTitle tag="h2">
                    <strong>
                      Invite a friend to start a business and you will both get
                      a month off your subscription plan
                    </strong>
                  </CardTitle>
                  <CardText>
                    If you enjoy building new businesses with kimbocorp, share
                    it with friends and enjoy a month off your subscription plan
                  </CardText>
                </Card>
              </Col>
              <Col xs="4">
                <Card className="cnb-top-right">
                  <CardTitle tag="h5">
                    <strong>Share your link</strong>
                  </CardTitle>
                  <CardText>
                    Copy your personal referral link and share it with friends
                    and associates
                  </CardText>
                  <span className="link-block"></span>
                  <CardText>
                    X months free in potential subscription credits
                  </CardText>
                  <Card className="copy-share">
                    <Card className="copy-btn">
                      <Button>Copy</Button>
                    </Card>
                    <Card className="cs-share">
                      <Label>Share via</Label>
                      <a href="https://www.facebook.com/"  target="_blank"  rel="noreferrer">
                        <img src={facebook} alt=""/>
                      </a>
                      <a href="https://linkedin.com/"  target="_blank"  rel="noreferrer">
                        <img src={linkedin} alt=""/>
                      </a>
                      <a href="https://web.whatsapp.com/"  target="_blank"  rel="noreferrer">
                        <img src={whatsapp} alt=""/>
                      </a>
                    </Card>
                  </Card>
                </Card>
              </Col>
            </Row>
          </Card>
          <Card className="profile-detail cnb-bottom">
            <CardTitle tag="h2" className="text-center">
              <strong>Refer via email</strong>
            </CardTitle>
            <CardText>
              Enter your contacts and we will invite them for you
            </CardText>
            <Input
              id="exampleEmail"
              name="Type email address"
              placeholder="Type email address"
              type="email"
            />
            <CardText>X months free in potential subscription credits</CardText>
            <Card className="send-import">
              <Card className="send-btn">
                <Button>Send Invite</Button>
              </Card>
              <Card className="si-import">
                <Label>or import</Label>
                <span>
                  <img src={xls} alt=""/>
                </span>
                <span>
                  <img src={email} alt=""/>
                </span>
              </Card>
            </Card>
          </Card>
        </Card>
      </Container>
    </Card>
  );
}
