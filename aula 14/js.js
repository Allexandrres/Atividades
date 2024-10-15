
//ATIVIDADE 1

// const formulario = document.getElementById('meuFormulario');

// formulario.addEventListener('submit', (event) => {
//     event.preventDefault();

//     try {
//         const nome = document.getElementById('nome').value;
//         const email = document.getElementById('email').value;

//         if (nome.trim() === '') {
//             throw new Error('Por favor, insira seu nome.');
//         }

//         if (!email.includes('@')) {
//             throw new Error('Por favor, insira um endereço de e-mail válido.');
//         }

//         console.log('Dados válidos. Processando informações...');
//     } catch (error) {
//         alert(error.message);
//     }
// });

//ATIVIDADE 2

const cep = 'CEP_DESEJADO';
const url = `https://viacep.com.br/ws/${cep}/json/`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao acessar a API da ViaCEP');
    }
    return response.json();
  })
  .then(data => {
    if (data.erro) {
      throw new Error('CEP não encontrado');
    }
    console.log('Logradouro:', data.logradouro);
    console.log('Bairro:', data.bairro);
    console.log('Cidade:', data.localidade);
    console.log('Estado:', data.uf);
  })
  .catch(error => console.error('Ocorreu um erro ao acessar a API da ViaCEP:', error));