### Sprint 5 - 02/11 A 15/11:

- Implementação de chave de criptografia por usuário (Back-end) :red_circle:
  
  - Para tornar a criptografia entre o back-end e o banco de dados pessoais mais forte e segura, foi requisitado que fosse implementado algum tipo de chaves simétricas únicas por usuário. Utilizamos do serviço **Vault** para o armazenamento das mesmas.
  
- Finalização da página privacy-page (Front-end) :large_blue_circle:


### Demonstração dos resultados:

Nesta Sprint tivemos um grande avanço na criptografia, no interim entre a Sprint anterior tivemos dicas para melhorar a segurança da aplicação e entre elas selecionamos a que mais se alinhava aos nossos objetivos de anonimização, tendo em vista o tempo até a entrega do projeto implementamos uma maneira de gerar aleatoriedade a chave simétrica por usuário.

  - **Criptografia**
    
    Até então utilizamos a mesma chave simétrica que estava armazenada em um arquivo não versionado na raiz do projeto, ``.env``, mas isto traz uma insegurança à aplciação pois caso um algorítmo de força bruta alcance a chave da criptografia utilizada, ele tera acesso a todos os dados do banco de dados.
    
    Sendo assim, adicionamos aleatoriedade a chave utilizada para cada usuário criado, e para não guardarmos o segredo dentro do mesmo banco de dados, utilizamos de um serviço chamado **Vault**, que será responsável por armazenar a criptografia no formato ``user_id=key``, onde o ``user_id`` é um objeto da classe ``ObjectId``, único e obrigatório para cada registro no banco MongoDB, e a ``key`` sendo a chave aleatória usada na cifra dos dados pessoais do usuário.
    
    Os dados salvos no **Vault** podem ser recuperados pelo ``user_id`` cadastrado, porém, o **Vault** é um serviço de armazenamento criptografado no qual funciona via linha de comando ou requisições http, para ter acesso ao serviço é necessário "abri-lo" utilizando três chaves armazenadas no arquivo ``.env`` e assim acessar o a rota específica com o Id do usuário para resgatar a chave utilizada na criptografia.
    
    Este processo é inteiramente local e não pode ser acessado via http por outros computadores via rede.
    
    Para subir o serviço ou conhecer mais sobre o serviço, [Clique aqui!](https://github.com/arthurbarbero/DB-LGPD/blob/crypt_by_user/back-end/README.md)

  - **Registro do usuário**
    
    Após o usuário realizar o cadastro, seus dados vão para a rota ``/register`` e iniciam o método ``encrypt_init`` da classe ``Crypt``. Este método é responsável por vincular o id criado à chave de encriptação criada.
    
    ![Register-Entrega](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/Register-Entrega5.gif)
    
  - **Logando / my profile**
    
    Quando logado, enviamos o id do usuário para realizar as buscas no banco de dados e assim com o id em mãos, resgatamos do **Vault** a sua cifra e deciframos os dados para devolver os dados ao Front.
    
    ![GetUser-Entrega](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/GetUser-Entrega5.gif)
    
        
    ### Deploy

Para este projeto foram criadas máquinas AWS para cada frente, back-end, front-end e banco de dados. Em cada uma com sistema operacional Linux e web server Nginx. 
O resultado final com as features mencionadas acima e demais Sprints podem ser conferidas em [SITE](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)

Cada máquina AWS, além de contar com toda a segurança de um dos maiores servidores de Cloud Machine, possui acesso exclusivo via SSH somente com os pares de chaves registrados em cada máquina.


Todos os passos podem ser reproduzidos localmente, seguindo cada passo a passo abaixo:

- [Rodando o Back-end Local](https://github.com/arthurbarbero/DB-LGPD/tree/master/back-end)

- [Arquivos estáticos Front-end](https://github.com/arthurbarbero/DB-LGPD/tree/master/front-end)

- [Criando um MongoDB local](https://github.com/arthurbarbero/DB-LGPD/tree/master/db)
  
