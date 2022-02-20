import { useState, useEffect } from "react";
import { Card, Container, List } from "reactstrap";
import Detail from "../components/detail/details";
import File from "../components/detail/files";
import Invite from "../components/detail/invite";
import Payment from "../components/detail/payments";
import Task from "../components/detail/tasks";

export default function DetailPage() {
  const [steps, setSteps] = useState(1);
  const [list, setList] = useState([]);
  const handleSteps = (ev, stp) => {
    var dots = document.querySelectorAll("li");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].className = "";
      }
    }
    ev.currentTarget.classList.add("active");
    setSteps(stp);
  };
  const renderFunction = (params) => {
    switch (params) {
      case 1:
        return <Detail />;
      case 2:
        return <Payment />;
      case 3:
        return <File />;
      case 4:
        return <Task />;
      case 5:
        return <Invite />;
      default:
        return <Detail />;
    }
  };
  const renderData = (list) => {
    return list.map((value, i) => {
      return( 
        <li className={`dt ${ i ===0 ? "active" : ''}`} onClick={(ev) => handleSteps(ev,  i+1)} key={i}>
          <span>{value}</span>
        </li>
      );
    })
  }
  useEffect(()=>{
    const lists = [
      "Details",
      "Payments",
      "Files",
      "Tasks",
      "Invite"
    ];
    setList(lists);
   },[])
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
          {renderData(list)}
          </List>
        </Card>
        <Card className="detailpage-main">{renderFunction(steps)}</Card>
      </Container>
    </Card>
  );
}
