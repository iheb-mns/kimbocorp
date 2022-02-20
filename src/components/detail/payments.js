import { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  List,
  Row,
  Form,
  Label,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import Subscription from "../popup/subscription";

export default function Payment() {
  const [show9, setShow9] = useState(false);
  const [plan, setPlan] = useState('Monthly');
  const showPopup9 = () => {
    setShow9(true);
  };
  const planChange = (ev, pln) => {
    setPlan(pln)
    var dots = document.getElementsByClassName("plan");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("tab-active");
      }
    }
    ev.currentTarget.classList.add("tab-active");
  }
  return (
    <>
      {show9 ? <Subscription show9={show9} setShow9={setShow9} /> : ""}
      <Card className="current-plan-section">
        <Card className="current-plan-header">
          <span className="active">
            Current Plan
          </span>
          <span>Free</span>
        </Card>
        <Row>
          <Col xs="6">
            <Card className="current-plan-block">
              <CardTitle tag="h3" className="text-center">
                <strong>Dormant</strong>
              </CardTitle>
              <CardText className="text-center">
                Remove all the barriers to entry in a new market with this basic
                plan
              </CardText>
              <List>
                <li>
                  Mandatory corporate secretary and nominee director
                  appointments
                </li>
                <li>
                  Resolutions to cover change of financial year, registered
                  address, business activities
                </li>
                <li>Hassle-free compliance, including AR and AGM</li>
                <li>
                  All business incorporation certificates and constitutions
                </li>
              </List>
            </Card>
          </Col>

          <Col xs="6">
            <Card className="current-plan-block">
              <CardTitle tag="h3" className="text-center">
                <strong>Exempt</strong>
              </CardTitle>
              <CardText className="text-center">
                Execute your business plan and receive revenues into a digital
                bank account
              </CardText>
              <List>
                <li>
                  Mandatory corporate secretary and nominee director
                  appointments
                </li>
                <li>
                  Resolutions to cover change of financial year, registered
                  address, business activities
                </li>
                <li>Hassle-free compliance, including AR and AGM</li>
                <li>
                  All business incorporation certificates and constitutions
                </li>
                <li>Everything in Dormant</li>
                <li>Bank account (WISE or ASPIRE)</li>
                <li>30-min strategy sessions every other week</li>
                <li>
                  Dedicated dashboard to post queries and wishlists where we
                  will respond within 24hrs
                </li>
              </List>
            </Card>
          </Col>

          <Card className="current-plan-bottom">
            <Button>Contact us</Button>
            <Button className="current-plan-checkout">
              Checkout
            </Button>
          </Card>
        </Row>
      </Card>

      <Card className="payment-monthly-yearly steps-form">
        <Row>
          <Col xs="6">
            <Card className="monthly-yearly-tabs bi-block">
              <Card className="tabs-links">
                <span className="plan tab-active" onClick={(ev) => planChange(ev , 'Monthly')}>
                  Monthly
                </span>
                <span className="plan" onClick={(ev) => planChange(ev ,'Yearly')}>Yearly</span>
              </Card>
              <Card className="tabs-detail">
                <CardTitle tag="h4" className="text-center">
                  <strong>Exempt</strong>
                </CardTitle>
                <CardText className="text-center">
                  Execute your business plan and receive revenues into adigital
                  bank account.
                </CardText>
                { plan ==="Monthly" ?
                <>
                <CardTitle tag="h4" className="text-center">
                  USD 329
                </CardTitle>
                <CardText className="text-center">per month</CardText>
                </>
                : 
                <>
                <CardTitle tag="h4" className="text-center">
                  USD 3600
                </CardTitle>
                <CardText className="text-center">per year</CardText>
                </>
                }
                
                <List>
                  <li>
                    Mandatory corporate secretary and nominee director
                    appointments
                  </li>
                  <li>Everything in Dormant</li>
                  <li>
                    Resolutions to cover change of financial year, registered
                    address, business activities
                  </li>
                  <li>30-min strategy sessions every other week</li>
                  <li>Bank account (WISE or ASPIRE)</li>
                  <li>Hassle-free compliance, including AR and AGM</li>
                  <li>
                    All business incorporation certificates and constitutions
                  </li>
                  <li>
                    Dedicated dashboard to post queries and wishlists where we
                    will respond within 24hrs
                  </li>
                </List>
              </Card>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="checkout-form bi-block">
              <CardTitle tag="h5">
                <strong>Pay with Card</strong>
              </CardTitle>
              <Form>
                <Label>Contact information</Label>
                <FormGroup>
                  <Input
                    name=""
                    placeholder="email@example.com"
                    type="email"
                    className="checkout-email"
                  />
                  <Input
                    name=""
                    placeholder="8123 4567"
                    type="text"
                    className="checkout-cardname"
                  />
                </FormGroup>

                <Label>Contact information</Label>
                <FormGroup>
                  <Input
                    name=""
                    placeholder="1234 1234 1234 1234"
                    type="text"
                    className="checkout-cardno"
                  />
                  <div className="checkout-date-cvc">
                    <Input
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                      className="checkout-date"
                    />
                    <Input
                      name=""
                      placeholder="CVC"
                      type="text"
                      className="checkout-cardcvc"
                    />
                  </div>
                </FormGroup>

                <Label>Name on Card</Label>
                <FormGroup>
                  <Input name="" type="text" className="checkout-namecard" />
                </FormGroup>

                <Label>Billing address</Label>
                <FormGroup>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Singapore</option>
                    <option>Singapore</option>
                    <option>Singapore</option>
                    <option>Singapore</option>
                    <option>Singapore</option>
                  </Input>
                  <Input
                    name=""
                    placeholder="Address"
                    type="text"
                    className="checkout-address"
                  />
                </FormGroup>
                <p className="address-manually">
                  Enter address manually
                </p>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>
                    <strong>Save my info for secure 1-click checkout</strong>
                    <br />
                    Pay faster on kimbo Corporate Pte Ltd and thousands of
                    sites.
                  </Label>
                </FormGroup>
                <FormGroup className="subscribe-btn">
                  <Button onClick={showPopup9}>Subscribe</Button>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
}
