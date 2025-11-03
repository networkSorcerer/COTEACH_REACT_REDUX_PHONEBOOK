import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./component/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./component/ContactList";

function App() {
  return (
    <Container style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div className="App">
        <h1 className="title mb-4">📇 연락처 관리</h1>
        <Container className="justify-content-center">
          <Row className="g-4 justify-content-center">
            <Col md={5}>
              <div className="card-section shadow-sm p-4 rounded">
                <ContactForm />
              </div>
            </Col>
            <Col md={7}>
              <div className="card-section shadow-sm p-4 rounded">
                <ContactList />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default App;
