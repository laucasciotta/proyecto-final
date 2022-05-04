import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useHistory, useParams } from 'react-router-dom';
import BebidaFullScreen from '../components/ProductoFullScreen';

export default function DetalleProducto() {
    const { productoId } = useParams();
    const [producto, setProducto] = useState ({});
    const history = useHistory();
 
    useEffect(() => {
      
        const getBebida = async () => {
            
           
                const response = await axios.get(`http://localhost:4000/api/bebidas/${productoId}`);
               
                setProducto(response.data);
            
        };
        getBebida();
    }, []);
   
   

     return <BebidaFullScreen producto={producto} />;
 }
