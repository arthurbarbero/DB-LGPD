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
  
  
  ## Exemplo de configuração no firewall Linux com vinculação a apenas um IP:
  
  - Instale ou atualize o UFW:
  
   Para configurar o firewall no servidor de forma a aceitar apenas requisições de Ip's listados, contamos com a ajuda do UFW, nativo na maioria dos sistemas Linux, porém, também inativos na maioria dos computadores pessoais, verifiquemos que este esta ativo com o comando: 
   ```
    sudo ufw status
   ```
  
   Caso a resposta seja ``Status: inative`` utilize o comando ``sudo ufw enable``, mas antes realize as seguintes permissões para conexões SSH:
   ```
    sudo ufw allow ssh
    
    sudo ufw allow 2222
   ```
   
   Agora realize as permissões para o IP da máquina e a porta padrão MongoDB, ou outra porta que tenha escolhido na instalação do MongoDB:
   ```
    sudo ufw allow from <ip.da.sua.máquina> to any port 27017
   ```
   
   Ao final rode o comando para inicializar o funcionamento do Firewall, ou  verifique se as permissões foram criadas corretamente com os comandos:
   ```
    sudo ufw enable
    
    sudo ufw status
   ```
   
   A saída esperada será algo assim:
   ```
    Status: active

    To                         Action      From
    --                         ------      ----
    22/tcp                     ALLOW       Anywhere
    22                         ALLOW       Anywhere
    2222                       ALLOW       Anywhere
    27017                      ALLOW       <ip.da.sua.máquina>
    22/tcp (v6)                ALLOW       Anywhere (v6)
    22 (v6)                    ALLOW       Anywhere (v6)
    2222 (v6)                  ALLOW       Anywhere (v6)
   
   ```
   
   Pronto, Firewall configurado.
