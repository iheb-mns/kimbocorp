import React from "react";
import { Card, CardText, CardTitle, Col, List, Row } from "reactstrap";
import facebookicon from "../../images/facebook-icon.png";
import linkeinicon from "../../images/linkein-icon.png";

export default function Verification() {
  return (
    <>
      <Card className="profile-detail profile-verification">
        <CardTitle tag="h4">
          <strong>Trust and Verification</strong>
        </CardTitle>
        <CardText>
          <strong>What is a trust score?</strong>
        </CardText>
        <CardText>
          The kimbocorp trust score is at the core of how we handle
          verification, trust, and payments. The trust score is a value that
          indicates to what extent we have been able to verify who a user says
          they are. kimbocorp users who are the safest to work with are those
          who put in more effort to verify themselves to become highly trusted
          users. <a href="/">Learn more.</a>
        </CardText>
      </Card>

      <Card className="profile-detail profile-score-block">
        <Card className="steps-bar">
          <List>
            <li className="active">
              <div>
                <span></span>
              </div>
            </li>
            <li>
              <div>
                <span></span>Low
              </div>
            </li>
            <li>
              <div>
                <span></span>Good
              </div>
            </li>
            <li>
              <div>
                <span></span>Excellent
              </div>
            </li>
          </List>
        </Card>
        <Card className="score-strength">
          <CardText className="text-center">
            Current trust score:<strong>15</strong>
          </CardText>
          <CardText className="text-center">
            Strength:<strong>Low</strong>
          </CardText>
        </Card>
        <Card className="profile-point-block">
          <Row>
            <Col xs="6">
              <List>
                <li>
                  <label>Email address</label>
                  <span className="vertified point-btn">Vertified</span>
                  <span className="point-value">5 points</span>
                </li>
                <li>
                  <label>Phone number</label>
                  <span className="vertified point-btn">Vertified</span>
                  <span className="point-value">10 points</span>
                </li>
                <li>
                  <label>Facebook</label>
                  <span className="point-facebook point-btn">
                    <img src={facebookicon} alt="" /> Connect facebook
                  </span>
                  <span className="point-value">20 points</span>
                </li>
              </List>
            </Col>

            <Col xs="6">
              <List>
                <li>
                  <label>Linkedin</label>
                  <span className="point-linkedin point-btn">
                    <img src={linkeinicon} alt="" /> Connect linkedin
                  </span>
                  <span className="point-value">20 points</span>
                </li>
                <li>
                  <label>Authenticate credit or debit card</label>
                  <span className="point-authenticate point-btn">
                    Authenticate
                  </span>
                  <span className="point-value">45 points</span>
                </li>
              </List>
            </Col>
          </Row>
        </Card>
      </Card>
    </>
  );
}
