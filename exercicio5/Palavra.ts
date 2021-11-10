export class Palavra {
    public vogais: string = "aáàâãeéèễẽiiíìîĩoóòôõuúùûũ";

    public contadorDeVogais(texto: string): number {
        let numeroDeVogais: number = 0;
    
        for(let letra of texto.toLowerCase()) { // conta a quantidade de vogais
            if (this.vogais.includes(letra)) numeroDeVogais++;
        }
            
        return numeroDeVogais
    }
}
