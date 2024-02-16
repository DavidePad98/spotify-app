import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import logo from "../assets/logo.png";

const MyNav = () => {
  const buttonLabel = useSelector((state) => {
    return state.favorite.favorite.length;
  });

  return (
    // <Navbar
    //   bg="black"
    //   data-bs-theme="dark"
    //   // className="fixed-left d-flex flex-column justify-content-between pt-3"
    //   className="fixed-left d-flex flex-column position-absolute  justify-content-between pt-3"
    // >
    //   <Container className="d-flex flex-column h-100">
    //     <Navbar.Brand href="#home">
    //       <img src={logo} alt="Spotify Logo" width="131" height="40" />
    //     </Navbar.Brand>
    //     <Nav className="me-auto d-flex flex-column flex-grow-1 pt-3">
    //       <Nav.Link href="#home">
    //         <i className="pe-3 fs-2 bi bi-house-door-fill"></i>Home
    //       </Nav.Link>
    //       <Nav.Link href="#features">
    //         <i className="pe-3 fs-2 bi bi-book-fill"></i>Your Library
    //       </Nav.Link>
    //     </Nav>
    //     <Nav className="mc-auto d-flex flex-column ">
    //       <Nav.Link href="#home">
    //         <Button className="px-cb btn-light text-center border-1 border-black rounded-5">
    //           Sign Up
    //         </Button>
    //       </Nav.Link>
    //       <Nav.Link href="#home">
    //         <Button className="px-cb bg-black text-center border-1 border-white rounded-5">
    //           Login
    //         </Button>
    //       </Nav.Link>
    //       <Nav.Link href="#pricing" className="text-center">
    //         Cookie Policy | Privacy
    //       </Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>

    // -------------------------------------------
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fuild>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/"} className="px-3 text-white">
            Home
          </Link>
          <Link to={"/favorite"} className="px-3 text-white">
            Favorite {buttonLabel}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNav;
