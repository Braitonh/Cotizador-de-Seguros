import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers/helpers';



//Estilos
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    border-radius: 10px;
`;

export const Resumen = ({datos, cotizacion}) => {

    const {marca , year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

  return (

    <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca: {primerMayuscula(marca)}</li>
            <li>Plan: {primerMayuscula(plan)}</li>
            <li>Año del auto: {primerMayuscula(year)}</li>
        </ul>
        <p>EL TOTAL ES: $ {cotizacion}</p>
    </ContenedorResumen>
    
    
  )
}
