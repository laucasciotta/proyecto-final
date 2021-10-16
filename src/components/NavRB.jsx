import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavRB({ user }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rolling Beer </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="text-white">
         Bebidas 
            </Nav.Link>

            {/* {!tokenLocal.token && ( */}
              <Nav.Link
                as={NavLink}
                to="/login"
                exact
                activeClassName="text-white"
              >
                Login
              </Nav.Link>
                 {/* )} */}

            <Nav.Link
              as={NavLink}
              to="/perfil"
              exact
              activeClassName="text-white"
            >
              {" "}
              Perfil
            </Nav.Link>

            {/* {user.role === "admin" && ( */}
              <Nav.Link
                as={NavLink}
                to="/admin"
                exact
                activeClassName="text-white"
              >
               subir bebida
              </Nav.Link>
            {/* )} */}

      

         <Button >Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
