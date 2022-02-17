# Instruções para execução de ambiente PDHours Backend

## Início

Para o gerenciamento dos dados foi utilizado o banco de dados relacional PostgreSQL e sua ferramenta gerenciadora pgAdmin. As credenciais criadas e o banco de dados criado serão necessárias para a configuração no próximo item.
## Configuração de Database

Em database/config_db.js é necessária a configuração das credenciais de acordo com as existentes no pgdmin, além da seleção do banco que será executado.

## Criação das Tabelas

Em database/db_create.txt está o script de criação das tabelas, a ser executado no Query do banco criado.

## Inicialização do Servidor

Em server.js está a base da aplicação, recebendo suas requisições através da porta 3001 ou outra fornecida pela variável de ambiente PORT. Essa configuração posteriormente será necessária para o envio de requisições, onde necessitará de uma url base e sua porta. 
