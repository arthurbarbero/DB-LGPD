### Sprint 3 - 05/10 A 18/10:

Com a criptografia simétrica da aplicação realizada e persistindo no Banco de Dados de forma segura, esta entrega irá focar na finalização das demais páginas e rotas conforme a seguir: 

- Validação dos dados; (Back-end) :yellow_circle: :heavy_check_mark:
- Criação das rotas de Sign-in; (Back-end) :yellow_circle: :heavy_check_mark:
- Criação da Sign-in Page; (Front-end) :yellow_circle: :heavy_check_mark:
- Criação de rota para Profile Page (Back-end) :large_blue_circle: :heavy_check_mark:
- Criação da Profile Page (Front-end) :large_blue_circle: :heavy_check_mark:


### Demonstração dos resultados:

Com o avanço desta Sprint, podemos finalmente realizar o fluxo inteiro do projeto, desde o cadastro até a visualização dos seus dados pessoais de forma criptografada.

**Front-end**

Nesta Sprint foram realizadas as páginas de "Login" e "Meu perfil", realizando a entrega de dados pessoais como "e-mail" e "senha"  de forma criptografada, e retornando o ID vinculado ao banco, também de forma encriptada. 

![Login_Entrega_3](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/Login_Entrega_3.gif)

Para o "Meu Perfil", o front-end envia o ID registrado na hora do login e retorna os dados do usuário cadastrado.

![profile_entrega3](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/profile_Entrega_3.gif)


**Back-end**

Para o funcionamento das telas acima, foram criadas as rotas de 'login' e 'getUser'.

No Login, recebemos o email e senha criptografados, descriptografamos e verificamos no banco o ID correspondente retornando de forma encriptada com a chave Back-DB.

![loginBack_Entrega_3](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/loginBack_Entrega_3.gif)

Para a parte do "Perfil de usuário" utilizamos a rota 'getUser', recebendo o ID armazenado do usuário logado, fazemos uma pesquisa no banco pelo ID correspondente e retornamos os dados do usuário requisitado, descriptografamos com a chave Back-DB e encriptamos com o chave Front-Back, e devolvemos os dados ao front.

![getUserBack_Entrega](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/getUserBack_Entrega_3.gif)


### Deploy

Para este projeto foram criadas máquinas AWS para cada frente, back-end, front-end e banco de dados. Em cada uma com sistema operacional Linux e web server Nginx. 
O resultado final com as features mencionadas acima e demais Sprints podem ser conferidas em [SITE](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)

Cada máquina AWS, além de contar com toda a segurança de um dos maiores servidores de Cloud Machine, possui acesso exclusivo via SSH somente com os pares de chaves registrados em cada máquina.


Todos os passos podem ser reproduzidos localmente, seguindo cada passo a passo abaixo:

- [Rodando o Back-end Local](https://github.com/arthurbarbero/DB-LGPD/tree/master/back-end)

- [Arquivos estáticos Front-end](https://github.com/arthurbarbero/DB-LGPD/tree/master/front-end)

- [Criando um MongoDB local](https://github.com/arthurbarbero/DB-LGPD/tree/master/db)

