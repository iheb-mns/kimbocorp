import { Card, CardTitle, Form, Input, FormGroup, Table, Button } from "reactstrap";
import fileicon from "../../images/file-upload-icon.png";
import editicon from "../../images/edit-icon.png";
import downloadicon from "../../images/download-icon.png";

export default function File() {
  return (
    <>
      <Card className="file-upload-section">
        <CardTitle tag="h5">File Upload</CardTitle>
        <Card className="file-upload-block">
          <Form className="file-upload-type">
            <Input id="exampleFile" name="file" type="file" />
          </Form>
          <Card className="file-upload-detail">
            <img src={fileicon} alt="" />
            <span>
              <h5>
                <strong>Drop or Select file</strong>
              </h5>
              <p>
                Drop files here or click <u>browse</u> thorough your machine
              </p>
            </span>
          </Card>
        </Card>
      </Card>

      <Card className="file-filter-section shareholders-block">
        <Form>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Filter the files</option>
              <option>File 2</option>
              <option>File 3</option>
              <option>File 4</option>
              <option>File 5</option>
            </Input>
          </FormGroup>
        </Form>

        <Table responsive>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Size</th>
              <th>Posted at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>indrodue.pdf</td>
              <td>319kb</td>
              <td>9-12-2021</td>
              <td className="edit-download-icon">
                <Button>
                  <img src={editicon} alt="" />
                </Button>
                <Button>
                  <img src={downloadicon} alt="" />
                </Button>
              </td>
            </tr>
            <tr>
              <td>indrodue.pdf</td>
              <td>319kb</td>
              <td>9-12-2021</td>
              <td className="edit-download-icon">
                <Button>
                  <img src={editicon} alt="" />
                </Button>
                <Button>
                  <img src={downloadicon} alt="" />
                </Button>
              </td>
            </tr>
            <tr>
              <td>indrodue.pdf</td>
              <td>319kb</td>
              <td>9-12-2021</td>
              <td className="edit-download-icon">
                <Button>
                  <img src={editicon} alt="" />
                </Button>
                <Button>
                  <img src={downloadicon} alt="" />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
}
