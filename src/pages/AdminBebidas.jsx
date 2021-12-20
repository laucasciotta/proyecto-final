import React from 'react'
import { useState } from 'react';
import { Button, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Bebidas from './Bebidas';
import TablaBebidas from '../components/TablaBebidas'
import { leerDeLocalStorage } from '../utils/localStorage';

export  function AdminBebidas(props) {
    const { bebidas, setBebidas } = props;
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({ nombre: '', imagen: '',precio:'' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
     
        const { value, name } = event.target;

    
        const newInput = { ...input, [name]: value };
    
        setInput(newInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
           
            setIsLoading(true);

            const tokenLocal = leerDeLocalStorage('token') || {};
            const headers = { 'x-auth-token': tokenLocal.token };
            await axios.post('http://localhost:4000/api/bebidas', input, { headers });

            await props.getBebidas();

            setIsLoading(false);
        }
    };

    return (
        <>
            <h2 className="mt-5">Subir birritas</h2>
            <Form
                onSubmit={handleSubmit}
                className="card mt-5 p-5 mx-auto"
                style={{ width: '500px' }}
            >
                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="nombre"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="Que cerveza es?"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        name="precio"
                        onChange={(e) => handleChange(e)}
                        required
                        type="number"
                        placeholder="$$$"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="imagen">
                    <Form.Label>Imagen</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="imagen"
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="imagen de la cerveza"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Imagen requerida!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button type="submit" className="mx-auto" disable={isLoading}>
                        Subir Cerveza!
                        {isLoading && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        )}
                    </Button>
                </Row>
            </Form>
            <TablaBebidas actualizarBebidas={props.actualizarBebidas} bebidas={bebidas} />

        </>

    );
}