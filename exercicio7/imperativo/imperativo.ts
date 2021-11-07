class Numbers {
    private initialArray: Array<any>;
    private arraySize: number;

    constructor(array: Array<any>) {
        this.initialArray = array;
        // converte todos os elementos para number
        for (let index = 0; index < this.initialArray.length; index++) {
            this.initialArray[index] = Number(this.initialArray[index]);
        }

        // ordena o array
        for (let outerLoop = 0; outerLoop < this.initialArray.length; outerLoop++) {
            for (let innerLoop = outerLoop + 1; innerLoop < this.initialArray.length; innerLoop++) {
                if(this.initialArray[outerLoop] > this.initialArray[innerLoop]) {
                    let previousValue: number = this.initialArray[innerLoop];
                    this.initialArray[innerLoop] = this.initialArray[outerLoop];
                    this.initialArray[outerLoop] = previousValue;
                }
            }
        }

        this.arraySize = array.length;
    }

    public largerNumber(): number {
        return this.initialArray[this.arraySize -1 ];
    }

    public smallerNumber(): number {  
        return this.initialArray[0];
    }

    public average(): number {
        let sum: number = this.initialArray.reduce((valorAnterior: number, valorAtual: number) =>  valorAnterior + valorAtual);
        let numberAverage: string = (sum/this.arraySize).toFixed(2);

        return Number(numberAverage);
    }
}

const statistic = new Numbers([3, 4, "5"]);

console.log(`
    Maior número: ${statistic.largerNumber()}, Menor número: ${statistic.smallerNumber()}, Média dos números: ${statistic.average()}
`);



