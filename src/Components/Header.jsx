import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {" "}
      <Navbar
        className="p-2"
        style={{ backgroundColor: "#327dd7" }}
      >
        <Container fluid style={{ flexWrap: "wrap" }}>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "black", fontSize: "35px" }}
          >
            <i className="fa-solid fa-user-graduate me-2"></i>
            Education
          </Link>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
            }}
          >
            <p style={{ marginBottom: "0", marginRight: "10px" }}>Home</p>
            <p style={{ marginBottom: "0", marginRight: "10px" }}>Services</p>
            <p style={{ marginBottom: "0", marginRight: "10px" }}>About Us</p>
            <p style={{ marginBottom: "0" }}>Login</p>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
