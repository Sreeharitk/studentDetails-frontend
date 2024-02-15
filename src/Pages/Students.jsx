import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getStudentDetailsAPI } from "../../API/allAPI";

function Students() {
  const [studentDetails, setStudentDetails] = useState([]);

  const getStudentDetails = async () => {
    try {
      const result = await getStudentDetailsAPI();
      if (result.status === 200) {
        setStudentDetails(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "skyblue",
          height: "91vh",
          minHeight: "fit-content",
        }}
      >
        <h1 className="text-center pt-4">Student Details</h1>
        <Container>
          <Table responsive striped bordered style={{ borderColor: "black" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#327dd7" }}>First Name</th>
                <th style={{ backgroundColor: "#327dd7" }}>Last Name</th>
                <th style={{ backgroundColor: "#327dd7" }}>Adress</th>
                <th style={{ backgroundColor: "#327dd7" }}>E mail</th>
                <th style={{ backgroundColor: "#327dd7" }}>Mobile</th>
                <th style={{ backgroundColor: "#327dd7" }}>DOB</th>
                <th style={{ backgroundColor: "#327dd7" }}>Gender</th>
                <th style={{ backgroundColor: "#327dd7" }}>Course</th>
              </tr>
            </thead>
            <tbody>
              {studentDetails?.length > 0 ? (
                studentDetails.map((students, index) => (
                  <tr key={index}>
                    <td>{students.firstname}</td>
                    <td>{students.lastname}</td>
                    <td>{students.adress}</td>
                    <td>{students.email}</td>
                    <td>{students.mobile}</td>
                    <td>{students.dob}</td>
                    <td>{students.gender}</td>
                    <td>{students.course}</td>
                  </tr>
                ))
              ) : (
                <h1>Nothing to display...</h1>
              )}
            </tbody>
          </Table>
          <Link to={"/"} className="btn btn-primary">
            Back
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Students;
