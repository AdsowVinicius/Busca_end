# Consultar endereço com o CEP

***

## O que é o projeto?
É uma pagina web onde pode-se pesquisar um endereço através do CEP.

***

## Como usar

Com um terminal aberto na pasta **src**, digite o comando **npm install** para instalar as dependecias.

Após isso, isira o comando **docker compose up**  e acesse o URL **localhost:3000**.

Ao abrir a página, aparecerá a seguinte tela:

![hGkmdHKLMa](https://github.com/Compass-pb-aws-2023-FATEC/sprint-3-pb-aws-fatec/assets/139508530/982dceb6-452c-4252-993e-209d70663955)

No campo CEP, deve-se colocar o CEP do endereço desejado.

Após ter inserido o CEP, clique no botão enviar. Após isso, aparecerá o cep, endereço, bairro, cidade e estado.

Segue o exemplo com o CEP da Avenida Paulista na cidade de São Paulo.

![SYojlQiubj](https://github.com/Compass-pb-aws-2023-FATEC/sprint-3-pb-aws-fatec/assets/139508530/fa13dfd1-e909-44f4-838c-9def9790ef49)

***
## Como funciona

**Servidor Web (Express)**:

O aplicativo utiliza o framework Express para criar um servidor web. O servidor gerencia as solicitações HTTP dos usuários, direcionando-as para as rotas adequadas e retornando as respostas apropriadas. Ele também serve os arquivos estáticos, como folhas de estilo e scripts do lado do cliente.

**Views e Modelos (Express Handlebars)**:

O Express Handlebars é um mecanismo de modelo usado para renderizar as páginas HTML. Os templates HTML são usados para criar as páginas web dinamicamente, preenchendo os dados fornecidos pelo servidor.

**Roteamento**:

O aplicativo define rotas para diferentes URLs. Por exemplo, a rota raiz ("/") exibe a página inicial onde os usuários podem inserir um CEP para consulta. A rota "/submit" é usada para lidar com o envio do formulário de consulta e exibir os resultados.

**Validação e Consulta de CEP**:

Quando o usuário envia o formulário de consulta, o servidor primeiro valida o CEP fornecido pelo usuário. Ele verifica se o CEP está no formato correto e se é um valor válido. Se houver algum erro de validação, o servidor exibe mensagens de erro na página.

**Interação com os Correios (node-correios)**:

Se o CEP passar na validação, o aplicativo utiliza a biblioteca node-correios para fazer uma consulta aos serviços dos Correios. Essa consulta recupera informações de endereço associadas ao CEP fornecido.

**Renderização dos Resultados**:

Após obter os resultados da consulta aos Correios, o aplicativo renderiza uma página com as informações de endereço. Se ocorrer um erro na consulta, uma mensagem apropriada é exibida.

***

## Recursos utilizados

- Visual Studio Code
- Node.js
- HTML
- CSS
- JavaScript
- Express
- API: node-correios [https://www.npmjs.com/package/node-correios]
- Docker


***

