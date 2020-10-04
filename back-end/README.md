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
        pip install -r requirements.txt

    ```

    - Instale as demais Lib's
    
    ```
        pip install -r requirements.txt
    ```

- Se atente ao arquivo *.env*
    
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
    
    - Crie um arquivo chamado '.env' na pasta back-end e edite conforme o arquivo .env-example:
           
    ```
        MONGO_DATABASE=DadosPessoais
        MONGO_HOST=mongodb://localhost
        MONGO_PORT=27017
        MONGO_USERNAME=SeuUsuário
        MONGO_PASSWORD=SuaSenha

        CRYPT_KEY_FRONT="senha"
        CRYPT_KEY_BACK="senha"
    ```

- Rode a aplicação utilizando o utilitário gunicorn:
    ```
        python wsgi.py
    ```

Acesse o Ip informado ou faça chamadas em seu utilitário de requisições preferido
