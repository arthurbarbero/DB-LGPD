# DB-LGPD

## Membros: :memo:
- Arthur Barbero;
- Érica dos Santos Moreira da Rosa;
- Felippe Alves;
- Gabriel Augusto Landim;
- José Vinicius Ferreira Santana;
- Nayara Lorrane Santos Silveira;
- Thyago Odorico Garcia.

# Objetivos: :dart:

Projeto designado à matéria de Segurança da Informação, lecionado pelo professor Eduardo Sakaue, trouxe consigo o desafio de implementar uma solução para tópicos abordados na Lei Geral de Proteção de Dados (LGPD), sendo assim estipulamos algumas dificuldades e chegamos a um tópico no qual apresentaremos seu conceito.

A Lei Geral de proteção de Dados, de caráter Multidisciplinar e extraterritorial, é a legislação que regula a coleta, armazenamento, tratamento e compartilhamento de dados pessoais, impondo um padrão mais elevado de proteção e penalidades significativas para o não cumprimento da norma. Ela é um marco legal de grande impacto, englobando instituições públicas e privadas.

Essa lei surge com a finalidade de proteger direitos fundamentais, como:

- Privacidade;
- Autodeterminação informativa;
- Liberdade de expressão, de informação, de comunicação e de opinião;
- Inviolabilidade da intimidade da honra e da imagem;
- Desenvolvimento econômico, tecnológico e a inovação;
- A livre iniciativa, a livre concorrência e a defesa do consumidor;
- Direitos humanos: o livre desenvolvimento da personalidade, dignidade e o exercício da cidadania pelas pessoas naturais.

Para mais informações sobre a lei e tópicos deste trabalho, acessar o arquivo [Info.md :book:](/Info.md) 

Resolução
----------------
Dado o contexto acima, desenvolveremos uma aplicação simples com um CRUD (Create, Read, Update, Delete) com acesso a Bancos de dados voltada à resolver problemas de anonimização de uma aplicação de vendas online fictícia.

Para isto contaremos com a seguinte estrutura:

![Esboço](/images/esboço.png)

Segundo a LGPD, a anonimização é atingida quando um dado relativo ao titular não possa ser identificado direta ou indiretamente, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento, sendo assim, sabemos que a total anonimização não traz nenhum benefício para a empresa em si, mas enquanto este dado estiver criptografado de maneira na qual os meios técnicos razoáveis forem aplicaveis, este dado é considerado seguro.

Para nossos exemplos abaixo, existem partes importantes do processo na qual o dado é tratado e passam a ser dados pessoais novamente, tanto na captação do dado como em sua validação, trazendo os maiores perigos deste problema em suas etapas de validação e armazenamento. 

Quando o dado é anonimizado mas é dada a possibilidade de voltar a sua forma original, visto as funcionalidades da aplicação, isto é considerado como pseudonimização, também retratado como válido desde que sejam cumpridas os demais artigos da Lei. 

Por tanto, utilizaremos as formas de pseudonimização onde somente manipulamos os dados no Back-end, trazendo formas seguras de conexão ao Banco de dados pessoais e mantendo a criptografia dos dados em todas as etapas de transferência entre aplicações. O Backlog abaixo demonstra os processos que realizaremos para a criação deste projeto:


## [Front-end: :computer:](https://github.com/arthurbarbero/DB-LGPD/master/front-end/)

  Criaremos uma interface básica utilizando as bases do desenvolvimento front-end, HTML, CSS e JavaScript, contendo as  seguintes funcionalidades:
  
###  - Cadastro;
  
  Este cadastro irá simular a interação de um cliente que queria ter acesso ao site para realizar suas compras, para que então, de forma segura e encriptada, estes dados serão enviados para o back-end e assim suas demais funcionalidades de login e perfil possam ser acessadas
  
###  - Login;
  
  Com o cadastro finalizado, o usuário poderá realizar o login de forma segura onde seus dados armazenados em browser estão sendo utilizados apenas para os fins respeitados pelas políticas de privacidade estipuladas pela aplicação e encriptadas, além de poder acessar outras áreas do site.
  
###  - Perfil;
  
  Após logar-se, a página de perfil pessoal demonstra quais dados estão sendo utilizados pela aplicação de forma transparente.
  
###  - Página de privacidade.
  
  Em toda a aplicação, será disponibilizada parte reservada para as políticas de privacidade contando de forma transparente a finalidade dos dados que persistimos em nossos bancos de dados.
  
  
## [Back-end: :page_with_curl:](https://github.com/arthurbarbero/DB-LGPD/master/back-end)
  
  Com a captação de dados vinda do front-end, a aplicação rest em python utilizando a framework Flask nos dará as funcionalidades necessárias para realizar as validações e comunicações com os Bancos de Dados de forma segura e concisa com base nas seguintes rotas:
  
###  - Rota de cadastro;

  Para completarmos o ciclo do cadastro, receberemos os dados da etapa do cadastro do front-end e realizaremos as devidas validações, protegendo contra ataques e informações maliciosas, assim realizaremos a criptografia dos dados e inserimos no respectivo Banco de Dados;
    
###  - Rota de Login;

  Quando do acesso do cliente à aplicação, o back-end realizará a validação da existência do usuário ao Banco de dados, com todas as seguranças necessárias;
  
###  - Rota de Esclusão;

  A pedido do usuário, o back-end realizará a exclusão permanente dos dados em posse referente ao cliente, lembrando que neste quesito não abordaremos todos os riscos que uma empresa necessitaria para realizar as devidas exclusões atendendo todos os tópicos da LGPD que abordam a deleção de dados pessoais, somente uma forma de exclusão simples;
  
  
## [Banco de dados: :books:](https://github.com/arthurbarbero/DB-LGPD/master/bd)
  
  Moldado às necessidades acima, realizaremos a criação de um banco de dados exclusivo para o tratamento de dados pessoais. Além de serem armazenados somente dados criptografados, o acesso ao banco também será protegido via chaves SSH, permitindo apenas que a aplicação do Back-end realize leituras e escreva neste banco de dados.
  
###  - Criação do banco:
  
  Utilizaremos de um banco não relacional mongo com as devidas configurações básicas de tunelamento via SSH.
  
  
####  Para mais detalhes de como iniciar cada serviço separadamente, clique nos tópicos acima ou navegue pelas pastas deste repositório.
