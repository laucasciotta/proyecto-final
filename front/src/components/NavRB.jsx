import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { leerDeLocalStorage } from "../utils/localStorage";
import { Link } from 'react-router-dom';
import { FaBeer  } from 'react-icons/fa';
import { BsHouse } from "react-icons/bs";


export default function NavRB({ user,carrito }) {
  const tokenLocal = leerDeLocalStorage('token') || {};
  const logout = () =>{
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" > Rolling Beer <FaBeer /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home">
                <BsHouse/>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" exact activeClassName="text-white">
         Bebidas 
            </Nav.Link>

          {!tokenLocal.token && ( 
              <Nav.Link
                as={NavLink}
                to="/login"
                exact
                activeClassName="text-white"
              >
                Login
              </Nav.Link>
                 )} 

            <Nav.Link
              as={NavLink}
              to="/Register"
              exact
              activeClassName="text-white"
            >
              {" "}
              registro
            </Nav.Link>
            <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                cart <span className="badge bg-warning">{carrito.length}</span>
                            </Link>
                        </li>
            {user.role === "admin" && ( 
              <Nav.Link
                as={NavLink}
                to="/admin"
                exact
                activeClassName="text-white"
              >
               subir bebida
              </Nav.Link>
              
            )} 

      

            {tokenLocal.token && <Button onClick={logout} >Logout</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
