//Terceira aula

const input = require("prompt-sync")({ singint: true});
var numero1 = parseFloat(input("digite o primeiro numero:"));
var numero2 = parseFloat(input("digite o segundo numero:"));
console.log("a soma é:", + (numero1 + numero2));


const input = require('fs').readFileSync('./dev/stdin', 'utf8');

var lines = input.split('\n');

var numeroDeFuncionarios = parseInt(lines[0]);
var horasTrabalhadas = parseFloat(lines[1]);
var valorPorHora = parseFloat(lines[2]);

var salario = horasTrabalhadas * valorPorHora;

console.log("NUMBER = " + numeroDeFuncionarios)
console.log("SALARY = U$ " + salario.toFixed(2));

var soma = parseFloat(lines[0]) + parseFloat(lines[1]) ;
console.log("A soma é:" + soma);

//Segunda aula

const input = require("prompt-sync")({singint:true});
//
/*const { randomBytes } = require("crypto");
console.log("aula de revisão")
var idade = 15;
*/
console.log(idade)
var frase = 
console.log(frase)
var idade = 95;
var idade = input("escreva sua idade:"+ idade)
var idade = input("escreva a sua idades:"+ idade + idade);

//Primeira aula

console.log("Programação é massa demais!");
console.log("lucas soneca");




--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





//1. Hello World!
console.log("Hello World!");

 //2. Extremamente Básico
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

A = parseInt(lines.shift());
B = parseInt(lines.shift());
console.log(X = ${A + B});

// 3. Área do Círculo
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

const pi = 3.14159;
let raio = parseFloat(lines.shift());

let area = pi * raio * raio;

console.log(A=${area.toFixed(4)});

// 4. Soma Simples
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

console.log(SOMA = ${A + B});

 //5. Produto Simples
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

console.log(PROD = ${A * B});

// 6. Média 1
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = (3.5 * A + 7.5 * B) / 11;

console.log(MEDIA = ${media.toFixed(5)});

 //7. Média 2
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let media = (2 * A + 3 * B + 5 * C) / 10;

console.log(MEDIA = ${media.toFixed(1)});

 //8. Diferença
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let diferenca = A * B - C * D;

console.log(DIFERENCA = ${diferenca});

 //9. Salário
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let numero = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valor = parseFloat(lines.shift());

let salario = valor * horas;

console.log(NUMBER = ${numero});
console.log(SALARY = U$ ${salario.toFixed(2)});

 //10. Salário com Bônus
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let vendedor = lines.shift();
let salario = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let total = salario + 0.15 * vendas;

console.log(TOTAL = R$ ${total.toFixed(2)});

 //11. Cálculo Simples
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let values = lines.shift().trim().split(" ");
codigo1 = parseInt(values.shift());
quantidade1 = parseInt(values.shift());
valor1 = parseFloat(values.shift());

values = lines.shift().trim().split(" ");
codigo2 = parseInt(values.shift());
quantidade2 = parseInt(values.shift());
valor2 = parseFloat(values.shift());

let valor = quantidade1 * valor1 + quantidade2 * valor2;

console.log(VALOR A PAGAR: R$ ${valor.toFixed(2)});

// 12. Esfera
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let R = parseInt(lines.shift());
const PI = 3.14159;

let volume = (4/3) * PI * R * R * R;

console.log(VOLUME = ${volume.toFixed(3)});

// 13. Área
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

const PI = 3.14159;

let [A, B, C] = lines.shift().split(" ").map((x) => parseFloat(x));

const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * C * C;
const areaTrapezio = ((A + B) / 2) * C;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(TRIANGULO: ${areaTriangulo.toFixed(3)});
console.log(CIRCULO: ${areaCirculo.toFixed(3)});
console.log(TRAPEZIO: ${areaTrapezio.toFixed(3)});
console.log(QUADRADO: ${areaQuadrado.toFixed(3)});
console.log(RETANGULO: ${areaRetangulo.toFixed(3)});

