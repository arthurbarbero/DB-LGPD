### Sprint 4 - 19/10 A 01/11:

Após as demais entregas, utilizamos desta sprint para finalizar o restante das tarefas e consertar quaisquer passos anteriores que estejam fora do padrão requisitado pelo cliente.

- Criação de rota para Editar o usuário (Back-end) :large_blue_circle:
- Criação de rota para Deletar o usuário (Back-end) :large_blue_circle:
- Ajustes na Profile Page para suportar a edição e exclusão simples (Front-end) :large_blue_circle:


### Demonstração dos resultados:

Com o avanço desta Sprint, podemos realizar o fluxo inteiro do projeto voltado para a conta de usuário, desde o cadastro, visualização dos seus dados pessoais de forma criptografada, edição de algum dado pessoal até a deleção simples de um usuário.

O objetivo do nosso projeto é demonstrar que as informações pessoais estão seguras no banco de dados utilizando das maneiras descritas em lei para anonimiza-lo, porém, também fazer uso das informações de forma segura, para isto, as ferramentas utilizadas para a realização da criptografia dos dados podem ser consultadas no [README](https://github.com/arthurbarbero/DB-LGPD/blob/master/README.md#t%C3%A9cnicas-utilizadas) do projeto, no tópico "Técnicas utilizadas".

**Front-end**

No front-end realizamos a criação de dois botões para conceber as funcionalidades de edição e deleção. Ao clicar em deleção, o usuário será requisitado a responder uma confirmação da sua escolha, caso opte pela deleção, o front-end envia o ID do usuário armazenado no 'localStorage', do momento que realizou o login, para o back-end para realizar sua exclusão do banco de dados

![Deleção](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/delete-Front_Entrega_3.gif)

Para Edição, ao clicar no botão, os campos onde demonstravam os dados dos usuários se tornam editáveis, fazendo com que o usuário possa mudar qualquer tipo de informação pertinente. Os botões também mudam para Salvar e Cancelar e ao clicar em Salvar os dados são criptografados e enviados para o back-end para dar início à atualização das informações.

![Edição](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/Edit-Front_Entrega_3.gif)

**Back-end**

Para o back-end, esta sprint foi endereçada para dar o suporte necessário às duas novas funcionalidades de edição e deleção.

A rota de deleção recebe o ID do usuário e realiza uma pesquisa no MongoDB utilizando o model de usuário criado anteriormente. Utilizando o método 'objects.get()' recebemos o primeiro registro do banco de dados que possui o mesmo ID requisitado, sendo o retorno deste método uma classe contendo as informações do usuário requisitado com várias propriedades e métodos, sendo um destes métodos o 'delete()'. Primeiro deletamos sua referência de endereço armazenada dentro do modelo de usuário e depois o próprio usuário, eliminando todos os dados registrados deste usuário.

![Deleção-back](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/delete-Back_Entrega_4.gif)

Com a edição começamos separando os dados enviados e encriptando com a chave simétrica Back->DB, depois utilizamos o ID enviado junto e pesquisamos no banco o registro de mesmo ID, subscrevemos os dados pelos novos enviados e salvamos no banco.

![Edição-Back](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/Edit-Back_Entrega_4.gif)

### Deploy

Para este projeto foram criadas máquinas AWS para cada frente, back-end, front-end e banco de dados. Em cada uma com sistema operacional Linux e web server Nginx. 
O resultado final com as features mencionadas acima e demais Sprints podem ser conferidas em [SITE](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)

Cada máquina AWS, além de contar com toda a segurança de um dos maiores servidores de Cloud Machine, possui acesso exclusivo via SSH somente com os pares de chaves registrados em cada máquina.


Todos os passos podem ser reproduzidos localmente, seguindo cada passo a passo abaixo:

- [Rodando o Back-end Local](https://github.com/arthurbarbero/DB-LGPD/tree/master/back-end)

- [Arquivos estáticos Front-end](https://github.com/arthurbarbero/DB-LGPD/tree/master/front-end)

- [Criando um MongoDB local](https://github.com/arthurbarbero/DB-LGPD/tree/master/db)
