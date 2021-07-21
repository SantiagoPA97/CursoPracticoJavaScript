const listaNumeros = [
    1,
    5,
    34,
    55
];

const mediaArmonica = calcularMediaArmonica(listaNumeros);

function listaNumeroInverso(listaNumeros) {
    return listaNumeros.map((numero) => 1/numero);
}

function sumarFracciones(listaNumeros) {
    return listaNumeros.reduce((acumulador, valorActual) => acumulador + valorActual);
}

function calcularMediaArmonica(listaNumeros) {
    listaNumeros = listaNumeroInverso(listaNumeros);
    const resultadoSumaNumeros = sumarFracciones(listaNumeros);
    return listaNumeros.length / resultadoSumaNumeros;
}