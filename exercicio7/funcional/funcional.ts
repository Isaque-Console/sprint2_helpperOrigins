class Numeros {
    private lista: Array<any>;
    private listaOrdenada: Array<number>;
    private tamanhoDaLista: number;

    constructor(lista: Array<any>) {
        this.lista = Array.from(lista, elementoDoArray => Number(elementoDoArray));
        this.listaOrdenada = lista.sort();
        this.tamanhoDaLista = lista.length;
    }

    public maiorValor(): number {
        return this.listaOrdenada[this.tamanhoDaLista -1 ];
    }

    public menorValor(): number {  
        return this.listaOrdenada[0];
    }

    public mediaDosValores(): number {
        let somaDosNumeros: number = this.lista.reduce((valorAnterior: number, valorAtual: number) =>  valorAnterior + valorAtual);
        let mediaDosNumeros: string = (somaDosNumeros/this.tamanhoDaLista).toFixed(2);

        return Number(mediaDosNumeros);
    }
}

const estatistica = new Numeros([3, 3, 5]);

console.log(`
    Maior número: ${estatistica.maiorValor()}, Menor número: ${estatistica.menorValor()}, Média dos números: ${estatistica.mediaDosValores()}
`);
