var nome = "Alvaro"
var idade = 0


var idadeUsuario = prompt("Quantos anos você tem?")
var idadeUsuarioComoNumero = parseInt(idadeUsuario)


alert(idadeUsuarioComoNumero)

var valorEmDolarTexto = prompt("Valor do tênis em dolar")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado) 

// aula 1, ultilizado no site
// variaveis var int, float, string
// alert pra jogar na tela
// parseInt transforma numero (em formato de texto) para numero
// parseFloat transforma numero (inteiro) em numero com decimal
// somar (+) multiplicar (*)
// prompt para o que você vai escrever no alert