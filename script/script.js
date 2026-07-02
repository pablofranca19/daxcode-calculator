
let anoNascimento = document.getElementById("anoNascimento");
const button = document.getElementById("calcular");
const anoAtual = 2026;
const paragrafo = document.getElementById("resposta");

function calcularIdade (anoNascimento, anoAtual) {
    return anoAtual - anoNascimento.value;
}

try {
    button.addEventListener("click", () => {
        paragrafo.textContent = "Você tem " + calcularIdade(anoNascimento, anoAtual) + " anos.";
    });
} catch (TypeError) {
    console.log("Caiu no TypeError");
}


