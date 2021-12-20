import React from 'react';
import { Button } from 'react-bootstrap';
import ProductCart from './ProductCart';


export default function Cart({ carrito, setCarrito }) {
    const changeCantidad = (id, cantidad) => {
        const updateCart = carrito.map((cartItem) => {
            if (cartItem.product._id === id) {
                return { ...cartItem, cantidad };
            }
            return cartItem
        });

        setCarrito(updateCart);
    };

    let total = carrito.reduce((total, { product, cantidad }) => total + product.precio * cantidad, 0);
console.log(carrito)
    return (
        <div className="container-fluid">
            <h2 className="text-center my-5">Tu carrito</h2>
            <div className="row">
                <div className="products-cards col-12 col-md-8">
                    {carrito.map((cartItem) => (
                        <ProductCart
                            key={cartItem.product._id}
                            cartItem={cartItem}
                            changeCantidad={changeCantidad}
                        />
                    ))}
                </div>
                <div className="col-12 col-md-4">
                    <div className="bg-light p-2 my-3">
                        <h6>Total: {total.toFixed(2)}</h6>
                        <a  href="https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=&gclid=Cj0KCQiA-K2MBhC-ARIsAMtLKRuEgHM6NOBUeUJX-J_-OUQ14XMk75ifkwBsDcXvSO_gWq-X_ur2IMMaAmbgEALw_wcB" target="_blank"><Button>Pagar!</Button></a>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
