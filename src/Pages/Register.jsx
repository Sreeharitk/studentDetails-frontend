import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import students2 from "../assets/students2.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerAPI } from "../../API/allAPI";

function Register() {
  const [studentInputs, setStudentInputs] = useState({
    firstname: "",
    lastname: "",
    adress: "",
    email: "",
    gender: "",
    mobile: "",
    password: "",
    dob: "",
    course: "",
  });

  const [registerStatus, setRegisterStatus] = useState(false);

  // console.log(studentInputs);
  const [validFirstName, setvalidFirstName] = useState(false);
  const [validLastName, setvalidLastName] = useState(false);
  // const [validAdress, setvalidAdress] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);
  // const [validGender, setvalidGender] = useState(false);
  const [validMobile, setvalidMobile] = useState(false);
  const [validPassword, setvalidPassword] = useState(false);
  // const [validDOB, setvalidDOB] = useState(false);
  // const [validCourse, setvalidCourse] = useState(false);

  const navigate = useNavigate();

  const setData = (e) => {
    const { name, value } = e.target;
    if (name === "firstname") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setvalidFirstName(false);
      } else {
        setvalidFirstName(true);
      }
    }
    if (name === "lastname") {
      if (value.match(/^[a-zA-Z ]+$/)) {
        setvalidLastName(false);
      } else {
        setvalidLastName(true);
      }
    }
    if (name === "email") {
      if (value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        setvalidEmail(false);
      } else {
        setvalidEmail(true);
      }
    }
    if (name === "mobile") {
      if (value.match(/^[6-9]\d{9}$/)) {
        setvalidMobile(false);
      } else {
        setvalidMobile(true);
      }
    }
    if (name === "password") {
      if (
        value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
        )
      ) {
        setvalidPassword(false);
      } else {
        setvalidPassword(true);
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      adress,
      email,
      gender,
      mobile,
      password,
      dob,
      course,
    } = studentInputs;
    if (
      !firstname ||
      !lastname ||
      !adress ||
      !email ||
      gender == "Select Gender" ||
      !mobile ||
      !password ||
      !dob ||
      !course
    ) {
      alert("Please fill out every details!");
    } else {
      try {
        const result = await registerAPI(studentInputs);
        // console.log(result);
        if (result.status === 200) {
          setStudentInputs({
            firstname: "",
            lastname: "",
            adress: "",
            email: "",
            gender: "",
            mobile: "",
            password: "",
            dob: "",
            course: "",
          });
          setRegisterStatus(true);
          setTimeout(() => {
            navigate("/students");
          }, 2500);
        } else {
          alert(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClear = () => {
    setStudentInputs({
      firstname: "",
      lastname: "",
      adress: "",
      email: "",
      gender: "",
      mobile: "",
      password: "",
      dob: "",
      course: "",
    });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "skyblue",
          // height: "91vh",
          display: "grid",
          placeItems: "center",
          paddingTop: "50px",
          paddingBottom: "96px",
        }}
      >
        <div
          style={{ backgroundColor: "#327dd7", padding: "30px" }}
          className="rounded"
        >
          <Container>
            <Row>
              <Col
                lg={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={students2}
                    alt=""
                    height={"150px"}
                    width={"100px"}
                    className="animate__animated animate__bounce animate__infinite animate__slow"
                  />
                  <h2 className="mt-4">Welcome</h2>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis mollitia dolore totam tempore repellat nulla,
                    similique.
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none" }}
                    className="btn btn-light w-50 mb-3"
                  >
                    Back
                  </Link>
                </div>
              </Col>
              <Col lg={8}>
                <div
                  style={{
                    color: "grey",
                    backgroundColor: "snow",
                    borderRadius: "20px",
                    padding: "20px",
                  }}
                >
                  <h2 className="text-center">Apply as a Student</h2>
                  <Row>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="first-name">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            required
                            name="firstname"
                            type="text"
                            placeholder="Enter your first name"
                            value={studentInputs.firstname}
                            onChange={(e) => {
                              setStudentInputs({
                                ...studentInputs,
                                firstname: e.target.value,
                              });
                              setData(e);
                            }}
                          />
                        </Form.Group>
                        {validFirstName && (
                          <div>
                            <p className="text-danger">
                              Invalid first name!!Must not contain numbers or
                              special characters
                            </p>
                          </div>
                        )}
                        <Form.Group className="mb-3" controlId="last-name">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            required
                            name="lastname"
                            type="text"
                            placeholder="Enter your last name"
                            value={studentInputs.lastname}
                            onChange={(e) => {
                              setStudentInputs({
                                ...studentInputs,
                                lastname: e.target.value,
                              });
                              setData(e);
                            }}
                          />
                        </Form.Group>
                        {validLastName && (
                          <div>
                            <p className="text-danger">
                              Invalid last name!!Must not contain numbers or
                              special characters
                            </p>
                          </div>
                        )}
                        <Form.Group className="mb-3" controlId="address">
                          <Form.Label>Adress</Form.Label>
                          <Form.Control
                            required
                            name="adress"
                            as="textarea"
                            rows={3}
                            value={studentInputs.adress}
                            onChange={(e) =>
                              setStudentInputs({
                                ...studentInputs,
                                adress: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            required
                            name="email"
                            type="email"
                            placeholder="Enter your email id"
                            value={studentInputs.email}
                            onChange={(e) => {
                              setStudentInputs({
                                ...studentInputs,
                                email: e.target.value,
                              });
                              setData(e);
                            }}
                          />
                        </Form.Group>
                        {validEmail && (
                          <div>
                            <p className="text-danger">
                              Invalid email adress!!
                            </p>
                          </div>
                        )}
                        <Form.Select
                          required
                          name="gender"
                          aria-label="select gender"
                          value={studentInputs.gender}
                          onChange={(e) => {
                            setStudentInputs({
                              ...studentInputs,
                              gender: e.target.value,
                            });
                          }}
                        >
                          <option value="Select Gender">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Form.Select>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="mobile-number">
                          <Form.Label>Mobile</Form.Label>
                          <Form.Control
                            required
                            name="mobile"
                            maxLength="10"
                            type="tel"
                            placeholder="Enter your mobile number"
                            value={studentInputs.mobile}
                            onChange={(e) => {
                              setStudentInputs({
                                ...studentInputs,
                                mobile: e.target.value,
                              }),
                                setData(e);
                            }}
                          />
                        </Form.Group>
                        {validMobile && (
                          <div>
                            <p className="text-danger">Invalid mobile number</p>
                          </div>
                        )}
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            required
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={studentInputs.password}
                            onChange={(e) => {
                              setStudentInputs({
                                ...studentInputs,
                                password: e.target.value,
                              });
                              setData(e);
                            }}
                          />
                        </Form.Group>
                        {validPassword && (
                          <div>
                            <ul style={{ color: "red" }}>
                              <li>
                                Must contain minimum 8 and max 15 characters{" "}
                              </li>
                              <li>
                                Atleast one Capital letter and small letter
                              </li>
                              <li>Alteast one number</li>
                              <li>Alteast one special character</li>
                            </ul>
                          </div>
                        )}
                        <Form.Group className="mb-3" controlId="dob">
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control
                            required
                            name="date"
                            type="date"
                            placeholder="Enter your dob"
                            value={studentInputs.dob}
                            onChange={(e) =>
                              setStudentInputs({
                                ...studentInputs,
                                dob: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Form.Select
                          required
                          name="course"
                          aria-label="select course"
                          value={studentInputs.course}
                          onChange={(e) =>
                            setStudentInputs({
                              ...studentInputs,
                              course: e.target.value,
                            })
                          }
                        >
                          <option>Select Course</option>
                          <option value="Biology">Biology</option>
                          <option value="Computer">Computer</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Humanities">Humanities</option>
                        </Form.Select>
                        <div className="mt-4">
                          {registerStatus ? (
                            <Spinner
                              animation="border"
                              variant="danger"
                              className="me-3"
                            />
                          ) : (
                            <Link
                              className="btn btn-primary me-3"
                              onClick={handleRegister}
                            >
                              Resgister
                            </Link>
                          )}
                          <button
                            className="btn btn-danger"
                            onClick={handleClear}
                          >
                            Clear
                          </button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Register;
