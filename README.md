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