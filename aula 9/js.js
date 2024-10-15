
//ATIVIDADE 1

// const inputText = document.getElementById('input-text');
// const addButton = document.getElementById('add-button');
// const wordList = document.getElementById('word-list');

// addButton.addEventListener('click', () => {
//     const text = inputText.value.trim();

//     if (text !== '') {
//         const words = text.split(' ');

//         words.forEach(word => {
//             const listItem = document.createElement('li');
//             listItem.textContent = word;
//             wordList.appendChild(listItem);
//         });

//         inputText.value = '';
//     }
// });

//ATIVIDADE 2

// const botao = document.createElement('button');
// botao.textContent = 'Adicionar Parágrafo';
// document.body.appendChild(botao);

// function adicionarParagrafo() {
//     const novoParagrafo = document.createElement('p');
//     novoParagrafo.textContent = 'Este é um novo parágrafo com texto personalizado.';
//     document.body.appendChild(novoParagrafo);
// }

// botao.addEventListener('click', adicionarParagrafo);

//ATIVIDADE 3 

// const colorButtons = document.querySelectorAll('.color-button');

// colorButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const color = button.style.backgroundColor;
//         document.body.style.backgroundColor = color;
//     });
// });

//ATIVIDADE  4

// const quotes = [
//     "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso. - Charles Swindoll",
//     "O único modo de fazer um excelente trabalho é amar o que você faz. - Steve Jobs",
//     "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
//     "A persistência é o caminho do êxito. - Charles Chaplin",
//     "O que não provoca minha morte faz com que eu fique mais forte. - Friedrich Nietzsche"
// ];

// const quoteElement = document.getElementById('quote');
// const generateButton = document.getElementById('generate-button');

// generateButton.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
    
//     quoteElement.textContent = randomQuote;
    
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     quoteElement.style.color = randomColor;
// });

//ATIVIDADE 5

// const lamp = document.getElementById('lamp');

// lamp.addEventListener('mouseover', () => {
//     lamp.src = 'lampada-on.jpg';
// });

// lamp.addEventListener('mouseout', () => {
//     lamp.src = 'lampada.jpg';
// });

//ATIVIDADE 6

// const botaoCalculo = document.getElementById('calculo');

// botaoCalculo.addEventListener('click', () => {
//     const inputValorA = document.getElementById('inputValorA').value;
//     const inputValorB = document.getElementById('inputValorB').value;

//     const resultado = parseInt(inputValorA) + parseInt(inputValorB);

//     document.getElementById('resultado').textContent = `O resultado da soma é: ${resultado}`;
// });

//ATIVIDADE 7

// const colorfulDiv = document.getElementById('colorful-div');

// colorfulDiv.addEventListener('mouseover', () => {
//     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     colorfulDiv.style.backgroundColor = randomColor;
// });

// colorfulDiv.addEventListener('mouseout', () => {
//     colorfulDiv.style.backgroundColor = '#3498db'; // Cor original
// });