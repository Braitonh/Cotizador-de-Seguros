import React, { Fragment, useState } from 'react'
import { Header } from './components/Header'
import styled from '@emotion/styled'
import { Formulario } from './components/Formulario';
import { Resumen } from './components/Resumen';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 30px auto;
    border-radius: 20px;
`;

const ContenedorFormulario = styled.div`
    background-color: #FFFFFF;
    padding: 3rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

`;

export const CotizadorApp = () => {

    const [cargando, setCargando] = useState(false);


    const [resumen, setResumen] = useState({
        cotizacion:0,
        datos:{
            marca:'',
            year:'',
            plan:''
        }
    });

    //Extraer datos
    const {datos, cotizacion} = resumen;

    let componente;
    if( cargando ){
        componente = <Spinner/>
    }else{
        componente = <Resumen 
            datos = {datos}
            cotizacion = {cotizacion}
        />
    }


  return (
    <Contenedor>
        <Header
            titulo='Cotizador de Seguros'
        />

        <ContenedorFormulario>
            <Formulario 
                setResumen = {setResumen}
                setCargando = {setCargando}
            />
            
            <div>
                {componente}
            </div>

            <Resultado
                cotizacion = {cotizacion}
            />
        </ContenedorFormulario>



    </Contenedor>
  )
}
