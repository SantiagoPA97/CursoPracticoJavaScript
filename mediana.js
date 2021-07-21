const lista1 = [
    4000,
    1000,
    2,
    1,
    5,
    50,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 == 0) {
       return true; 
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio;
} else {
    mediana = lista1[mitadLista1];
}

function ordenarLista() {
    lista1.sort((a, b) => a - b);
}

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce((num1, num2) => num1 + num2);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}