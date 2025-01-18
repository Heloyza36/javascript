document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";


/* Variaveis sao recipientes onde podemos armazenar informacoes que podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variaveis:
-> var = variaveis globais onde podem ser alteradas a qualquer momento 
-> let = so vai  funcionar para o bloco q ele esta dentro
-> const = nao obedece mudancas e tbm funciona apenas no bloco q esta ou fora
*/

/* Operadores 
separados em 6

1- operadores aritmeticos;
-> +, -, *, /, --(tirar um), ++(adc um).
2- operadores de atribuicao;
-> = e juntar os aritmenticos e o = dps pra nao repetir   
3- operadores de sequencia; 
-> + (quando e um  nome de variavel o + vai servir pra juntar os elementos )
4- operadores de comparacao;
-> ==, (verdadeiro ou falso os numeros) === (valor e tipo igual ), != (diferente ou nao igual  ), !== (diferente o valor e o tipo ), < (menor), > (maior), >= (maior ou igual), <=(menor ou igual )
5- operadores condicional, 
->(condicao), ? valor : reacao se for falso), 
6- operadores logicos,
-> (condicao dupla) &&, || (ou), ! (antes da condicao, sinal de negacao)

*/


/* funcoes excutdas quando algo lhe chama*/

function soma(valor1,valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 23);


function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
    
}

var valorReal = 7.89;
var cotacaO =  7.98;

var total = realParaDolar (valorReal + cotacao);

alert("O valor em real e R$: " + valorReal + " o valor em dolar U$ e:");

/* quando clicar em um botao no html (button onclick= "alertahello()">clique aqui 
funcion .....)*/

function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}

var x = paraCelsius (77);

alert ("A temperatura e de "+X+" graus celsius")

function alertaHello() {
   alert("ola pessoal") 
}


/* objetos sao basicamente variaveis com muitos valores dentro

tbm pode ter metodos [e ua funcao colocadas dentro de uma propriedade*/

const carro = {marca:"ford", modelo: "ka", ano:2015, placa:"ABC-1234", buzia: function () { alert ('biiiiiiiiiiiiiiiiiiii')},
completo: function (){
    return "a marca e " +this.marca+ " e o modelo e  "+this.marca.modelo}};

console.log(carro.completo());

carro.buzina();

/* EVENTOS

Eventos são ações disparadas pela interação dos usuários na página.

Existem muitos eventos. Veja os mais utílizados:

onclick → Disparado quando recebe um click,
ondblelick → Disparado quando Clique duplo.
onmouseover - Disparado quando o nouse está, sobre.
onmouseout, - Disparado guando a mouse é movido para fora do elemento.
onmousemove → Disparado quando a nouse é novido no elemento. onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup, Disparado quando o clique do botão é Liberado
onfocus, Dispanado quando o elemento recebe o foco, Válido para inputa
onchange → Disparado quando existe uma mudanca na conteudo. "Ao mudar".
onblur Disparado quando o elenento perde o foco.;
onkeydown - dispara quando uma tecla eh precionada
onkeypress - dispara quando uma tecla e pressionada e solta
onkeyup - dispara quando uma tecla e solta sobre um elemento
onload - dispara quando a pagina terminou de ser carregada. body
onresize - dispara quando ha um redimecionamento da janela */

/* colocar esses eventos dentro de um button ou seila */

/* arrays armazenar varios valores dentro de uma unica variavel mas nao passando propriedade nem nomes pra elas e e encontrada dependendo da posicao que esta
