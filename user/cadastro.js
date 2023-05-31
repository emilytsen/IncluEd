// cadastro.js

// Função para validar o formulário de cadastro
function validarCadastro() {
    // Obter os campos do formulário
    var nome = document.querySelector('.inputForm[placeholder="nome"]').value;
    var cpf = document.querySelector('.inputForm[placeholder="CPF"]').value;
    var email = document.querySelector('.inputForm[placeholder="email"]').value;
    var senha = document.querySelector('.inputForm[placeholder="senha"]').value;
    var confirmacaoSenha = document.querySelector('.inputForm[placeholder="confirmação de senha"]').value;

    // Realizar as validações dos campos
    if (nome.trim() === '') {
        alert('Por favor, informe o nome.');
        return false;
    }

    if (cpf.trim() === '') {
        alert('Por favor, informe o CPF.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, informe o email.');
        return false;
    }

    if (senha.trim() === '') {
        alert('Por favor, informe a senha.');
        return false;
    }

    if (senha !== confirmacaoSenha) {
        alert('A senha e a confirmação de senha não correspondem.');
        return false;
    }

    // Armazenar o nome no armazenamento local
    localStorage.setItem('nome', nome);

    return true;
}

// Evento de envio do formulário
var formCadastro = document.querySelector('.formCadastro');
formCadastro.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o envio do formulário

    // Chamar a função de validação do formulário
    var isValid = validarCadastro();

    if (isValid) {
        // Caso o formulário seja válido, você pode fazer o redirecionamento para a página de sucesso ou enviar os dados para o servidor
        // Aqui, apenas exibiremos uma mensagem de sucesso
        alert('Cadastro realizado com sucesso!');
        window.location.href = '../user/home.html'; // Redirecionar para a homepage
    }
});

