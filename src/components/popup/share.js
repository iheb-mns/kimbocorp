import { useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Tooltip,
} from "reactstrap";

export default function Share({ show7, setShow7 }) {
  const [usd, setUsd] = useState("");
  const [numberShare, setNumberShare] = useState("");
  const [usdError, setUsdError] = useState(false);
  const [numbrError, setNumbrError] = useState(false);
  const closeHandle = () => {
    setShow7(false);
  };
  const [open, setOpen] = useState(false);
  const showTooltip = () => {
    setOpen(!open);
  };
  const savedata = () =>{
    setUsdError(false);
    setNumbrError(false)
    var error = false;
    if(usd === ''){
      error = true;
      setUsdError(true);
    }
    if(numberShare === ''){
      error = true;
      setNumbrError(true)
    }
    if(error === false){
      setShow7(false);
    }
  }
  return (
    <Modal isOpen={show7}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Amend share capital</strong>
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
            className="tooltip-width"
          >
            Share capital refers to the amount of money that shareholders have
            committed to the company. Share capital can be issued with or
            without full payment from shareholders. The minimum issued share
            capital is $1 when you incorporate a company. “Paid up capital”
            refers to the amount shareholders have paid to the company for their
            shares.
            <br />
            For example, Company X issues 100,000 shares at $1 each to its
            shareholders. This brings the issued share capital to $100,000.
            However, the shareholders have only paid up 50% of their
            shareholding, which means that the paid up capital is $50,000 and
            the unpaid share capital is $50,000. If the shareholders pay the
            remainder 50% of their shareholding, then the company’s paid up
            capital will become $100,000 and the unpaid share capital will be
            $0. If Company X issues new shares in future, the amount of issued
            and paid up capital will increase accordingly.
            <br />
            Note: Companies with paid-up share capital of $500,000 and above
            will automatically become members of the Singapore Business
            Federation (SBF). Find out more about SBF membership.
          </Tooltip>
        </div>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <Label>Current share capital (ordinary)</Label>
          <FormGroup>
            <Input
              name="USD" 
              placeholder="USD" 
              type="text"
              value="100,00"
            />
            <Input
              name="Number of shares"
              placeholder="Number of shares"
              type="text"
              value="100,000"
            />
          </FormGroup>

          <Label>New share capital (ordinary)</Label>
          <FormGroup>
            <Input 
              name="USD" 
              placeholder="USD" 
              type="text" 
              onChange={(ev) => setUsd(ev.target.value)}
              value={usd}
              invalid={usdError}
            />
            <Input
              name="Number of shares"
              placeholder="Number of shares"
              type="text"
              onChange={(ev) => setNumberShare(ev.target.value)}
              value={numberShare}
              invalid={numbrError}
            />
          </FormGroup>

          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the amendment
            </CardText>
          </Card>
          <Card className="popup-btn">
            <Button className="contact-link">Contact us</Button>
            <Button onClick={savedata}>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
