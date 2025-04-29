# TDD Store API

Este projeto é uma **API de gerenciamento de produtos**, desenvolvida com **Node.js** e **MongoDB**, com o objetivo principal de **praticar e entender o fluxo real de desenvolvimento utilizando TDD (Test-Driven Development)**.  
Aqui aplicamos testes integrados com o **Jest**, conectando a API a um banco de dados de teste isolado.

---

## Objetivo do Projeto

> **Aprender na prática como estruturar uma aplicação utilizando o TDD (Test-Driven Development).**

Durante o desenvolvimento, o foco foi:
- Construir primeiro os testes automatizados.
- Garantir que o código da API atendesse às expectativas dos testes.
- Utilizar boas práticas de organização e manutenção de código.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criação de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB no Node.js.
- **Jest**: Framework de testes para Node.js.
- **Cross-env**: Biblioteca para configurar variáveis de ambiente de forma multiplataforma.

---

##  Funcionalidades

- **Cadastro de Produtos**: Permite criar produtos com `nome` e `preço`.
- **Listagem de Produtos**: Permite consultar todos os produtos cadastrados.
- **Banco de Dados de Teste**: Utiliza um banco separado (`tdd_store_test`) durante a execução dos testes, protegendo o banco de produção.

---

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/CarolinaCamposs/TDD-Store-API-JS
  
  cd tdd-store-api-js
```

Instale as Dependências

```bash
  npm install
```

Conecte-se ao MongoDB

Certifique-se de que o MongoDB está rodando em sua máquina ou utilize um serviço de MongoDB na nuvem, como o MongoDB Atlas.

Execute os Testes

```bash
  npm test

```
Isso irá rodar todos os testes definidos em tests/integration/product.routes.test.js


## Configuração para Ambiente de Teste
A API está configurada para usar um banco de dados separado para testes (tdd_store_test). O script de teste configura o ambiente de teste com o comando cross-env NODE_ENV=test para garantir que a API utilize a configuração correta de banco de dados durante os testes.

## Limpeza de Banco de Dados de Teste
Após a execução dos testes, a função await mongoose.connection.dropDatabase(); é chamada para limpar o banco de dados de teste, garantindo que a base de dados não seja acumulada com dados antigos entre execuções de testes.

## Testes
A API está sendo testada com Jest, com dois testes principais:

- Cadastro de um Produto: Testa a criação de um novo produto, verificando se o produto foi adicionado corretamente.

- Listagem de Produtos: Testa a listagem de todos os produtos cadastrados.

## Melhorias Futuras
- Implementar a atualização e exclusão de produtos.

- Adicionar autenticação para proteger as rotas.

- Criar testes mais completos, incluindo testes para erros e casos de borda.

- Adicionar validação de entrada de dados (por exemplo, verificar se o preço é um número positivo).
