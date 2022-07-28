//Calcula la diferencia de años
export const obtenerDiferenciaYear = (year) =>{
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marca
export const calcularMarca = (marca) =>{
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.3;
            break;
         
        case 'americano':
            incremento = 1.5;
            break;    
    
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//Calcula el tipo de seguro
export const obtenerPlan = (plan) =>{
    return (plan === 'basico') ? 1.20 : 1.5;
}

//Pone en mayuscula la primera letra

export const primerMayuscula = ( texto ) =>{
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}