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

export default function PaidUp({ show6, setShow6 }) {
  const [usd, setUsd] = useState('')
  const [usdError, setUsdError] = useState('')
  const closeHandle = () => {
    setShow6(false);
  };
  const [open, setOpen] = useState(false);
  const showTooltip = () => {
    setOpen(!open);
  };
  const savedata = () => {
    setUsdError(false);
    if(usd === ""){
      setUsdError(true);
    }else{
      setShow6(false);
    }
  }
  return (
    <Modal isOpen={show6}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Amend paid-up capital</strong>
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
            Paid-up capital is the sum total of investment capital received by
            any company from its shareholders in exchange for shares. In other
            words, it refers to the amount of money a company has received from
            shareholders who have fully paid for their purchased shares.
            <br />A company that sells its shares in the primary market directly
            to investors will increase its paid-up capital, usually through an
            IPO or sold between investors in the secondary market. An additional
            pay-out is only made if the proceeds from these transactions go to
            the selling shareholders and not flowing to the issuing company.
          </Tooltip>
        </div>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <Label>Current paid-up capital</Label>
          <FormGroup>
            <Input name="USD" placeholder="USD" type="text" />
          </FormGroup>

          <Label>New paid-up capital</Label>
          <FormGroup>
            <Input name="USD"
              placeholder="USD"
              type="text" 
              onChange={(ev) => setUsd(ev.target.value)}
              value={usd}
              invalid={usdError}
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
