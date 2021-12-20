import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BsTypeH2 } from 'react-icons/bs';
import { GrFacebook, GrSnapchat } from "react-icons/gr";
import { SiTiktok } from "react-icons/si"; 


export default function Home() {
    return (
        <div>
 <Card className="bg-dark text-dark">
  <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8T3v97hASgqLvcQe9E9PlmneQHIgZLbjDv0qSbqpGY973xmBmIEcS3Go8YO174oFF5k&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Bienvenido a Rollig Beer!</Card.Title>
    <Card.Text>
     Somos la cervezeria que estabas buscando, rapida y practica.
      elegi tu birra y disfruta ! 
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<h2>
    Seguinos en nuestras redes sociales para enterarte de mas !
</h2>
<a  href="https://es-la.facebook.com/" target="_blank"><Button size="lg"><GrFacebook/></Button></a>
<a  href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome" target="_blank"><Button size="lg"><GrSnapchat/></Button></a>
<a href="https://www.tiktok.com/es/" target="_blank"><Button size="lg"><SiTiktok/></Button></a>
        </div>
    )
};