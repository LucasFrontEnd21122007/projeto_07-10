// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tarifas-form");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Coletar dados do formulário
        const valorInput = document.getElementById("valor").value;
        const taxaInput = document.getElementById("taxa").value;

        // Realizar o cálculo (exemplo simples)
        const resultadoCalculo = valorInput * taxaInput;

        // Exibir o resultado
        resultado.innerHTML = `O resultado é: ${resultadoCalculo}`;
    });
});
