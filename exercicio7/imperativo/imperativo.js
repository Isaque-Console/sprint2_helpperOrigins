/**
 * Numbers
 * Representa uma lista numerica
 */
var Numbers = /** @class */ (function () {
    function Numbers(array) {
        this.initialArray = array;
        this.convertToNumber();
        this.sortArray();
        this.arraySize = array.length;
    }
    /**
     * convertToNumber
     * converte todos os elementos do array inicial para number
     */
    Numbers.prototype.convertToNumber = function () {
        for (var index = 0; index < this.initialArray.length; index++) {
            this.initialArray[index] = Number(this.initialArray[index]);
        }
    };
    /**
     * sortArray
     * ordena o array inicial em ordem crescente
     */
    Numbers.prototype.sortArray = function () {
        for (var outerLoop = 0; outerLoop < this.initialArray.length; outerLoop++) {
            for (var innerLoop = outerLoop + 1; innerLoop < this.initialArray.length; innerLoop++) {
                if (this.initialArray[outerLoop] > this.initialArray[innerLoop]) {
                    var previousValue = this.initialArray[innerLoop];
                    this.initialArray[innerLoop] = this.initialArray[outerLoop];
                    this.initialArray[outerLoop] = previousValue;
                }
            }
        }
    };
    /**
     * largerNumber
     * funcao para descobrir o maior valor do array inicial
     *
     * @returns valor do maior numero do array inicial
     */
    Numbers.prototype.largerNumber = function () {
        return this.initialArray[this.arraySize - 1];
    };
    /**
     * smallerNumber
     * funcao para descobrir o menor valor do array inicial
     *
     * @returns valor do menor numero do array inicial
     */
    Numbers.prototype.smallerNumber = function () {
        return this.initialArray[0];
    };
    /**
     * average
     * funcao para descobrir o maior valor do array inicial
     *
     * @returns a media dos valores do array inicial
     */
    Numbers.prototype.average = function () {
        var sum = this.initialArray.reduce(function (valorAnterior, valorAtual) { return valorAnterior + valorAtual; });
        var numberAverage = (sum / this.arraySize).toFixed(2);
        return Number(numberAverage);
    };
    /**
     * statistic
     * funcao para descobrir os numeros maior, menor e media do array inicial
     *
     * @returns mensagem com o maior numero, o menor numero e a media dos numeros do array inicial
     */
    Numbers.prototype.statistic = function () {
        var largerNumber = this.largerNumber();
        var smallerNumber = this.smallerNumber();
        var numberAverage = this.average();
        return "Maior n\u00FAmero: " + largerNumber + ", Menor n\u00FAmero: " + smallerNumber + ", M\u00E9dia dos n\u00FAmeros: " + numberAverage;
    };
    return Numbers;
}());
var statistic = new Numbers([3, 4, "5"]);
console.log(statistic.statistic());
