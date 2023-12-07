Para que você seja capaz de utilizar desta API, você deve seguir alguns passos:

  1 - Faça a clonagem desse repositório para a sua máquina.

  2 - Acesse o repositório clonado através de um terminal, com este podendo ser o nativo de seu PC ou o padrão do Visual Studio Code.

  3 - Crie um DATABASE PostgreSQL com o comando: 

  " CREATE DATABASE contacts_db; "

  4 - Instale as dependências necessárias para rodar a aplicação com o seguinte comando ou suas variantes (yarn, por exemplo) :

  " npm install "

  5 - Crie o seu próprio .env e forneça suas variáveis de ambiente.

  6 - Faça a criação das tabelas necessárias através do seguinte comando, ou a variável que você usar:

  " npx prisma migrate dev " 

  7 - Coloque a API para rodar com o seguinte comando, ou a variável que você usar:

  " npm run start "

  8 - Aproveite a API!

  -------------------------------------------------------------------------------------------------------

  ENDPOINTS DA API

  **USERS**:

  */users (POST)* - *"Precisa de autenticação?" NÃO*

  É a rota onde você realizará o seu cadastro para que, posteriomente, você possa logar no site com essa conta.

  request body (exemplo):

     {
      "name": "Satoru Gojo da Silva",
      "email": "satorugojo@gmail.com",
      "password": "123456789",
      "phone": "(31) 0362-2332"
     }
    
  name é obrigatório e é uma string.
  email é obrigatório e é um string. O e-mail obrigatoriamente tem de ser único.
  password é obrigatória e é uma string. A senha precisa possuir, no mínimo, 8 caracteres.
  phone é obrigatório e é uma string.

  caso seja enviado corretamente, você receberá o código 201 e estará pronto para logar.

  --------------------------------------------------------------------------------------------------------

  */users (GET)* - *Precisa de autenticação? SIM*

  Através dessa rota, você consegue requisitar os dados de todos os usuários cadastrados.

    request body (exemplo):

     { }

    o request body não é necessário para acessar essa rota.

  Ao fazer uma requisição nessa rota, o usuário receberá todos os usuários no banco de dados, junto do código 200.

  --------------------------------------------------------------------------------------------------------

  */users/{id} (GET)* - *Precisa de autenticação? SIM*

  Nessa rota, o usuário é capaz de retornar um usuário em específico através do uso de seu id. Como dito a pouco, para utilizar essa rota, você deverá possuir e usar o id do contato.

    request body (exemplo):

     { }

    o request body não é necessário para acessar essa rota.

  Feita a requisição, o usuário receberá apenas os dados do user que ele requisitou através do ID, junto do código 200.

  --------------------------------------------------------------------------------------------------------

  */users/{id} (PATCH)* - *Precisa de autenticação? SIM*

  Acessando essa rota, você se torna capaz de efetuar a atualização dos dados de um usuário. Você, além de precisar estar autenticado, também deve fornecer o ID do contato a ser atualizado.

    request body (exemplo):

     {
      "name": "Satoru Go/jo da Silva",
      "email": "satorugojo@gmail.com",
      "password": "987654321",
      "phone": "(31) 73462-3223"
     }

  Ao fazer uma requisição nessa rota, o usuário receberá os dados atualizados do user atualizado, junto do código 200.


  --------------------------------------------------------------------------------------------------------

  */users/{id} (DELETE)* - *Precisa de autenticação? SIM*

  Acessando essa rota, você se torna capaz de efetuar a deleção de um usuário. Para efetuar a remoção de um user, você, além de precisar estar autenticado, também deve fornecer o ID de quem deseja deletar.

    request body (exemplo):

     { }

    o request body não é necessário para acessar essa rota.

  Feita a requisição, você receberá o código 204, confirmando o sucesso da deleção.

  --------------------------------------------------------------------------------------------------------

  **AUTH**:

  */login (POST)* - *Precisa de autenticação? NÃO*

  
  É a rota onde você enviará seus dados e fará login no site, assim recebendo a permissão para acessar as rotas que, anteriormente, estavam travadas apenas para usuários autenticados.

  request body (exemplo):

     {
      "email": "satorugojo@gmail.com",
      "password": "123456789"
     }
    
  email é obrigatório e é um string. O e-mail obrigatoriamente tem de ser único.
  a senha é obrigatória e é uma string. A senha precisa ter no mínimo 8 caracteres.

  Caso seja enviado corretamente, você receberá o código 201 e estará logado, agora sendo capaz de acessar as rotas acessíveis apenas para os autenticados.

  --------------------------------------------------------------------------------------------------------

  **CONTACTS**:

  */contacts (POST)* - *Precisa de autenticação? SIM*

  
  É a rota onde você enviará os dados de seu contato para o cadastrar e salvar na aplicação, assim o salvando e deixando o contato registrado.

  request body (exemplo):

     {
      "name": "Ryomen Sukuna de Souza",
      "email": "ryomensukuna@hotmail.com",
      "phone": "(55) 99235-0023",
      "description": "Esse cara é foda! O carpinteiro mais brabo de todas as eras."
     }
    
  name é obrigatório e é uma string.
  email é obrigatório e é um string. O e-mail obrigatoriamente tem de ser único.
  phone é obrigatório e é uma string.
  description é opcional e é uma string. Você pode escrever uma descrição com até 128 caracteres.

  caso seja enviado corretamente, você receberá o código 201 e o contato estará salvo e registrado.

  --------------------------------------------------------------------------------------------------------

  */contacts (GET)* - *Precisa de autenticação? NÃO*

  Através dessa rota, você consegue chamar por todos os contatos cadastrados no banco de dados.

    request body (exemplo):

     { }

    o request body não é necessário para acessar essa rota.

  Ao fazer uma requisição nessa rota, o usuário receberá todos os contatos, junto do código 200.

  --------------------------------------------------------------------------------------------------------

  */contacts/{id} (GET) - *Precisa de autenticação? NÃO*

  Nessa rota, o usuário é capaz de retornar um contato em específico através do uso de seu id. Como dito a pouco, para utilizar essa rota, você deverá possuir e usar o id do contato.

    request body (exemplo):

     { }

    o request body não é necessário para acessar essa rota.

  Feita a requisição, o usuário receberá apenas os dados do contato que ele requisitou através do ID, junto do código 200.

  --------------------------------------------------------------------------------------------------------

  */contacts/{id} (PATCH)* - *Precisa de autenticação? SIM*

  Acessando essa rota, você se torna capaz de efetuar a atualização dos dados de seus contatos. Você, além de precisar estar autenticado, também deve fornecer o ID do contato a ser atualizado.

    request body (exemplo):

      {
       "name": "Ryomen Sukuna de Souza",
       "email": "ryomensukuna@hotmail.com",
       "phone": "(55) 77342-8322",
       "description": "Continua brabo, mas certamente decaiu..."
      }

  Ao fazer uma requisição nessa rota, o usuário receberá os dados atualizados de seu contato, junto do código 200.

  --------------------------------------------------------------------------------------------------------

  */contacts/{id} (DELETE)* - *Precisa de autenticação? SIM*

  Acessando essa rota, você se torna capaz de efetuar a deleção de algum de seus contatos. Para efetuar a remoção de um contato, você, além de precisar estar autenticado, também deve fornecer o ID de quem deseja deletar.

    request body (exemplo):

     { }

    o request body não é necessário para acessar essa rota.

  Feita a requisição, você receberá o código 204, confirmando o sucesso da deleção.
