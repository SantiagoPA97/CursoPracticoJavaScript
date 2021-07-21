const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    1
];

function calcularModa(lista) {
  const listaCount = {};
  lista.map(
    (elemento) => {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  );
  //Object.entries: Se le envía el objeto que se quiere convertir en un array.
  const listaArray = Object.entries(listaCount).sort((a, b) => b[1] - a[1]);
  const moda = listaArray[0][0];
}






