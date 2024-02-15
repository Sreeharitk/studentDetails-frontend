import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import students from "../assets/students.png";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#327dd7",
          height: "91vh",
          display: "grid",
          placeItems: "center",
          marginBottom: "3px",
        }}
      >
        <Container>
          <Row>
            <Col lg={6}>
              <h1>Education</h1>
              <div className="fs-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit velit iusto accusamus doloremque ad eum, rem optio
                  aliquam, distinctio alias modi quae. Accusamus nam natus,
                  laudantium molestiae qui sint eos!
                </p>
                <p>
                  New Student? Click Here to{" "}
                  <Link to={"/register"} className="btn btn-warning">
                    Register
                  </Link>
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src={students}
                alt=""
                height={"400px"}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
