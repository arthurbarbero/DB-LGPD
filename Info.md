# Definições:
## Dado Pessoal:
Informação relacionada à pessoa natural identificada ou identificável, pode incluir dados de localização, placas de automóvel, perfis de compras, número do Internet Protocol (IP), histórico de compras, dados biométricos entre outros. Sempre relacionado à pessoa viva. De caráter físico ou digital.


- Titular: Usuário, pessoa física que tem os dados protegidos pela lei.
- Controlador: Empresa que faz e se utiliza do tratamento de dados.
- Operador: Age em nome do controlador.
- DPO (Encarregado de proteção de dados): Aquele que fará intermediação entre o titular do dado, o controlado e a autoridade nacional de dados.
- ANPD (Autoridade nacional de proteção aos dados): Fiscaliza o cumprimento da lei e elabora diretrizes para a Política de Proteção de Dados Pessoais e Privacidade.


## Objetivos:

Os objetivos principais da LGPD é garantir que os indivíduos tenham controle sobre seus dados pessoais, garantindo aos titulares amplos direitos, entre eles:

- Informação e acesso aos dados;
- Retificação de dados incompletos, inexatos ou desatualizados,
- Anonimização;
- Bloqueio ou eliminação de dados desnecessários,
- Cancelamento e oposição;
- Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa e resguardados os segredos comerciais e industriais;
- Revogação de consentimento.


A legislação abrange toda operação realizada com algum tipo de manuseio de dados pessoais, como:

- Coleta, produção, recepção, classificação, utilização, acesso, reprodução,
- Transmissão, distribuição, processamento, arquivamento, armazenamento
- Edição, eliminação, avaliação ou controle de informação, modificação
- Comunicação, transferência, difusão ou extração.

Além disso, existem regras específicas para tratar dos seguintes dados:

- Dados sensíveis (dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico)
- Transferência internacional de dados (permitido pela lei, por meio de adoção de selos, certificados e códigos de conduta regularmente emitidos e autorizados pela Autoridade Nacional)
- A utilização dados de crianças e adolescentes.

## Resolução

Dado o contexto acima, desenvolveremos uma aplicação simples com um CRUD (Create, Read, Update, Delete) com acesso a um Banco de dados.
Iremos simular uma empresa de vendas online, sendo assim precisaremos  responder as seguintes perguntas:

- **Quais são os dados que eu coleto? De qual categoria de pessoas?**
Nome, Sobrenome, Data de nascimento, CPF, Endereço de entrega, telefone/celular, e-mail, senha.

- **Esse dado é essencial?**
Sim

- **Qual será a hipótese legal para o tratamento?**
Iremos respeitar as todas as hipóteses legais, observando os principais para o ramo escolhido, abaixo:

Art. 7º da LGPD lei 13709:
O tratamento de dados pessoais somente poderá ser realizado nas seguintes hipóteses:
I - mediante o fornecimento de consentimento pelo titular;
Ao finalizar o cadastro, requisitaremos ao titular que aceite e consinta na disponibilização dos dados para apenas as finalidades de contrato de compra e venda de produtos. 

V - quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados;
A cada compra, a pedido do titular, utilizaremos dos dados 'inputados' para utilização da finalização da compra, envio e etc.

Art. 8º 
 § 4º O consentimento deverá referir-se a finalidades determinadas, e as autorizações genéricas para o tratamento de dados pessoais serão nulas.
§ 5º O consentimento pode ser revogado a qualquer momento mediante manifestação expressa do titular, por procedimento gratuito e facilitado, ratificados os tratamentos realizados sob amparo do consentimento anteriormente manifestado enquanto não houver requerimento de eliminação, nos termos do inciso VI do caput do art. 18 desta Lei.
§ 6º Em caso de alteração de informação referida nos incisos I, II, III ou V do art. 9º desta Lei, o controlador deverá informar ao titular, com destaque de forma específica do teor das alterações, podendo o titular, nos casos em que o seu consentimento é exigido, revogá-lo caso discorde da alteração.

