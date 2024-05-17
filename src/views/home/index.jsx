import React from 'react'
import { Link } from 'react-router-dom';
import Titulo from '../../components/Titulo/Titulo';
import Cuerpo from '../../components/Cuerpo/Cuerpo';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <>
    
    <Titulo></Titulo>
    <Cuerpo></Cuerpo>
    <Button></Button>
    <Footer></Footer>
    
    </>
     
  )
}
 
export default Home;