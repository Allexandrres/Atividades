
//ATIVIDADE 1

// let contador = 1;

// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

//ATIVIDADE 2

// let numero;

// do {
//     numero = parseInt(prompt("Digite um número. Insira um número negativo para sair:"));
// } while (numero >= 0);

// console.log("Número negativo inserido. O loop foi encerrado.");

//ATIVIDADE 3

// let soma = 0;
// let input;

// do {
//     input = prompt("Digite um número (ou um valor não numérico para sair):");
    
//     if (!isNaN(input)) {
//         soma += parseFloat(input);
//     }
// } while (!isNaN(input));

// console.log(`A soma dos números inseridos é: ${soma}`);

//ATIVIDADE 4

// const numeroAdivinhar = 7; 
// let palpite;

// do {
//     palpite = parseInt(prompt("Tente adivinhar um número entre 1 e 10:"));

//     if (palpite === numeroAdivinhar) {
//         console.log("Parabéns! Você acertou o número.");
//     } else {
//         console.log("Tente novamente. Adivinhe outro número.");
//     }
// } while (palpite !== numeroAdivinhar);

//ATIVIDADE 5

// let numero = parseInt(prompt("Insira um número inteiro positivo:"));
// let soma = 0;
// let contador = 1;

// while (contador <= numero) {
//     soma += contador;
//     contador++;
// }

// console.log(`A soma de todos os números inteiros de 1 até ${numero} é: ${soma}`);