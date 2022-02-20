import { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Tooltip,
} from "reactstrap";
import icon3 from "../../images/step-icon-3.jpg";
import icon4 from "../../images/step-icon-4.jpg";
import icon5 from "../../images/step-icon-5.jpg";
import Forms from './Form';
import Image from "../../components/Image";
import AboutYouForm from './AboutYouForm'
export default function StepThree({ myform, setSteps, setMyForm }) {
  const [open, setOpen] = useState(false);
  const [onlyDirector, setOnlyDirector] = useState(myform.creatorIsDirector);
  const [abFormValue, setAbFormValue] = useState(myform.aboutYou);
  const [aboutError, setAboutError] = useState([
    {
      firstError: false,
      lastError: false,
      mobError: false,
      emailError: false,
      nationError: false,
    }
  ]);
  const [AboutValid, setAboutValid] = useState([
    {
      firstValid: false,
      lastValid: false,
      emailValid: false,
      mobValid: false,
      nationValid: false
    }
  ]);
  const validateEmail = (email) => {
    if (email === undefined) {
      return;
    }
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleInputChange = (ev, name) => {
    setAbFormValue({ ...abFormValue, [name]: ev.target.value })
    if (name === 'firstName') {
      if (ev.target.value === "") {
        setAboutError({ ...aboutError, 'firstError': true })
      } else {
        setAboutError({ ...aboutError, 'firstError': false })
        setAboutValid({ ...AboutValid, 'firstValid': true })
      }
    }
    if (name === 'lastName') {
      if (ev.target.value === "") {
        setAboutError({ ...aboutError, 'lastError': true })
      } else {
        setAboutError({ ...aboutError, 'lastError': false })
        setAboutValid({ ...AboutValid, 'lastValid': true })
      }
    }
    if (name === 'email') {
      if (ev.target.value === "") {
        setAboutError({ ...aboutError, 'emailError': true })
      } else if (!validateEmail(abFormValue.email)) {
        setAboutError({ ...aboutError, 'emailError': true })
      } else {
        setAboutError({ ...aboutError, 'emailError': false })
        setAboutValid({ ...AboutValid, 'emailValid': true })
      }
    }
    if (name === 'phoneNumber') {
      if (ev.target.value === "" || ev.target.value.length < 10) {
        setAboutError({ ...aboutError, 'mobError': true })
      } else {
        setAboutError({ ...aboutError, 'mobError': false })
        setAboutValid({ ...AboutValid, 'mobValid': true })
      }
    }
    if (name === 'nationality') {
      if (ev.target.value === "") {
        setAboutError({ ...aboutError, 'nationError': true })
      } else {
        setAboutError({ ...aboutError, 'nationError': false })
        setAboutValid({ ...AboutValid, 'nationValid': true })
      }
    }
    setMyForm({ ...myform, 'aboutYou': abFormValue });
  }
  const handleCheckEmail = () => {
    if (abFormValue.email === "") {
      setAboutError({ ...aboutError, 'emailError': true })
      return false;
    } else if (!validateEmail(abFormValue.email)) {
      setAboutError({ ...aboutError, 'emailError': true })
      return false;
    } else {
      setAboutError({ ...aboutError, 'emailError': false })
    }
  }
  const showTooltip = () => {
    setOpen(!open);
  };
  const nextStep = () => {
    localStorage.setItem('steps', 3);
    setSteps(3)
  }
  const backStep = () => {
    localStorage.setItem('steps', 1);
    setSteps(1)
  }
  const handleOwnerChange = (ev, value, name) => {
    var dots = document.getElementsByClassName("firstStep");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("active")
      }
    }
    ev.currentTarget.classList.add("active");
    setMyForm({ ...myform, [name]: value })
  }
  const handleShareChange = (ev, value, name) => {
    var dots = document.getElementsByClassName("secondStep");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("active")
      }
    }

    setOnlyDirector(value);
    ev.currentTarget.classList.add("active");
    setMyForm({ ...myform, [name]: value })
  }

  const handleReset = () => {
    if (myform.creatorIsDirector === false){
    }
  }
  return (
    <Card className="steps-block">
      <Card className="section-title">
        <CardTitle tag="h2" className="text-center title-with-tooltip">
          <strong>
            Every business in Singapore needs to appoint a resident director.
          </strong>
          <div>
            <span
              id="TooltipExample"
              className="form-tooltip"
              onMouseOver={showTooltip}
            >
              !
            </span>

            <Tooltip
              flip
              placement="right"
              target="TooltipExample"
              isOpen={open}
            >
              A shareholder owns a share in the business in exchange for his
              financial or technical contribution towards the business. A share
              is a portion of the business.
              <br />A shareholder may be an individual, a company or a limited
              liability partnership. By allocating shares to any of the
              aforementioned, the person or entity become partial owner of the
              business.
            </Tooltip>
          </div>
        </CardTitle>
        <CardText>
          Are you a foreigner or Singaporean/Singaporean Permanent Resident?
        </CardText>
      </Card>
      <Row>
        <Col xs="6">
          <Card className={myform.permanentResident === true ? 'steps-detail-block firstStep active' : 'steps-detail-block firstStep'} onClick={(ev) => handleOwnerChange(ev, true, 'permanentResident')}>
            <Image src={icon3} alt="" />
            <CardText>I am a Singaporean/PR</CardText>
          </Card>
        </Col>
        <Col xs="6">
          <Card className={myform.permanentResident === false ? 'steps-detail-block firstStep active' : 'steps-detail-block firstStep'} onClick={(ev) => handleOwnerChange(ev, false, 'permanentResident')}>
            <Image src={icon5} alt="" />
            <CardText>I am a foreigner</CardText>
          </Card>
        </Col>
      </Row>
      {myform.permanentResident === true ?
        <Row>
          <Card className="steps-form shareholder-form">
            <Card className="section-title">
              <CardTitle tag="h2">
                <strong>Information about you</strong>
              </CardTitle>
            </Card>
            <AboutYouForm
              setFormValue={setAbFormValue}
              formValue={abFormValue}
              handleCheckEmail={handleCheckEmail}
              handleInputChange={handleInputChange}
              aboutError={aboutError}
              aboutValid={AboutValid}
            />
          </Card>
        </Row> :
        ''}

      {myform.permanentResident === false ?
        <Row>
          <Card className="steps-form shareholder-form">
            <Card className="section-title">
              <CardTitle tag="h2">
                <strong>Information about you</strong>
              </CardTitle>
            </Card>
            <AboutYouForm
              setFormValue={setAbFormValue}
              formValue={abFormValue}
              handleCheckEmail={handleCheckEmail}
              handleInputChange={handleInputChange}
              aboutError={aboutError}
              aboutValid={AboutValid}
            />
          </Card>
        </Row> :
        ''}
      <Card className="step-business-section">
        <Card className="section-title ">
          <CardTitle tag="h2" className="title-with-tooltip">
            <strong>
              Besides yourself, do you have other persons who can be appointed
              as directors?
            </strong>
            <div>
              <span
                id="TooltipExample"
                className="form-tooltip"
                onMouseOver={showTooltip}
              >
                !
              </span>

              <Tooltip
                flip
                placement="right"
                target="TooltipExample"
                isOpen={open}
              >
                A shareholder owns a share in the business in exchange for his
                financial or technical contribution towards the business. A
                share is a portion of the business.
                <br />A shareholder may be an individual, a company or a limited
                liability partnership. By allocating shares to any of the
                aforementioned, the person or entity become partial owner of the
                business.
              </Tooltip>
            </div>
          </CardTitle>
        </Card>
        <Row>
          <Col xs="6">
            <Card className={myform.creatorIsDirector === true ? 'steps-detail-block secondStep active' : 'steps-detail-block secondStep'}
              onClick={(ev) => handleShareChange(ev, true, 'creatorIsDirector')}>
              <Image src={icon3} alt="" />
              <CardText>
                Yes, there are other
                <br />
                directors in the business.
              </CardText>
            </Card>
          </Col>
          <Col xs="6">
            <Card className={myform.creatorIsDirector === false ? 'steps-detail-block secondStep active' : 'steps-detail-block secondStep'}
              onClick={(ev) => handleShareChange(ev, false, 'creatorIsDirector')}>
              <Image src={icon4} alt="" />
              <CardText>
                No, I am the only
                <br />
                director in this business.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Card>
      <Card className="steps-form shareholder-form">
        {onlyDirector ?
          <Card className="section-title">
            <CardTitle tag="h2">
              <strong>Information about other director</strong>
            </CardTitle>
          </Card>
          : ''}
        <Forms
          setMyForm={setMyForm}
          myform={myform}
          backStep={backStep}
          nextStep={nextStep}
          shareholders='directors'
          onlyDirector={onlyDirector}
          abFormValue={abFormValue}
          aboutError={aboutError}
          setAboutError={setAboutError}
          aboutYou='aboutYou'
        />
      </Card>
    </Card>
  );
}
