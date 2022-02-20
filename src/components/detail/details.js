import { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  List,
  Row,
  Input,
  Table,
  Button,
} from "reactstrap";
import member1 from "../../images/member1.png";
import member2 from "../../images/member2.png";
import member3 from "../../images/member3.png";
import shareicon from "../../images/share-icon.png";
import locationicon from "../../images/location-icon.png";
import shareedit from "../../images/share-edit.png";
import EditBusinessName from "../popup/edit-business-name";
import RemoveShareholder from "../popup/remove-shareholder";
import NewShareholder from "../popup/new-shareholder";
import NewOfficer from "../popup/new-officer";
import ChangeAddress from "../popup/change-address";
import PaidUp from "../popup/paid-up";
import Share from "../popup/share";
import Information from "../popup/information";
import Image from "../../components/Image";

export default function Detail() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show10, setShow10] = useState(false);
  const showPopup = () => {
    setShow(true);
  };
  const showPopup2 = () => {
    setShow2(true);
  };
  const showPopup3 = () => {
    setShow3(true);
  };
  const showPopup4 = () => {
    setShow4(true);
  };
  const showPopup5 = () => {
    setShow5(true);
  };
  const showPopup6 = () => {
    setShow6(true);
  };
  const showPopup7 = () => {
    setShow7(true);
  };
  const showPopup10 = () => {
    setShow10(true);
  };

  return (
    <Row>
      {show ? <EditBusinessName show={show} setShow={setShow} /> : ""}
      {show2 ? <RemoveShareholder show2={show2} setShow2={setShow2} /> : ""}
      {show3 ? <NewShareholder show3={show3} setShow3={setShow3} /> : ""}
      {show4 ? <NewOfficer show4={show4} setShow4={setShow4} /> : ""}
      {show5 ? <ChangeAddress show5={show5} setShow5={setShow5} /> : ""}
      {show6 ? <PaidUp show6={show6} setShow6={setShow6} /> : ""}
      {show7 ? <Share show7={show7} setShow7={setShow7} /> : ""}
      {show10 ? <Information show10={show10} setShow10={setShow10} /> : ""}
      <Col xs="8">
        <Card className="detail-business-block">
          <Card className="detail-business-header">
            <CardTitle tag="h3">Business Name</CardTitle>
            <Button onClick={showPopup}>
              Edit
            </Button>
          </Card>

          <List>
            <li>
              <h4>Company ABC</h4>
              <p>Formally known as Company XYZ</p>
            </li>
          </List>
        </Card>

        <Card className="detail-business-block detail-business-acitivity">
          <Card className="detail-business-header">
            <CardTitle tag="h3">Business Activity</CardTitle>
            <Button onClick={showPopup10}>
              Edit
            </Button>
          </Card>

          <Form>
            <FormGroup>
              <Input id="exampleSelect" name="select" type="select">
                <option>Primary Activity</option>
                <option>Primary activity-1</option>
                <option>Primary activity-2</option>
                <option>Primary activity-3</option>
                <option>Primary activity-4</option>
              </Input>
              <Input id="exampleSelect" name="select" type="select">
                <option>Secondary Activity</option>
                <option>Secondary activity-1</option>
                <option>Secondary activity-2</option>
                <option>Secondary activity-3</option>
                <option>Secondary activity-4</option>
              </Input>
            </FormGroup>
          </Form>
        </Card>

        <Card className="detail-business-block shareholders-block">
          <Card className="detail-business-header">
            <CardTitle tag="h3">Shareholders Name</CardTitle>
            <Button onClick={showPopup3}>
              Add
            </Button>
          </Card>

          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Ordinary number / Currency</th>
                <th className="text-center">Date of appointment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">First Name Last Name</td>
                <td className="text-center">100 / USD</td>
                <td className="text-center">2021-04-15</td>
                <td>
                  <Button onClick={showPopup2}>
                    Edit
                  </Button>
                  <Button >Resign</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card className="detail-business-block shareholders-block">
          <Card className="detail-business-header">
            <CardTitle tag="h3">
              Officers / Authorised Representatives
            </CardTitle>
            <Button onClick={showPopup4}>
              Add
            </Button>
          </Card>

          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Ordinary number / Currency</th>
                <th className="text-center">Date of appointment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">First Name Last Name</td>
                <td className="text-center">Singapore / Director</td>
                <td className="text-center">2021-12-01</td>
                <td>
                  <Button>Edit</Button>
                  <Button>Resign</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card className="detail-business-block shareholders-block share-capital-block">
          <Card className="detail-business-header">
            <CardTitle tag="h3">Share capital</CardTitle>
            <Button onClick={showPopup7}>
              Amendment in progress
            </Button>
          </Card>

          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">Issued share capital amount</th>
                <th className="text-center">Number of shares*</th>
                <th className="text-center">Currency</th>
                <th>Share type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  200,000 <Image src={shareedit} alt=""/>
                </td>
                <td className="text-center">200,000</td>
                <td className="text-center">USD</td>
                <td>Ordinary</td>
              </tr>
            </tbody>
          </Table>
          <CardText className="number-share-text">
            Number of shares including treasury shares*
          </CardText>
        </Card>

        <Card className="detail-business-block shareholders-block share-capital-block">
          <Card className="detail-business-header">
            <CardTitle tag="h3">Paid-up capital</CardTitle>
            <Button onClick={showPopup6}>
              Amendment in progress
            </Button>
          </Card>

          <Table responsive>
            <thead>
              <tr>
                <th>Issued share capital amount</th>

                <th>Currency</th>
                <th>Share type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  200,000 <Image src={shareedit} alt=""/>
                </td>

                <td>USD</td>
                <td>Ordinary</td>
              </tr>
            </tbody>
          </Table>
        </Card>

        <Card className="detail-business-block shareholders-block share-capital-block">
          <Card className="detail-business-header">
            <CardTitle tag="h3">Registered address</CardTitle>
            <Button onClick={showPopup5}>
              Amendment in progress
            </Button>
          </Card>

          <CardText className="registered-address-text">
            123 Building Name Street Name Level and Unit number Country Postcode
          </CardText>
        </Card>
      </Col>
      <Col xs="4">
        <Card className="sidebar-block">
          <List>
            <li>
              <h4>Ultimate beneficial owner</h4>
              <span>
                <Image src={member1} alt=""/>
              </span>
            </li>
            <li>
              <h4>Ultimate beneficial owner</h4>
              <span>
                <Image src={member1} alt=""/>
                <Image src={member2} alt=""/>
                <Image src={member3} alt=""/>
              </span>
            </li>
          </List>
        </Card>

        <Card className="sidebar-block text-center">
          <CardTitle tag="h3">Increase share capital</CardTitle>
          <Image src={shareicon} alt=""/>
          <CardText>
            Share capital consists of all funds raised by a company in exchange
            for common or preferred shares of stock. A company that wishes to
            raise more equity can issue and sell additional shares, thereby
            increasing its share capital.
          </CardText>
          <Button>Increase share capital</Button>
        </Card>

        <Card className="sidebar-block text-center">
          <CardTitle tag="h3">Change registered address</CardTitle>
          <Image src={locationicon} alt=""/>
          <CardText>
            You can change your business's registered address here. Must be an
            address in Singapore and cannot be a PO.Box number.
          </CardText>
          <Button onClick={showPopup5}>
            Change registered address
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
