var Numeros = /** @class */ (function () {
    function Numeros(lista) {
        this.lista = Array.from(lista, function (elementoDoArray) { return Number(elementoDoArray); });
        this.listaOrdenada = lista.sort();
        this.tamanhoDaLista = lista.length;
    }
    Numeros.prototype.maiorValor = function () {
        return this.listaOrdenada[this.tamanhoDaLista - 1];
    };
    Numeros.prototype.menorValor = function () {
        return this.listaOrdenada[0];
    };
    Numeros.prototype.mediaDosValores = function () {
        var somaDosNumeros = this.lista.reduce(function (valorAnterior, valorAtual) { return valorAnterior + valorAtual; });
        var mediaDosNumeros = (somaDosNumeros / this.tamanhoDaLista).toFixed(2);
        return Number(mediaDosNumeros);
    };
    return Numeros;
}());
var estatistica = new Numeros([3, 3, 5]);
console.log("\n    Maior n\u00FAmero: " + estatistica.maiorValor() + ", Menor n\u00FAmero: " + estatistica.menorValor() + ", M\u00E9dia dos n\u00FAmeros: " + estatistica.mediaDosValores() + "\n");
