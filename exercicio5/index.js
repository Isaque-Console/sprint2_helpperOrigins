import { Palavra } from "./Palavra.js";
function mostrarNumeroDeVogais() {
    let campo = document.getElementById("palavra");
    let texto = campo.value;
    let palavra = new Palavra();
    let quantidadeDeVogais = palavra.contadorDeVogais(texto);
    alert(`Quantidade de vogais: ${quantidadeDeVogais}`);
}
