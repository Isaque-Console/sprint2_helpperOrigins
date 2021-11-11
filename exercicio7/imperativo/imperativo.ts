/**
 * Representa uma lista numerica
 * @public
 */
class Numbers {
    private initialArray: Array<any>;
    private arraySize: number;

    constructor(array: Array<any>) {
        this.initialArray = array;
        this.convertToNumber();
        this.sortArray();
        this.arraySize = array.length;
    }

    /**
     * @remarks
     * converte todos os elementos do array inicial para number
     */
    private convertToNumber(): void {
        for (let index = 0; index < this.initialArray.length; index++) {
            this.initialArray[index] = Number(this.initialArray[index]);
        }
    }

    /**
     * @remarks 
     * ordena o array inicial em ordem crescente
     */
    private sortArray(): void {
        for (let outerLoop = 0; outerLoop < this.initialArray.length; outerLoop++) {
            for (let innerLoop = outerLoop + 1; innerLoop < this.initialArray.length; innerLoop++) {
                if(this.initialArray[outerLoop] > this.initialArray[innerLoop]) {
                    let previousValue: number = this.initialArray[innerLoop];
                    this.initialArray[innerLoop] = this.initialArray[outerLoop];
                    this.initialArray[outerLoop] = previousValue;
                }
            }
        }
    }

    /**
     * 
     * @returns valor do maior numero do array inicial
     */
    private largerNumber(): number {
        return this.initialArray[this.arraySize -1 ];
    }

    /**
     * 
     * @returns valor do menor numero do array inicial
     */
    private smallerNumber(): number {  
        return this.initialArray[0];
    }

    /**
     * 
     * @returns a media dos valores do array inicial
     */
    private average(): number {
        let sum: number = this.initialArray.reduce((valorAnterior: number, valorAtual: number) =>  valorAnterior + valorAtual);
        let numberAverage: string = (sum/this.arraySize).toFixed(2);

        return Number(numberAverage);
    }

    /**
     * 
     * @returns mensagem com o maior numero, o menor numero e a media dos numeros do array inicial
     */
    public statistic(): string {
        let largerNumber: number = this.largerNumber();
        let smallerNumber: number = this.smallerNumber();
        let numberAverage: number = this.average();
        
        return `Maior número: ${largerNumber}, Menor número: ${smallerNumber}, Média dos números: ${numberAverage}`;
    }
}

const statistic = new Numbers([3, 4, "5"]);
console.log(statistic.statistic());
