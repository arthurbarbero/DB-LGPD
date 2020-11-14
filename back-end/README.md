# Python - Flask - MongoEngine

## Como iniciar a aplicação:

**Python 3.6.^ recomendado**

- Inicie um ambiente virtual Conda:

Tutorial - [Anaconda](https://www.anaconda.com/products/individual)

OBS.: tenha certeza que está dentro da pasta /back-end

        conda create -n env python=3.6
        conda activate env

- Baixe as bibliotecas:

    - Instale a Lib Pycrypto pelo repositório do Anaconda, seu wheel junto ao repositório pip está quebrado atualmente

    ```
        conda install -c anaconda pycrypto

    ```

    - Instale as demais Lib's
    
    ```
        pip install -r requirements.txt
    ```

- MongoDB Local:
    
    - Crie um database mongo local e crie um usuário:
    
    [Instalando MongoDB Shell - MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
    
    ```
        $ mongo
        > use DadosPessoais
        > db.createUser({
        ...     user: "SeuUsuário",
        ...     pwd: "SuaSenha",
        ...     roles: [ { role: "readWrite", db: "DadosPessoais"}]
        ... })
    
    ```
    
- Vault:

     Para a realização da criptografia por usuário, utilizamos um banco local criptografado utilizando a aplicação [*Vault*](https://www.vaultproject.io/).
     Vault é uma infraestrutura segura e dinâmica atravez de ambientes, essa ferramenta tem como objetivo fazer um armazenamento inteligente de “segredos”, podem ser eles, chaves de ssh, dados de acesso a um banco e dados, api tokens e assim por diante.

    - [Instalar Vault](https://learn.hashicorp.com/tutorials/vault/getting-started-install?in=vault/getting-started):
        
        Dentro do link acima há formas de instalação para a maioria dos sistemas operacionais, segue abaixo para Linux-Ubuntu:
        
    ```
        $ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
        $ sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
        $ sudo apt-get update && sudo apt-get install vault        
    ```
        
    - Criando o arquivo de configuração ``config.hcl``:
    
    ```
        storage "raft" {
          path    = "./vault/data"
          node_id = "node1"
        }

        listener "tcp" {
          address     = "127.0.0.1:8200"
          tls_disable = 1
        }

        api_addr = "http://127.0.0.1:8200"
        cluster_addr = "https://127.0.0.1:8201"
        ui = true
    ```
    
    - Crie a pasta informada no arquivo de configuração onde serão armazenados os segredos localmente e inicie o servidor:
    
    ```
        $ mkdir -p vault/data
        $ vault server -config=config.hcl

                ==> Vault server configuration:

                     Api Address: http://127.0.0.1:8200
                             Cgo: disabled
                 Cluster Address: https://127.0.0.1:8201
                      Go Version: go1.14.4
                      Listener 1: tcp (addr: "127.0.0.1:8200", cluster address: "127.0.0.1:8201", max_request_duration: "1m30s", max_request_size: "33554432", tls: "disabled")
                       Log Level: info
                           Mlock: supported: true, enabled: true
                   Recovery Mode: false
                         Storage: raft (HA available)
                         Version: Vault v1.5.0

                ==> Vault server started! Log data will stream in below:
    ```
    
    O servidor rodando funciona como um cofre com três senhas, após colocar as três senhas o cofre se abre e permite as ações para salvar chaves e recuperar chaves, para iniciar o servidor rode os seguintes comandos:
    
    - Operador Vault:
    
    ```
        $ vault operator init

                Unseal Key 1: 4jYbl2CBIv6SpkKj6Hos9iD32k5RfGkLzlosrrq/JgOm
                Unseal Key 2: B05G1DRtfYckFV5BbdBvXq0wkK5HFqB9g2jcDmNfTQiS
                Unseal Key 3: Arig0N9rN9ezkTRo7qTB7gsIZDaonOcc53EHo83F5chA
                Unseal Key 4: 0cZE0C/gEk3YHaKjIWxhyyfs8REhqkRW/CSXTnmTilv+
                Unseal Key 5: fYhZOseRgzxmJCmIqUdxEm9C3jB5Q27AowER9w4FC2Ck

                Initial Root Token: s.KkNJYWF5g0pomcCLEmDdOVCW

                Vault initialized with 5 key shares and a key threshold of 3. Please securely
                distribute the key shares printed above. When the Vault is re-sealed,
                restarted, or stopped, you must supply at least 3 of these keys to unseal it
                before it can start servicin...
        
        $ export VAULT_ADDR='http://127.0.0.1:8200'
        $ export VAULT_TOKEN='s.KkNJYWF5g0pomcCLEmDdOVCW'
        
        $ vault operator unseal 4jYbl2CBIv6SpkKj6Hos9iD32k5RfGkLzlosrrq/JgOm
        $ vault operator unseal B05G1DRtfYckFV5BbdBvXq0wkK5HFqB9g2jcDmNfTQiS
        $ vault operator unseal Arig0N9rN9ezkTRo7qTB7gsIZDaonOcc53EHo83F5chA
        
        $ vault secrets enable -version=1 -path=secret kv
    ```
    
    - Crie um arquivo chamado '.env' na pasta back-end e edite conforme o arquivo .env-example e adicione as credênciais criadas nos passos acima para que a aplicação se conecte ao Vault:
           
    ```
        MONGO_DATABASE=DadosPessoais
        MONGO_HOST=mongodb://localhost
        MONGO_PORT=27017
        MONGO_USERNAME=SeuUsuário
        MONGO_PASSWORD=SuaSenha

        CRYPT_KEY_FRONT="senha"
        
        KEY1=4jYbl2CBIv6SpkKj6Hos9iD32k5RfGkLzlosrrq/JgOm
        KEY2=B05G1DRtfYckFV5BbdBvXq0wkK5HFqB9g2jcDmNfTQiS
        KEY3=Arig0N9rN9ezkTRo7qTB7gsIZDaonOcc53EHo83F5chA
        TOKEN=s.KkNJYWF5g0pomcCLEmDdOVCW
    ```

- Rode a aplicação utilizando o comando:

    ```
        python wsgi.py
    ```

Acesse o Ip informado ou faça chamadas em seu utilitário de requisições preferido
