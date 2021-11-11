export default class Palavra {
    constructor() {
        this.vogais = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";
    }
    contadorDeVogais(texto) {
        let numeroDeVogais = 0;
        for (let letra of texto.toLowerCase()) { // conta a quantidade de vogais
            if (this.vogais.includes(letra))
                numeroDeVogais++;
        }
        return numeroDeVogais;
    }
}
