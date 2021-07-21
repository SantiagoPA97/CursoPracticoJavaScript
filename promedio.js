const lista1 = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce((num1, num2) => num1 + num2);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}