// Função para adicionar um novo contato na agenda
function adicionaContato() {
    // pegando os valores nos campos
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    
    // Criando o HTML para a nova linha da tabela com os valores do novo contato
    var newRowHTML = "<tr><td>" + nome + "</td><td>" + telefone;

    // Adicionando a nova linha à tabela
    document.getElementById("tabela-contatos").innerHTML += newRowHTML;

    // Limpando os campos do formulário após adicionar o contato
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

// Adicionando um evento de submissão ao formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    adicionaContato(); // Chama a função para adicionar o contato
});