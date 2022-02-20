import { useState } from "react";
import { Card, Container, List } from "reactstrap";
import ProfileDetail from "../components/dashbord/details";
import Payments from "../components/dashbord/payments";
import Security from "../components/dashbord/security";
import Verification from "../components/dashbord/verification";
import Account from "../components/dashbord/account";

export default function Dashbord() {
  const [steps, setSteps] = useState(1);
  const handleSteps = (ev, stp) => {
    var dots = document.querySelectorAll("li");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].className = "";
      }
    }
    ev.currentTarget.classList.add("active");
    setSteps(stp);
  }
  const renderFunction = (params) => {
    switch (params) {
      case 1:
        return <ProfileDetail />;
      case 2:
        return <Payments />;
      case 3:
        return <Security />;
      case 4:
        return <Verification />;
      case 5:
        return <Account />;
      default:
        return <ProfileDetail />;
    }
  };
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active" onClick={(ev) => handleSteps(ev, 1)}>
              <span>Details</span>
            </li>
            <li onClick={(ev) => handleSteps(ev, 2)}>
              <span>Payments</span>
            </li>
            <li onClick={(ev) => handleSteps(ev, 3)}>
              <span>Security</span>
            </li>
            <li onClick={(ev) => handleSteps(ev, 4)}>
              <span>Verification</span>
            </li>
            <li onClick={(ev) => handleSteps(ev, 5)}>
              <span>Account</span>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main ">
        {renderFunction(steps)}
        </Card>
      </Container>
    </Card>
  );
}
