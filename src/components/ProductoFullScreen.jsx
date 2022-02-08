import Card from 'react-bootstrap/Card';


export default function ProductoFullScreen(props) 
{ 
    return (
        <Card className="card-bebida mx-auto" style={{width: '30rem' }}>
            <Card.Img variant="top" src={props.producto.imagen} />
            <Card.Body>
                <Card.Title>{props.producto.nombre}</Card.Title>
                <Card.Title>{props.producto.precio}</Card.Title>
            </Card.Body>
        </Card>
    );
}