Art. 9º O titular tem direito ao acesso facilitado às informações sobre o tratamento de seus dados, que deverão ser disponibilizadas de forma clara, adequada e ostensiva acerca de, entre outras características previstas em regulamentação para o atendimento do princípio do livre acesso:

I - finalidade específica do tratamento;

II - forma e duração do tratamento, observados os segredos comercial e industrial;

III - identificação do controlador;

IV - informações de contato do controlador;

V - informações acerca do uso compartilhado de dados pelo controlador e a finalidade;

VI - responsabilidades dos agentes que realizarão o tratamento; e

VII - direitos do titular, com menção explícita aos direitos contidos no art. 18 desta Lei.

Art. 15. O término do tratamento de dados pessoais ocorrerá nas seguintes hipóteses:

I - verificação de que a finalidade foi alcançada ou de que os dados deixaram de ser necessários ou pertinentes ao alcance da finalidade específica almejada;

II - fim do período de tratamento;

III - comunicação do titular, inclusive no exercício de seu direito de revogação do consentimento conforme disposto no § 5º do art. 8º desta Lei, resguardado o interesse público; ou

IV - determinação da autoridade nacional, quando houver violação ao disposto nesta Lei.

- **Ele precisa ser guardado? Em qual local?**
Será guardado em banco de dados separado do banco de dados do ramo principal de atuação, anonimizado e de comunicação excepcional entre API e bancos, por meio de criptografia e chaves de acesso SSH entre máquinas.

- **Por que ele precisa ser guardado?**
Os dados serão guardados com finalidade única e exclusiva para a concretização dos contratos de compra e venda de produtos ofertados em site.

- **Por quanto tempo ele precisa/pode ser armazenado?**
Não existe lei que expresse uma quantidade minima ou máxima referente 
 ao armazenamento dos dados pessoais, somente menção ao armazenamento mínimo de 6 meses do acesso pelo IP do Titular em questão, registrado no Art.  15 da lei 12965 (Marco Cívil da Internet). 
O Art. 40. da Lei da LGPD dispõe que autoridade nacional poderá dispor sobre padrões de interoperabilidade para fins de portabilidade, livre acesso aos dados e segurança, assim como sobre o tempo de guarda dos registros, tendo em vista especialmente a necessidade e a transparência. Ou seja, ainda poderá ser tratados me outras leis e medidas provisórias as disposições exatas sobre o tempo de guarda dos registros.

Sendo assim armazenaremos com um prazo de expiração de 2 anos, ou quando termos e finalidades forem alteradas precedentemente ao prazo de 2 anos.

- **É possível pseudo anonimizá-lo?**
Utilizaremos de criptografia de chave simétrica com o padrão AES para este banco de dados pessoais e de chave assimétrica na comunicação entre API e Banco de dados pessoais. 
Todos os dados de cunho pessoal será criptografado.

- **O dado está sendo duplicado?**
Para este exemplo não

- **Será transferido para país estrangeiro?**
Para este exemplo não


## **Conclusão**

Atacaremos os artigos:
- Art. 7º O tratamento de dados pessoais;
- Art. 8º O consentimento previsto;
- Art. 9º O titular tem direito ao acesso facilitado às informações sobre o tratamento de seus dados;
- Art. 5º incisos: X - tratamento; e XI - anonimização.;
- Art. 46 .Segurança e do Sigilo de Dados;

Para isto:

- Criaremos um Front-End simulando um site de vendas online contendo cadastro e login simples, que se comunicarão com um Back-End de forma criptografada simetricamente no padrão AES, evitando vazamento das informações em seu trajeto, evitando também possíveis vazamentos por interações com ataques 'man-in-the-middle'. 
- O Back-End realizará o cadastro, edição, e deleção em comunicação direta com o Banco de dados pessoais, segregado do Banco de dados da aplicação em si, na qual por meio de uma comunicação via SHH com o Banco, evitando outras formas de conexão com este banco, onde será realizada as demais funcionalidades do Sistema.
- Este Banco de dados pessoais terá somente, no que tange aos dados pessoais, dados criptografados e sem identificação direta ou indireta com as reais pessoas, trazendo assim uma segurança maior no caso de um vazamento de informações


## Bibliografias:
http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm
https://blog.starti.com.br/lgpd/
