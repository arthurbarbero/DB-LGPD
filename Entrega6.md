### Sprint 6 - 16/11 A 29/11:

Reservada para possíveis consertos e criação da apresentação final. :large_blue_circle: :heavy_check_mark:
- Criação do vídeo para a apresentação final. 
- Exemplificação sobre a criptografia utilizada. 


### Demonstração dos resultados:

Criação do vídeo :heavy_check_mark: 
[Link](https://www.dropbox.com/s/amrrjhbxaibck2m/5ADSArthurBarbero.mp4?dl=0)


Seção de Técnicas utilizadas foi melhorada com paragrafos de comparação entre outras criptografias e métodos de operação utilizados.

Técnicas utilizadas
------------
Dada a resolução do problema, decidimos implementar um algoritmo  de criptografia simétrica simples que resolve a questão do armazenamento seguro de informações pessoais de forma anonimizada. Ao se cadastrar no site, para cada usuário é criada uma chave simétrica simples e é armazenada dentro de um banco de dados de chaves criptografadas, separado do banco de dados pessoais.

Para isto utilizaremos a criptografia do padrão AES (Advanced Encryption System), utilizando uma senha com um tamanho de 256 bits e o método de criptografia em bloco no modelo CBC (Cypher Block Chaining). Também utilizamos o serviço [Vault](https://www.vaultproject.io/) para o armazenamento destas chaves para cada usuário.
 
 - AES
 
 
  O algoritmo foi criado por Vincent Rijmen e Joan Daemen, primeiramente com o nome de Rijndael, vencendo o concurso do NIST (National Institute of Standards and Technology) em 1997, que passaria a se chamar AES, o mesmo atendeu a todas as exigências do concurso sendo o melhor em segurança, flexibilidade, bom desempenho em softwares e hardwares.
  
  Dentre as criptografias mais conhecidas, optamos por se utilizar da AES pelo fato de estar entre as maiores criptografias de blocos, podendo-se utilizar de chaves de até 256 bits. Entre os concorrentes mais conhecidos temos o DES que é muito velho e ja está praticamente mapeado, o 3DES que é uma implementação de DES em cascata, criando três instâncias do DES com chaves distintas, mas se prova um algorítmo muito lento em comparação as outras. Blowfish é um algorítmo que concorreu no mesmo concurso em que o AES foi vencedor, se destaca pela sua rapidez porém o tamanho dos blocos são de apenas 64 bits. 
  
  
 - Método CBC (Cypher Block Chaining)
 
  Dentre os métodos de criptografia AES, utilzamos o método CBC por ser o mais confiável e aleatório possível. Métodos como o BCE (Eletronic Codebook), utilizam apenas a chave para a realização da criptografia, tornando a criptografia de um mesmo dado, se realizado duas vezes, idênticos entre si. O método CFB (Cipher feedback) utiliza-se de um bloco de inicialização, trazendo uma aleatoriedade ao processo, porém, expõe o conteudo a ser cifrado.
 
  Antes de aprofundarmos no método, primeiramente devemos entender o conceito de bloco IV.
  
  
   - IV - Vetor de Inicialização:
     O vetor de inicialização pode ser entendido como um “bloco falso”, utilizado no início do processo de cifragem, gerando aleatoriedade no sistema.


   - Método:
     O método CBC consiste na criptografia de cada bloco de plaintext junto com o bloco cifrado anterior, antes dele ser criptografado. Com isso os blocos futuros são dependentes dos blocos anteriores. Com IV aleatório em cada cifragem, é possível manter a aleatoriedade do ciphertext mesmo com um plaintext igual.

     ![Método_CBC](https://github.com/arthurbarbero/DB-LGPD/raw/master/images/aes-Algoritmo-CBC.png)
      
A utilização do método CBC foi escolhida entre as demais por ser a melhor em questão de aleatoriedade. Mesmo que passemos o bloco IV no início de sua criptografia, sendo este gerado de maneira aleatória, conseguimos cifras diferentes para um mesmo registro, pelo uso de criptografias passadas conforme na imagem.

- Vault
  
  Aplicação que oferece uma interface via linha de comandos e via requisição http para armazenamento de ``chave=valor`` de forma criptografada. Ela é responsável por vincular ao ID de registro do usuário cadastrado a chave gerada aleatóriamente, utilizada no processo de encriptação do usuário, fazendo a chave=valor ``id=crypt_key``, para que posteriomente quando o back-end necessite visualizar os dados, possa pegar a chave pelo id do usuário.
  
 
 ### Deploy

Para este projeto foram criadas máquinas AWS para cada frente, back-end, front-end e banco de dados. Em cada uma com sistema operacional Linux e web server Nginx. 
O resultado final com as features mencionadas acima e demais Sprints podem ser conferidas em [SITE](http://ec2-18-229-143-134.sa-east-1.compute.amazonaws.com/)

Cada máquina AWS, além de contar com toda a segurança de um dos maiores servidores de Cloud Machine, possui acesso exclusivo via SSH somente com os pares de chaves registrados em cada máquina.


Todos os passos podem ser reproduzidos localmente, seguindo cada passo a passo abaixo:

- [Rodando o Back-end Local](https://github.com/arthurbarbero/DB-LGPD/tree/master/back-end)

- [Arquivos estáticos Front-end](https://github.com/arthurbarbero/DB-LGPD/tree/master/front-end)

- [Criando um MongoDB local](https://github.com/arthurbarbero/DB-LGPD/tree/master/db)
  
