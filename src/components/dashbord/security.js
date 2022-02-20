import React from "react";
import { Button, Card, CardText, CardTitle } from "reactstrap";

export default function Security() {
  return (
    <>
      <Card className="profile-detail profile-security">
        <CardTitle tag="h4">
          <strong>Security</strong>
        </CardTitle>
        <Card className="two-factor">
          <CardText>
            <strong>Two-Factor Authentication</strong>
          </CardText>
          <CardText>
            Your account does not have two-factor authentication turned on.
          </CardText>
          <CardText>
            Two-factor authenticated ensures that only devices you trust are
            able to access information in your kimbocorp.com account. Whenever a
            new device attempts to login to your account, you will be required
            to confirm the login by using a code sent to your email address or
            phone number.
          </CardText>
        </Card>
        <Card className="profile-security-btn">
          <Button className="learn-btn">Learn more</Button>
          <Button className="get-started-btn">
            Get started
          </Button>
        </Card>
      </Card>
      <Card className="profile-detail profile-login-device">
        <CardTitle tag="h4">
          <strong>Login Devices</strong>
        </CardTitle>
        <CardText>
          The following are the most recent devices that have logged into your
          account in the last30 days. See anything suspicious? Contact us at
          support@kimbocorp.com if there are.
        </CardText>
        <Card className="profile-login-device-bottom">
          <CardText>
            <strong>MacOSX (Chrome Generic) (Web)</strong>
          </CardText>
          <CardText>Singapore, Singapore</CardText>
          <CardText>
            Last Login at Month Day Year at Hours : Minutes PM/AM Timezone
          </CardText>
        </Card>
      </Card>
    </>
  );
}
