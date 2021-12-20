import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';


export default function Bebida({ product, carrito, setCarrito }) {
    const [isInCart, setIsInCart] = useState(false);

    const addToCart = () => {
        setCarrito((cart) => cart.concat({ product, cantidad: 1 }));
    };

    useEffect(() => {
        const inCart = carrito.find((productCart) => productCart.product._id === product._id);
        if (inCart) {
            setIsInCart(true);
        }
    }, [carrito, product._id]);

    return (
        <Card className="card-bebida">
            <Card.Img variant="top" src={product.imagen} />
            <Card.Body>
                <Card.Title>{product.titulo}</Card.Title>
                
                <p>{product.precio}</p>
               
            </Card.Body>

            <Button as={Link} to={`/producto/${product._id}`}>
                detalle
            </Button>
            <button
                    disabled={isInCart}
                    className={
                        isInCart ? 'btn btn-secondary' : 'btn border-success btn-cart pulsating-circle'
                    }
                    onClick={addToCart}
                >
                    {isInCart ? (
                        'Esta en el carrito'
                    ) : (
                        <img src="https://icongr.am/material/cart.svg?size=30&color=2ca049" alt="" />
                    )}
                </button>
        </Card>
    );
}
