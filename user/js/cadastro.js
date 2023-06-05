document.addEventListener("DOMContentLoaded", function() {
  var cadastrarButton = document.querySelector(".a-main");

  cadastrarButton.addEventListener("click", function(event) {
    event.preventDefault();

    var nomeInput = document.querySelector(".inputForm:nth-of-type(1)");
    var cpfInput = document.querySelector(".inputForm:nth-of-type(2)");
    var emailInput = document.querySelector(".inputForm:nth-of-type(3)");
    var senhaInput = document.querySelector(".inputForm:nth-of-type(4)");
    var confirmarSenhaInput = document.querySelector(".inputForm:nth-of-type(5)");

    var nome = nomeInput.value;
    var cpf = cpfInput.value;
    var email = emailInput.value;
    var senha = senhaInput.value;
    var confirmarSenha = confirmarSenhaInput.value;

    if (nome === "" || cpf === "" || email === "" || senha === "" || confirmarSenha === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("O e-mail fornecido é inválido. Por favor, insira um e-mail válido.");
      return;
    }

    var cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf)) {
      alert("O CPF fornecido é inválido. Por favor, insira um CPF válido com 11 dígitos numéricos.");
      return;
    }
    window.location.href = "../index.html";
  });
});

  
  

