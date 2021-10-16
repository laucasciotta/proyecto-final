import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Bebida from '../components/Bebida'


const Bebidas = ({ bebidas }) => {
    const mapBebidas = bebidas.map((bebida, i) => (<Bebida key={i} bebida={bebida} />));

    return (
        <>
            <h2>Bebidas</h2>
            <div className="d-flex flex-wrap justify-content-between">{mapBebidas}</div>
        </>
    );
};

export default Bebidas;
