document.getElementById('action').addEventListener('click', resposta);

function resposta (){
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let linguagem = document.getElementById('linguagem').value;
    
    console.log(nome, idade, linguagem);

    document.getElementById('conversa').innerText = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;

    let respostaLinguagem = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

    if (respostaLinguagem === '1') {
        document.getElementById('conversa').innerText += "\nMuito bom! Continue estudando e você terá muito sucesso.";
    } else if (respostaLinguagem === '2') {
        document.getElementById('conversa').innerText += "\nAhh que pena... Já tentou aprender outras linguagens?";
    } else {
        document.getElementById('conversa').innerText += "\nOpção inválida. Por favor, responda com o número 1 para SIM ou 2 para NÃO.";
    }
}
