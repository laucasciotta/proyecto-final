import { Container, Spinner } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import  NavRB  from './components/NavRB';
import Bebidas from './pages/Bebidas';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { useEffect, useState } from 'react';
import { leerDeLocalStorage } from './utils/localStorage';
import DetalleProducto from './pages/DetalleProducto';
import Register from './pages/Register';
import axios from 'axios';
import Cart from './components/Cart';
import Home from './pages/Home';

function App() {
  const [bebidas, setBebidas] = useState([{nombre:'',precio:'',imagen:'',}])
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [carrito, setCarrito] = useState([]);
  const requestUserData = async () => {
    setIsLoading(true);
    const tokenLocal = leerDeLocalStorage('token') || {};

    if (tokenLocal.token) {
        const headers = { 'x-auth-token': tokenLocal.token };
        const response = await axios.get('http://localhost:4000/api/auth', { headers });
        setUser(response.data);
    }
    setIsLoading(false);
};

useEffect(() => {
    requestUserData();
}, []);

const getBebidas = async () => {
    const response = await axios.get('http://localhost:4000/api/bebidas');
    setBebidas(response.data);
};

useEffect(() => {
    getBebidas();
}, []);

const isAdmin = user.role === 'admin';

if (isLoading) {
    return (
        <>
            Cargando...
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    );
}

    return (
        <div className="footer-fix">
            <NavRB user={user} 
                  carrito={carrito}
                  />

            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Bebidas bebidas={bebidas} carrito={carrito} setCarrito={setCarrito}  />
              
                    </Route>

                    <Route path="/login">
                        <Login requestUserData={requestUserData} />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    {isAdmin && (
                        <Route path="/admin">
                            <Admin actualizarBebidas={getBebidas} bebidas={bebidas} getBebidas={getBebidas} user={user}/>
                        </Route>
                    )}
                    <Route path="/producto/:productoId">
                        <DetalleProducto />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>


                    <Route path="/Home">
                        <Home />
                    </Route>

                    <Route path="/404">404</Route>
                    
                    <Route path="/cart">
                    <Cart carrito={carrito} setCarrito={setCarrito} />
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
