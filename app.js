var numeroSecreto = parseInt(Math.random() * 11);
var resultado = document.getElementById("resultado");
var tentativa = 1;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativa < 4) {
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Parabéns!! Você acertou";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "O número precisa ser de 0 a 10";
    } else {
      if (numeroSecreto < chute) {
        resultado.innerHTML = "Que pena, você errou, o número é menor";
      } else if (numeroSecreto > chute) {
        resultado.innerHTML = "Que pena, você errou, o número é maior";
      }
    }
    tentativa = tentativa + 1;
  } else {
    resultado.innerHTML = "Suas tentativas acabaram!";
  }
}