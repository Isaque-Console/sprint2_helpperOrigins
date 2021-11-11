/**
 * Representa uma lista numerica
 * @public
 */
var Numeros = /** @class */ (function () {
    function Numeros(lista) {
        this.lista = Array.from(lista, function (elementoDoArray) { return Number(elementoDoArray); });
        this.listaOrdenada = lista.sort();
        this.tamanhoDaLista = lista.length;
    }
    /**
     *
     * @returns valor do maior numero da lista
     */
    Numeros.prototype.maiorValor = function () {
        return this.listaOrdenada[this.tamanhoDaLista - 1];
    };
    /**
     *
     * @returns valor do menor numero da lista
     */
    Numeros.prototype.menorValor = function () {
        return this.listaOrdenada[0];
    };
    /**
     *
     * @returns a media dos valores da lista
     */
    Numeros.prototype.mediaDosValores = function () {
        var somaDosNumeros = this.lista.reduce(function (valorAnterior, valorAtual) { return valorAnterior + valorAtual; });
        var mediaDosNumeros = (somaDosNumeros / this.tamanhoDaLista).toFixed(2);
        return Number(mediaDosNumeros);
    };
    /**
     *
     * @returns mensagem com o maior numero da lista, o menor numero da lista e a media dos numeros da lista
     */
    Numeros.prototype.estatistica = function () {
        var maiorNumero = this.maiorValor();
        var menorNumero = this.menorValor();
        var mediaDosNumeros = this.mediaDosValores();
        return "Maior n\u00FAmero: " + maiorNumero + ", Menor n\u00FAmero: " + menorNumero + ", M\u00E9dia dos n\u00FAmeros: " + mediaDosNumeros;
    };
    return Numeros;
}());
var estatistica = new Numeros([3, 3, 5]);
console.log(estatistica.estatistica());
