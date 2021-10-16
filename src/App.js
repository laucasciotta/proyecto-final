import { Container, Spinner } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import  NavRB  from './components/NavRB';
import Bebidas from './pages/Bebidas';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Perfil from './pages/Perfil';
import { useEffect, useState } from 'react';
import DetalleProducto from './pages/DetalleProducto';
import Register from './pages/Register';
import Contacto from './pages/Contacto';

function App() {
  const [bebidas, setBebidas] = useState([{nombre:'',precio:'',imagen:'',}])
  const [user, setUser] = useState({})
    return (
        <div className="footer-fix">
            <NavRB user={user} />

            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Bebidas bebidas={bebidas} />
              
                    </Route>

                    <Route path="/login">
                        <Login  />
                    </Route>

                    {/* {isAdmin && ( */}
                        <Route path="/admin">
                            <Admin  />
                        </Route>
                    {/* )} */}

                   
                        <Route path="/perfil">
                            <Perfil />
                        </Route>
                 

                    <Route path="/producto/:productoId">
                        <DetalleProducto />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/404">404</Route>
                    <Route path="/contacto">
                        <Contacto />
                    </Route>

                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                    
                </Switch>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
