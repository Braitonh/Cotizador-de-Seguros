import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
  
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
  
    color: #00838F;
    border-radius: 10px;
`;


export const Resultado = ({cotizacion}) => {

  return (
        (cotizacion === 0) ? <Mensaje>Seleccione una marca, un año y un tipo de seguro</Mensaje> : null
  )
}
