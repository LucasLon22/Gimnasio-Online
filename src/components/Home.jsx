import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


const Home = () => {
  return (
      <>
          <h1>Gimnasio Online</h1>
      <h2 className='mt-5'>Gestioná tus clientes de la manera más facil y ordenada, dale un click a la organización</h2>
      <Link to={'/listadeusuarios'} ><Button className='mt-4'>Ir a lista de usuarios</Button></Link>
      
      
      </>
  )
}

export default Home