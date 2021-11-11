import Palavra from "./Palavra.js";
/**
 * mostrarNumeroDeVogais
 * mostra a quantidade de vogais presente no texto do input
 */
function mostrarNumeroDeVogais() {
    let campo = document.getElementById("textoPalavra");
    let texto = campo.value;
    let palavra = new Palavra();
    let quantidadeDeVogais = palavra.contadorDeVogais(texto);
    alert(`Quantidade de vogais: ${quantidadeDeVogais}`);
}
let botao = document.getElementById("botaoSubmeter");
botao.addEventListener("click", mostrarNumeroDeVogais);
