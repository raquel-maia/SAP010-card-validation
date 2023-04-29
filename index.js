import validator from './validator.js';


// Seleciona os elementos HTML por meio do ID
const validNumber = document.getElementById("validNumber");
const button = document.getElementById("validateButton");
const message = document.getElementById("message");


// Adiciona um listener de evento ao botão para disparar a função "number" quando clicado
button.addEventListener('click', number);


// Função "number" que será disparada quando o botão for clicado
function number(evento) {
  // Previne o comportamento padrão do formulário de ser enviado
  evento.preventDefault();
 
  // Obtém o valor do número de cartão inserido pelo usuário
  const numeroCartao = validNumber.value;
 
  // Verifica se o número de cartão é válido usando a função "isValid" do módulo "validator"
  const validador = validator.isValid(numeroCartao);


  // Se o número de cartão for menor que 16, exibe a mensagem de "Número de Cartão Incompleto"
  if (numeroCartao.length < 16) {
    return (message.innerHTML = "Número de Cartão Incompleto");
  }
  // Se o número de cartão for válido, exibe a mensagem de "Seu Cartão é válido" com a máscara aplicada ao número de cartão
  else if (validador === true) {
    return (message.innerHTML = `Seu Cartão é válido ${validator.maskify(numeroCartao)}`);
  }
  // Se o número de cartão for inválido, exibe um alerta com a mensagem "Cartão Inválido"
  else if (!validador) {
    alert("Cartão Inválido");
  }
}


// Seleciona o elemento HTML para exibir o número de cartão mascarado
const validNumberTwo = document.getElementById("validNumberTwo");


// Adiciona um listener de evento que será disparado toda vez que o usuário digitar algo no campo do número de cartão
validNumber.addEventListener("input", function() {
  // Obtém o valor do número de cartão digitado
  const originalValue = validNumber.value;
   
  // Remove todos os caracteres não numéricos do número de cartão
  const numericValue = originalValue.replace(/\D/g, '');
   
  // Exibe o valor do número de cartão sem máscara no segundo campo
  validNumberTwo.value = numericValue;
});
 


// Seleciona os elementos HTML para os campos de nome do usuário e exibe o valor digitado no segundo campo
const nameTextOne = document.getElementById("nameTextOne");
const nameTextTwo = document.getElementById("nameTextTwo");


nameTextOne.addEventListener("input", function() {
  nameTextTwo.value = nameTextOne.value;
});


// Seleciona os elementos HTML para os campos de senha do usuário e exibe o valor digitado no segundo campo
const textPassword = document.getElementById("textPassword");
const textPassword2 = document.getElementById("textPassword2");


textPassword.addEventListener("input", function() {
  textPassword2.value = textPassword.value;
});

