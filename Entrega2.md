## Sprint 2 - 21/09 A 04/10:

### Objetivo
Após a criação de um "boilerplate" para ambas as frentes, front e back-end, iremos focar esta entrega na produção de um fluxo de cadastro completo e na conexão segura com o Banco de Dados, com criptografia nas informações que são enviadas da captação até o Banco de Dados. Utilizaremos criptografia simétrica no padrão AES-256 para o envio das informações do front-end para o back-end, assim como a decriptação, validação dos dados e nova criptografia simétrica no mesmo padrão, com outra chave para a persistência no banco. Sua conexão será via autênticação SSH ao Banco de dados Mongo, assim somente a aplicação com seu conjunto de chaves fará os acessos e modificações necessárias ao Banco de dados.

- Sign-up Page; (Front-end) :large_blue_circle: :heavy_check_mark:
- Criptografia no envio dos dados; (Front-end) :red_circle: :heavy_check_mark:
- Criação de classe de criptografia; (Back-end) :red_circle: :heavy_check_mark:
- Autenticação via SSH com o Banco de dados pessoais; (BD) :red_circle: :heavy_check_mark:
- Persistência dos dados; (BD) :yellow_circle: :heavy_check_mark:


### Demonstração dos resultados:

Com o avanço desta Sprint, podemos finalmente realizar um processo completo de cadastro dos dados de maneira criptografada e segura.


**Front-end**

O site simula uma loja de vendas online, sendo o cadastro uma das partes mais importantes para empresas do ramo, e também uma das partes mais críticas para a LGPD. Com nosso enfoque na anonimização dos dados, criamos uma interface simples para captação dos dados, onde pode ser acessada pelo [link](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)


![Gif-Front-end-Entrega2](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/front-end-entrega2.gif)


Com a utilização de bibliotecas de criptografia, realizamos a criptografia dos dados no padrão AES-256 para o envio dos dados á aplicação.

![Gif-Back-end-Entrega2](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/back-end-entrega2.gif)

Utilizando uma chave diferente mas no mesmo padrão AES-256, realizamos a inserção dos dados no banco de dados Mongo

![Gif-Mongo-Entrega2](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/Mongo%20-%20Entrega%202.gif)


### Deploy

Para este projeto foram criadas máquinas AWS para cada frente, back-end, front-end e banco de dados. Em cada uma com sistema operacional linux e web server Nginx. 
O resultado final com o fluxo do cadastro em funcionamento pode ser conferido em [SITE](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)

Cada máquina AWS, além de contar com toda a segurança de um dos maiores servidores de Cloud Machine, possui acesso exclusivo via SSH somente com os pares de chaves registrados em cada máquina.


Todos os passos podem ser reproduzidos localmente, seguindo cada passo a passo abaixo:

- [Rodando o Back-end Local](https://github.com/arthurbarbero/DB-LGPD/tree/master/back-end)

- [Arquivos estáticos Front-end](https://github.com/arthurbarbero/DB-LGPD/tree/master/front-end)

- [Criando um MongoDB local](https://github.com/arthurbarbero/DB-LGPD/tree/master/db)

