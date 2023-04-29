const validator = {
  isValid(creditCardNumber) {
    // define duas variáveis, uma para armazenar a soma dos dígitos do número e outra para verificar se o próximo dígito deve ser duplicado
    let sum = 0;
    let double = false;


    // percorre cada dígito do número de cartão de crédito, do último para o primeiro
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      // obtém o dígito atual
      let digit = parseInt(creditCardNumber.charAt(i));


      // se o dígito deve ser duplicado, o duplica e subtrai 9 se o resultado for maior que 9
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }


      // adiciona o dígito atual à soma e alterna a flag de duplicação
      sum += digit;
      double = !double;
    }


    // retorna true se a soma é divisível por 10, o que significa que o número é válido, caso contrário retorna false
    return (sum % 10) === 0;
  },


  // esta é uma função que mascara os dígitos do número de cartão de crédito, mantendo apenas os últimos 4 dígitos
  maskify(creditCardNumber) {
    // se o número de cartão de crédito tem 4 dígitos ou menos, retorna o próprio número
    if (creditCardNumber.length <= 4) {
      return creditCardNumber;
    }
   
    // obtém os últimos 4 dígitos do número de cartão de crédito
    const lastFourDigits = creditCardNumber.slice(-4);
    // cria uma string com o caractere "#" repetido várias vezes para o número de dígitos menos os últimos 4
    const maskedDigits = "#".repeat(creditCardNumber.length - 4);
   
    // retorna a string com os dígitos mascarados mais os últimos 4 dígitos do número de cartão de crédito
    return maskedDigits + lastFourDigits;
  }
};
export default validator;





