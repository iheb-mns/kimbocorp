import React from "react";
import { Card, Container, Label, List, CardTitle, Table } from "reactstrap";
import pdficon from "../images/pdf-icon.png";

export default function Transactions() {
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active">
              <span>Transactions</span>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main ">
          <Card className="detail-business-block shareholders-block">
            <Card className="detail-business-header">
              <CardTitle tag="h3">Transaction history</CardTitle>
              <Card className="currency-tab-block">
                <Label>Currency</Label>
                <span>USD</span>
              </Card>
            </Card>

            <Table responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transactions</th>
                  <th>Invoice</th>
                  <th>Amount</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2021-09-15</td>
                  <td>
                    Subscription plan monthly under plan name for business name
                    from first name last name
                  </td>
                  <td>
                    <img src={pdficon} alt=""/>
                  </td>
                  <td>129.00</td>
                  <td>1,536</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Card>
      </Container>
    </Card>
  );
}
