import { Palavra } from "./Palavra.js";

function mostrarNumeroDeVogais(): void {
    let campo: HTMLInputElement = document.getElementById("textoPalavra") as HTMLInputElement;
    let texto: string = campo.value;

    let palavra: Palavra = new Palavra();
    let quantidadeDeVogais: number = palavra.contadorDeVogais(texto);

    alert(`Quantidade de vogais: ${quantidadeDeVogais}`);
}
