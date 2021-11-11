import Palavra from "./Palavra.js";

/**
 * mostrarNumeroDeVogais
 * mostra a quantidade de vogais presente no texto do input
 */
function mostrarNumeroDeVogais(): void {
    let campo: HTMLInputElement = document.getElementById("textoPalavra") as HTMLInputElement;
    let texto: string = campo.value;

    let palavra: Palavra = new Palavra();
    let quantidadeDeVogais: number = palavra.contadorDeVogais(texto);

    alert(`Quantidade de vogais: ${quantidadeDeVogais}`);
}

let botao: HTMLButtonElement = document.getElementById("botaoSubmeter") as HTMLButtonElement;
botao.addEventListener("click", mostrarNumeroDeVogais);
