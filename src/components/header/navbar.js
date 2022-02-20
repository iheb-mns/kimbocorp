import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Form,
  Button,
  FormGroup,
  Input,
  Col,
  Row,
  Card,
  List,
} from "reactstrap";
import searchicon from "../../images/searchicon.png";
import chaticon from "../../images/chat-icon.png";
import bellicon from "../../images/bell-icon.png";

function Header() {
  const [open, setOpen] = useState(false);
  const showCollpse = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar color="light" expand="md" light container>
        <Row>
          <Col xs="5">
            <NavbarBrand href="/">kimbocorp</NavbarBrand>

            <Form className="header-search-form not-show">
              <Button>
                <img src={searchicon} alt=""/>
              </Button>

              <FormGroup>
                <Input
                  id="exampleSearch"
                  name="search"
                  placeholder="search placeholder"
                  type="search"
                />
              </FormGroup>
            </Form>
          </Col>

          <Col xs="7">
            <Card className="header-right">
              <Collapse navbar isOpen={open}>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="#">Company</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/create-new-businesses" className="create-new-business">
                      Create new business
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
              <Card className="hedaer-icon">
                <a href="/">
                  <img src={chaticon} alt=""/>
                </a>
                <a href="/">
                  <img src={bellicon} alt=""/>
                </a>
                <Card className="account-dropdown-main">
                  <a href="/" className="header-circle-btn"></a>
                  <Card className="account-dropdown">
                    <Card className="account-dropdown-inner">
                      <List>
                        <li>
                          <strong>Account</strong>
                        </li>
                        <li>
                          <a href="/profile">View profile</a>
                        </li>
                        <li>
                          <a href="/">Settings</a>
                        </li>
                      </List>
                      <List>
                        <li>
                          <strong>Finances</strong>
                        </li>
                        <li>
                          <a href="/transactions">Transaction history</a>
                        </li>
                      </List>
                      <List>
                        <li>
                          <a href="/">Support</a>
                        </li>
                        <li>
                          <a href="/create-new-businesses">Invite friends</a>
                        </li>
                        <li>
                          <a href="/">Logout</a>
                        </li>
                      </List>
                    </Card>
                  </Card>
                </Card>
              </Card>
              <NavbarToggler onClick={showCollpse} />
            </Card>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}
export default Header;
