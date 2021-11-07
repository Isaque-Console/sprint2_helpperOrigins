var Numbers = /** @class */ (function () {
    function Numbers(array) {
        this.initialArray = array;
        // converte todos os elementos para number
        for (var index = 0; index < this.initialArray.length; index++) {
            this.initialArray[index] = Number(this.initialArray[index]);
        }
        // ordena o array
        for (var outerLoop = 0; outerLoop < this.initialArray.length; outerLoop++) {
            for (var innerLoop = outerLoop + 1; innerLoop < this.initialArray.length; innerLoop++) {
                if (this.initialArray[outerLoop] > this.initialArray[innerLoop]) {
                    var previousValue = this.initialArray[innerLoop];
                    this.initialArray[innerLoop] = this.initialArray[outerLoop];
                    this.initialArray[outerLoop] = previousValue;
                }
            }
        }
        this.arraySize = array.length;
    }
    Numbers.prototype.largerNumber = function () {
        return this.initialArray[this.arraySize - 1];
    };
    Numbers.prototype.smallerNumber = function () {
        return this.initialArray[0];
    };
    Numbers.prototype.average = function () {
        var sum = this.initialArray.reduce(function (valorAnterior, valorAtual) { return valorAnterior + valorAtual; });
        var numberAverage = (sum / this.arraySize).toFixed(2);
        return Number(numberAverage);
    };
    return Numbers;
}());
var statistic = new Numbers([3, 4, "5"]);
console.log("\n    Maior n\u00FAmero: " + statistic.largerNumber() + ", Menor n\u00FAmero: " + statistic.smallerNumber() + ", M\u00E9dia dos n\u00FAmeros: " + statistic.average() + "\n");
