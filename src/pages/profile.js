import React from "react";
import { Card, Container, List } from "reactstrap";
import MyProfile from "../components/profile/myprofile";

export default function Profile() {
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active">
              <span>My profile</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>My portfolio</span>
            </li>
            <li>
              <span>My experience</span>
            </li>
            <li>
              <span>My education</span>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main ">
          <MyProfile></MyProfile>
        </Card>
      </Container>
    </Card>
  );
}
