import axios from 'axios';
import { useState } from 'react';
import { Button, Form, Image, InputGroup, Modal, Row, Spinner, Table } from 'react-bootstrap';
import { leerDeLocalStorage } from '../utils/localStorage';
import Bebida from './Bebida';
import ModalEditBebida from './ModalEditBebidas';


export default function TableBebidas(props) {
    const [isLoading, setIsLoading] = useState(false);
     const [isModal, setIsModal] = useState(false);
     const [currentBebida, setCurrentBebida] = useState({});

     const handleClose = () => setIsModal(false);

    const deleteBebida = async (id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/bebidas/${id}`, { headers });
       await props.actualizarBebida();
        setIsLoading(false);
    };

   
     const handleSubmitEdit = async (e) => {
         setIsLoading(true);
         e.preventDefault();
         const tokenLocal = leerDeLocalStorage('token') || {};
         const headers = { 'x-auth-token': tokenLocal.token };
         await axios.put(`http://localhost:4000/api/bebidas/${currentBebida._id}`, currentBebida, { headers });
         await props.actualizarBebida(); 
         setIsLoading(false);
         handleClose();
     };
         const handleChange = (event) => {
         const { value, name } = event.target;
         const updatedBebida = { ...currentBebida, [name]: value };
        setCurrentBebida(updatedBebida);
     };
     const editBebida = (bebida) => {
        setIsModal(true);
        setCurrentBebida(bebida);
    };

    return (
        <div className="position-relative">
        <Table className="mt-5 mx-auto" style={{ width: '600px' }} striped bordered hover size="sm">
        <tbody>
        {props.bebidas.map((bebida, i) => {
                'No hay bebidas guardadas'
               
                      return (
                          <tr key={i}>
                              <td>
                                  <img src={bebida.imagen} alt="" style={{ width: '5rem' }} />
                              </td>
                              <td>{bebida.titulo}</td>
                              <td><button onClick={() => deleteBebida(bebida._id)} variant="none" ><img src="https://icongr.am/feather/trash.svg?size=50&color=8a0000" /> </button>
                              <button onClick={() => editBebida(bebida)} variant="none"><img src="https://icongr.am/clarity/edit.svg?size=50&color=34a300"/></button>
                              </td>
                          </tr>
                      );
                  })}
        </tbody>
    </Table>
    {props.bebidas.length === 0 && 'No hay birritas bro'}

{isLoading && (
    <div
        style={{ zIndex: 2, backgroundColor: '#00000017' }}
        className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center"
    >
        <Spinner animation="border" role="status" />
    </div>
)}
<ModalEditBebida
                isModal={isModal}
                onClose={handleClose}
                onSubmit={handleSubmitEdit}
                titulo={currentBebida.titulo}
                imagen={currentBebida.imagen}
                onChange={handleChange}
                isLoading={isLoading}
            />

    </div>
);
                }