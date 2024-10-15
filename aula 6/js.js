
//ATIVIDADE 1

// function contarVogais(str) {
//     const vogais = 'aeiouAEIOU';
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vogais.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// const palavra = "Beterraba";
// const numVogais = contarVogais(palavra);
// console.log(`A palavra "${palavra}" possui ${numVogais} vogais.`);

//ATIVIDADE 2

// function calcularQuadrado(numero) {
//     return numero * numero;
// }

// const numero = 5;
// const quadrado = calcularQuadrado(numero);
// console.log(`O quadrado de ${numero} é ${quadrado}.`);

//ATIVIDADE 3

// function calcularAreaPerimetroCirculo(raio) {
//     const pi = Math.PI;
//     const area = pi * raio * raio;
//     const perimetro = 2 * pi * raio;

//     return { area, perimetro };
// }

// const raio = 5;
// const resultado = calcularAreaPerimetroCirculo(raio);
// console.log(`Para um círculo com raio ${raio}:`);
// console.log(`- Área: ${resultado.area.toFixed(2)}`);
// console.log(`- Perímetro: ${resultado.perimetro.toFixed(2)}`);

//ATIVIDADE 4 

// function verificarPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const numeroUsuario = prompt("Digite um número para verificar se é primo:");

// const numero = parseInt(numeroUsuario);

// if (verificarPrimo(numero)) {
//     console.log(`${numero} é um número primo.`);
// } else {
//     console.log(`${numero} não é um número primo.`);
// }

//ATIVIDADE 5

// const calculadoraBasica = function(numero1, numero2, operacao) {
//     switch (operacao) {
//         case 'adição':
//             return numero1 + numero2;
//         case 'subtração':
//             return numero1 - numero2;
//         case 'multiplicação':
//             return numero1 * numero2;
//         case 'divisão':
//             if (numero2 !== 0) {
//                 return numero1 / numero2;
//             } else {
//                 return 'Não é possível dividir por zero.';
//             }
//         default:
//             return 'Operação inválida. Por favor, escolha entre adição, subtração, multiplicação ou divisão.';
//     }
// };

// const num1 = 10;
// const num2 = 5;
// const operacao = 'adição';
// const resultado = calculadoraBasica(num1, num2, operacao);
// console.log(`O resultado da ${operacao} de ${num1} e ${num2} é: ${resultado}`);

//ATIVIADE 6 

// const somarNumeros = function(numero1, numero2) {
//     return numero1 + numero2;
// };

// const num1 = 10;
// const num2 = 5;
// const resultado = somarNumeros(num1, num2);
// console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);

//ATIVIDADE 7 

// function valorPagamento(valorPrestacao, diasAtraso) {
//     if (diasAtraso <= 0) {
//         return valorPrestacao;
//     } else {
//         const multa = valorPrestacao * 0.1;
//         const juros = valorPrestacao * 0.05 * diasAtraso;
//         return valorPrestacao + multa + juros;
//     }
// }

// const valorPrestacao = parseFloat(prompt("Digite o valor da prestação:"));
// const diasAtraso = parseInt(prompt("Digite o número de dias em atraso:"));

// const valorFinal = valorPagamento(valorPrestacao, diasAtraso);

// console.log(`O valor a ser pago é: R$ ${valorFinal.toFixed(2)}`);