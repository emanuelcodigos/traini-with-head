export const ordenarArreglo = (arreglo) => {

    arreglo.sort(function (a, b) {
        if (a.nro > b.nro) {
          return 1;
        }
        if (a.nro < b.nro) {
          return -1;
        }
        return 0;
    });

    return arreglo;
}