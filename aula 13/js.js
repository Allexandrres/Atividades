
//ativiade 1

// try {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;

//     if (nome === '') {
//         throw new Error('Por favor, insira seu nome.');
//     }

//     if (!email.includes('@')) {
//         throw new Error('Por favor, insira um endereço de e-mail válido.');
//     }

//     console.log('Dados válidos. Processando informações...');
// } catch (error) {
//     alert(error.message);
// }

//atividade 2

// const meuBotao = document.getElementById('meuBotao');

// meuBotao.addEventListener('click', () => {
//     try {
//         const resultado = 10 / 0; 
//         console.log('O resultado da operação é: ' + resultado);
//     } catch (error) {
//         console.error('Ocorreu um erro:', error);
//     }
// });

// //atividade 3

// const form = document.getElementById('cadastroForm');

//         form.addEventListener('submit', (event) => {
//             event.preventDefault();

//             try {
//                 const nomeLoja = document.getElementById('nomeLoja').value;
//                 const cidade = document.getElementById('cidade').value;
//                 const valorVendido = parseFloat(document.getElementById('valorVendido').value);

//                 if (!nomeLoja || !cidade || isNaN(valorVendido) || valorVendido < 0) {
//                     throw new Error('Por favor, preencha todos os campos corretamente.');
//                 }

//                 console.log('Cadastro realizado com sucesso!');
//             } catch (error) {
//                 alert(error.message);
//             } finally {
//                 form.reset();
//             }
//         });

//atividade 4

const form = document.getElementById('cadastroForm');
        const errorMessage = document.getElementById('errorMessage');
        const reloadButton = document.getElementById('reloadButton');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            try {
                const nomeLoja = document.getElementById('nomeLoja').value;
                const cidade = document.getElementById('cidade').value;
                const valorVendido = parseFloat(document.getElementById('valorVendido').value);

                if (!nomeLoja || !cidade || isNaN(valorVendido) || valorVendido < 0) {
                    throw new Error('Por favor, preencha todos os campos corretamente e insira um valor válido.');
                }

                errorMessage.textContent = ''; 
                reloadButton.style.display = 'block'; 
                console.log('Cadastro realizado com sucesso!');
            } catch (error) {
                errorMessage.textContent = error.message;
                reloadButton.style.display = 'none'; 
            }
        });