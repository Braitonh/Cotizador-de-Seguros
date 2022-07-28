import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

`;

const TexToHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`;

export const Header = ({titulo}) => {
  return (
    <ContenedorHeader>
        <TexToHeader>{titulo}</TexToHeader>
    </ContenedorHeader>
  )
}
