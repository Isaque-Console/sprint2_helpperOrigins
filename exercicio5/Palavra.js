export default class Palavra {
    constructor() {
        this.vogais = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";
    }
    /**
     *
     * @param texto - texto do input
     * @returns numero de vogais contidas no texto do input
     */
    contadorDeVogais(texto) {
        let numeroDeVogais = 0;
        for (let letra of texto.toLowerCase()) { // conta a quantidade de vogais
            if (this.vogais.includes(letra))
                numeroDeVogais++;
        }
        return numeroDeVogais;
    }
}
