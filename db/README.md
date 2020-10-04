# Banco MongoDB

Para a realização deste projeto, foi utilizado o MongoDB para simular as interações com um banco de dados.

Em toda a aplicação em produção não é necessário realizar nenhuma instalação, somente acessar o [site em produção](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)

## Iniciando o MongoDB localmente:

### Instale o MongoDB Shell:

 - Acesse o [site do MongoDB](https://docs.mongodb.com/manual/administration/install-community/) e realize o passo a passo de instalação de acordo com o seu Sistema Operacional
 
 - Com o Mongo instalado realize os seguintes comandos em um terminal de comandos:
 
 ```
    $ mongo
    > use DadosPessoais
    > db.createUser({
    ...     user: "SeuUsuário",
    ...     pwd: "SuaSenha",
    ...     roles: [ { role: "readWrite", db: "DadosPessoais"}]
    ... })
 ```
 
  - Após a criação do usuário, registre as credenciais no back-end, de acordo com o especificado em [Back-end](https://github.com/arthurbarbero/DB-LGPD/tree/master/back-end)
