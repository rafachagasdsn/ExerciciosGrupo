
var numero1;
var numero2;
var soma, subtracao, multiplicacao, divisaoInteira, divisaoReal;

function calculo1() {
    
    numero1 = parseFloat(prompt("Digite o PRIMEIRO valor:")); 
    numero2 = parseFloat(prompt("Digite o SEGUNDO valor:")); 

    soma = numero1 + numero2;
    subtracao = numero1 - numero2;
    multiplicacao = numero1 * numero2;

    if (numero2 !== 0) {
        divisaoReal = numero1 / numero2;
        divisaoInteira = Math.floor(numero1 / numero2); 
    } else {
        divisaoReal = "Impossível dividir por zero";
        divisaoInteira = "Impossível dividir por zero";
    }

    alert("Soma: " + soma);
    alert("Subtração: " + subtracao);
    alert("Multiplicação: " + multiplicacao);
    alert("Divisão real: " + divisaoReal);
    alert("Divisão inteira: " + divisaoInteira);
    
    console.log("--- RESULTADOS ---");
    console.log("Soma: " + soma);
    console.log("Subtração: " + subtracao);
    console.log("Multiplicação: " + multiplicacao);
    console.log("Divisão real: " + divisaoReal);
    console.log("Divisão inteira: " + divisaoInteira);
    console.log("------------------");
}

calculo1();