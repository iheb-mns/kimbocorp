import { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Button,
  Row,
  Col,
  List,
  Label,
  Input
} from "reactstrap";
import axios from "axios";
var style={
  'background': '#7f0019',
  'border': 'none',
  'fontWeight': 'bold',
  'padding':' 10px 30px',
  'fontSize': '22px',
  'lineHeight': '32px',
  'color': '#fff',
  'width': '24%',
  'marginTop': '10px'
}
export default function PaymentForm({myform}) {
    const [monthly, setMonthly] = useState(true)
    const [addressList, setAddressList] = useState([]);
    const [paymentForm, setPaymentForm] = useState({
        email : '',
        phoneNumber:"",
        cardNumber: '',
        expireDate: '',
        cvc: '',
        name: '',
        address: '',
        city: '',
        check: false
    })
    const handleInputChange = (ev, name) => {
      setPaymentForm({...paymentForm , [name]: ev.target.value})
    }
    const savLater = () => {
     
     // window.location.href="/members";
    }
    //console.log(myform);
    //console.log(paymentForm);
    const saveForm = () => {
      //window.location.href="/members";
      axios.post('http://localhost:5000/api/company', {'paymentForm': paymentForm}).then((response)=>{
        //console.log(response);
      })
    }
    const changeYear = (ev, value) => {
      if(value === 'month'){
        setMonthly(true);
      }else{
        setMonthly(false);
      }
      var dots = document.getElementsByClassName("yeartab");
      for (var n = 0; n < dots.length; ++n) {
        if (dots[n] !== this) {
        dots[n].classList.remove("tab-active")
        }
      }
      ev.currentTarget.classList.add("tab-active");
    }
    const renderOption = (addressList) => {
        return addressList.map((value, i) => {
          return(
            <option value={value} key={i}>{value}</option>
          )
        })
      }
    useEffect(()=>{
        const allActivity = [
          'Singapore',
          'Singapore-1',
          'Singapore-2',
          'Singapore-3',
          'Singapore-4',
          'Singapore-5',
        ];
        setAddressList(allActivity);
        localStorage.setItem('myForm', JSON.stringify(myform));
      },[]);
    return(
    <Card className="steps-form step-four-bottom">
        <Card className="section-title">
          <CardTitle tag="h2" className="text-center">
            <strong>
              Congratulations you can incorporate your business immediately by
              selecting
              <br />
              the monthly or discounted yearly plan
            </strong>
          </CardTitle>
        </Card>
        <Row>
          <Col xs="4">
            <Card className="business-information bi-block">
              <List type="unstyled">
                <li>
                  1.Business information
                  <ul>
                    <li>a.new or existing business</li>
                    <li>b.company name</li>
                    <li>c.SSIC</li>
                  </ul>
                </li>
                <li>
                  2.Shareholders
                  <ul>
                    <li>a.UBO</li>
                    <li>b.other shareholders</li>
                    <li>name and contact information</li>
                  </ul>
                </li>
                <li>
                  3.Directors
                  <ul>
                    <li>a.foreigner / Singaporean or PR</li>
                    <li>b.other or only director</li>
                    <li>c.Name and contact information</li>
                  </ul>
                </li>
                <li>
                  4.Address
                  <ul>
                    <li>
                      a.151 chin swee road manhattan house 02-24 Singapore
                      169887
                    </li>
                  </ul>
                </li>
              </List>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="monthly-yearly-tabs bi-block">
              <Card className="tabs-links">
                <p className="yeartab tab-active" onClick={(ev) => changeYear(ev, 'month')}>
                  Monthly
                </p>
                <p className="yeartab" onClick={(ev) => changeYear(ev, 'year')}>Yearly</p>
              </Card>
              <Card className="tabs-detail">
                <CardTitle tag="h4" className="text-center">
                  <strong>Exempt</strong>
                </CardTitle>
                <CardText className="text-center">
                  Execute your business plan and receive revenues into adigital
                  bank account.
                </CardText>
                { monthly
                ?
                    <>
                    <CardTitle tag="h4" className="text-center">
                    USD 329
                    </CardTitle>
                    <CardText className="text-center">per month</CardText>
                    </> 
                :
                    <>
                    <CardTitle tag="h4" className="text-center">
                    USD 1329
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
          <Col xs="4">
            <Card className="checkout-form bi-block">
              <CardTitle tag="h5">
                <strong>Pay with Card</strong>
              </CardTitle>
              <Form>
                <Label>Contact information</Label>
                <FormGroup>
                  <Input
                    value={paymentForm.email}                                                                                                       
                    name=""
                    placeholder="email@example.com"
                    type="email"
                    className="checkout-email"
                    onChange={(ev) => handleInputChange(ev, 'email')}
                  />
                  <Input
                    value={paymentForm.phoneNumber}
                    name=""
                    placeholder="8123 4567"
                    type="text"
                    className="checkout-cardname"
                    onChange={(ev) => handleInputChange(ev, 'phoneNumber')}
                  />
                </FormGroup>

                <Label>Contact information</Label>
                <FormGroup>
                  <Input
                    value={paymentForm.cardNumber}
                    name=""
                    placeholder="1234 1234 1234 1234"
                    type="text"
                    className="checkout-cardno"
                    onChange={(ev) => handleInputChange(ev, 'cardNumber')}
                  />
                  <div className="checkout-date-cvc">
                    <Input
                      value={paymentForm.expireDate}
                      id="expireDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                      className="checkout-date"
                      onChange={(ev) => handleInputChange(ev, 'expireDate')}
                    />
                    <Input
                      value={paymentForm.cvc}
                      name=""
                      placeholder="CVC"
                      type="text"
                      className="checkout-cardcvc"
                      onChange={(ev) => handleInputChange(ev, 'cvc')}
                    />
                  </div>
                </FormGroup>

                <Label>Name on Card</Label>
                <FormGroup>
                  <Input value={paymentForm.name} name="" type="text" className="checkout-namecard" onChange={(ev) => handleInputChange(ev, 'name')}/>
                </FormGroup>

                <Label>Billing address</Label>
                <FormGroup>
                  <Input value={paymentForm.city} id="exampleSelect" name="select" type="select" onChange={(ev) => handleInputChange(ev, 'city')}>
                    {renderOption(addressList)}
                  </Input>
                  <Input
                    value={paymentForm.address}
                    name=""
                    placeholder="Address"
                    type="text"
                    className="checkout-address"
                    onChange={(ev) => handleInputChange(ev, 'address')}
                  />
                </FormGroup>
                <p className="address-manually">
                  Enter address manually
                </p>
                <FormGroup check>
                  <Input value={paymentForm.check} type="checkbox" onChange={(ev) => handleInputChange(ev, 'check')}/>
                  <Label check>
                    <strong>Save my info for secure 1-click checkout</strong>
                    <br />
                    Pay faster on kimbo Corporate Pte Ltd and thousands of
                    sites.
                  </Label>
                </FormGroup>
                <FormGroup className="subscribe-btn">
                  <Button onClick={saveForm}>Subscribe</Button>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
        <Button onClick={savLater} style={style}>Save Later</Button>
      </Card>
    )
}