/**
 * Numeros
 * Representa uma lista numerica
 */
class Numeros {
    private lista: Array<any>;
    private listaOrdenada: Array<number>;
    private tamanhoDaLista: number;

    constructor(lista: Array<any>) {
        this.lista = Array.from(lista, elementoDoArray => Number(elementoDoArray));
        this.listaOrdenada = lista.sort();
        this.tamanhoDaLista = lista.length;
    }

    /**
     * maiorValor
     * funcao para descobrir o maior valor da lista
     * 
     * @returns valor do maior numero da lista
     */
    private maiorValor(): number {
        return this.listaOrdenada[this.tamanhoDaLista -1 ];
    }

    /**
     * menorValor
     * funcao para descobrir o menor valor da lista
     * 
     * @returns valor do menor numero da lista
     */
    private menorValor(): number {  
        return this.listaOrdenada[0];
    }

    /**
     * mediaDosValores
     * funcao para descobrir o maior valor da lista
     * 
     * @returns a media dos valores da lista
     */
    private mediaDosValores(): number {
        let somaDosNumeros: number = this.lista.reduce((valorAnterior: number, valorAtual: number) =>  valorAnterior + valorAtual);
        let mediaDosNumeros: string = (somaDosNumeros/this.tamanhoDaLista).toFixed(2);

        return Number(mediaDosNumeros);
    }

    /**
     * estatistica
     * funcao para descobrir os numeros maior, menor e media da lista
     * 
     * @returns mensagem com o maior numero da lista, o menor numero da lista e a media dos numeros da lista
     */
    public estatistica(): string {
        const maiorNumero: number = this.maiorValor();
        const menorNumero: number = this.menorValor();
        const mediaDosNumeros: number = this.mediaDosValores();
        
        return `Maior número: ${maiorNumero}, Menor número: ${menorNumero}, Média dos números: ${mediaDosNumeros}`;
    }
}

const estatistica = new Numeros([3, 3, 5]);
console.log(estatistica.estatistica());
