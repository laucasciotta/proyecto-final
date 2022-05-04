import { useState } from "react";
import { Container } from "react-bootstrap";
import { AdminBebidas } from "./AdminBebidas";




export default function Admin({getBebidas,bebidas}) {
const [seccion, setSeccion] = useState('bebidas');
    return (
        <div>
          <Container>
          {seccion === 'bebidas' &&  <AdminBebidas bebidas={bebidas} getBebidas={getBebidas}  /> }
        
          </Container>
        </div>
    
    )
}
