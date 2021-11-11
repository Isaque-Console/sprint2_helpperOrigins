export default class Palavra {
    public vogais: string = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";

    /**
     * 
     * @param texto - texto do input
     * @returns numero de vogais contidas no texto do input
     */
    public contadorDeVogais(texto: string): number {
        let numeroDeVogais: number = 0;
    
        for(let letra of texto.toLowerCase()) { // conta a quantidade de vogais
            if (this.vogais.includes(letra)) numeroDeVogais++;
        }
            
        return numeroDeVogais
    }
}
