import { useEffect, useState } from "react";
import { Container, Card, List } from "reactstrap";
import StepOne from "../components/forms/StepOne";
import StepTwo from "../components/forms/StepTwo";
import StepThree from "../components/forms/StepThree";
import StepFour from "../components/forms/StepFour";

export default function Multistep() {
  const [steps, setSteps] = useState();
  const [list, setList] = useState([]);
  const [myform, setMyForm] = useState({
    businessStatus: 'Not incorporated',
    incorporation: true,
    companyName: '',
    companyActivity: '',
    uen: '',
    aboutYou: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      nationality: '',
      beneficialOwner: true,
    },
    about: true,
    shareholders: [{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      nationality: '',
    }],
    permanentResident: true,
    creatorIsDirector: true,
    address: '',
    directors: [{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      nationality: '',
    }],
    officers: [{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      nationality: '',
    }]
  })
  useEffect(() => {
    var stepss = localStorage.getItem('steps');
    var myForm = localStorage.getItem('myForm');
    if (myForm === null) {

    } else {
      setMyForm(JSON.parse(myForm))
    }
    if (stepss === null) {
      setSteps(1);
    } else {
      setSteps(parseInt(stepss));
    }
    const lists = [
      "Business information",
      "Directors",
      "Shareholders",
      "Address",
    ];
    setList(lists);
  }, [])
  const handleSteps = (ev, stp) => {
    if (steps > stp) {
      localStorage.setItem('steps', stp);
      setSteps(stp);
    }
  };
  function activeSteps(stp) {
    var dots = document.getElementsByClassName("allSteps");
    for (var n = 0; n < dots.length; ++n) {
      if (n < stp) {
        dots[n].classList.add("active");
      } else {
        dots[n].classList.remove("active");
      }
    }
  }
  const renderFunction = (params) => {
    activeSteps(steps);
    switch (params) {
      case 1:
        return <StepOne setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      case 2:
        return <StepThree setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      case 3:
        return <StepTwo setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      case 4:
        return <StepFour setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      default:
        return <StepOne setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
    }
  };
  const renderData = (list) => {
    return list.map((value, i) => {
      return (
        <li className={`allSteps ${i < steps ? "active" : ''}`} onClick={(ev) => handleSteps(ev, i + 1)} key={i}>
          <div>
            <span>{i + 1}</span>{value}
          </div>
        </li>
      );
    })
  }
  return (
    <Card className="multistep-section">
      <Container>
        <Card className="steps-bar">
          <List>
            {renderData(list)}
          </List>
        </Card>
        <Card className="steps-block-main">{renderFunction(steps)}</Card>
      </Container>
    </Card>
  );
}
