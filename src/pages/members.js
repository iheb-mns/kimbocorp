import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
} from "reactstrap";
import member1 from "../images/member1.png";
import member2 from "../images/member2.png";
import member3 from "../images/member3.png";
import Image from "../components/Image";

export default function Memberspage() {
  const [data, setData] = useState([]);
  const renderFunction = () => {
    //
  }
  useEffect(() => {
    let myData = localStorage.getItem('buisness');
    myData =  JSON.parse(myData);
    console.log(myData)
    const sataticData = [
      {
        id: 1,
        name: 'Pony',
        link : 'Kimbocorp.com/pony',
        status: 'Not incorporated',
        members: 'Three members',
        memberCount : 3
      },
      {
        id: 1,
        name: 'Indigo',
        link : 'Kimbocorp.com/indigo',
        status: 'Incorporated',
        members: 'Two members',
        memberCount : 2
      },
      {
        id: 1,
        name: 'Hooligan',
        link : 'Kimbocorp.com/hooligan',
        status: 'Incorporated',
        members: 'One members',
        memberCount : 1
      }
    ];
    setData(sataticData)
  }, [])
  const shoImage = (memberCount) => {
    var allImages= [];
    for(var c= 1; c<= memberCount; c++){
      if(c=== 1){
       allImages.push(<Image src={member1} alt="" key={c}/>);
      }else if(c=== 2){
       allImages.push(<Image src={member2} alt=""  key={c}/>);
      }else if(c=== 3){
       allImages.push(<Image src={member3} alt=""  key={c}/>);
      }
    }
    return allImages;
  }
  const renderData = (data) => {
   return data.map((value, i) => {
      return (
        <Row key={i}>
          <Col xs="4">
            <Card>
              <CardTitle tag="h5">
                <strong>{value.name}</strong>
              </CardTitle>
              <CardText>{value.link}</CardText>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <CardText>{value.status}</CardText>
            </Card>
          </Col>
          <Col xs="3">
            <Card>
              <Card className="members-thumbnail">
              {shoImage(value.memberCount)}
              </Card>
              <CardText>{value.members}</CardText>
            </Card>
          </Col>
          <Col xs="2">
            <Card>
              <Button onClick={renderFunction}>Launch</Button>
            </Card>
          </Col>
        </Row>
      )
    })
  }
  return (
    <Card className="members-section">
      <Container>
        <Card className="section-title">
          <CardTitle tag="h1" className="text-center">
            <strong>We found something</strong>
          </CardTitle>
        </Card>

        <Card className="members-block">
          <CardText>You're already a member of:</CardText>
         {renderData(data)}
        </Card>
        <Card className="section-bottom">
          <CardText>
            Want to create a new company account? <Button>Start here</Button>
          </CardText>
        </Card>
      </Container>
    </Card>
  );
}
