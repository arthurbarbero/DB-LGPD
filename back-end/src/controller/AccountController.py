from flask import Blueprint, Response, request
from bson import json_util

from src.model.account import Account as ModelAccount
from src.model.address import Address as ModelAddress
from src.model.utils.crypto import Crypt

bp = Blueprint('account', __name__, url_prefix='/account')

@bp.route('/register', methods=['POST', 'GET'])
def register():

    if request.method == 'POST':
        crypt_suite = Crypt()
        obj = json_util.loads(crypt_suite.decrypt_front(request.json['data']))
        # Realizar as validações
        try:
            address = obj.pop("address")
            email = obj.pop("email")
            password = obj.pop("password")

            account = crypt_suite.encrypt(json_util.dumps(obj)).decode()
            email = crypt_suite.encrypt(email).decode()
            password = crypt_suite.encrypt(password).decode()

            address = crypt_suite.encrypt(json_util.dumps(address)).decode()

            addressObj = ModelAddress()
            addressObj.data = address
            addressObj = addressObj.save()

            accountObj = ModelAccount()
            accountObj.email = email
            accountObj.password = password
            accountObj.data = account
            accountObj.address = addressObj
            accountObj.save()

            response = crypt_suite.encrypt(str(accountObj.id)).decode()

            return Response(json_util.dumps({"id" : response}), mimetype="application/json", status=200)

        except Exception as error:
            res = {'Message':'Falha na inserção do usuário', 'error': str(error)}
            return Response(json_util.dumps(res), mimetype='application/json', status=500)

    else:
        return Response('{"error":"Method not allowed, use POST"}', mimetype="application/json", status=405)

@bp.route('/login', methods=['POST', 'GET'])
def login():
    
    if request.method == 'POST':
        crypt_suite = Crypt()
        obj = json_util.loads(crypt_suite.decrypt_front(request.json['data']))

        try:
            email = obj.pop("email")
            password = obj.pop("password")

            accountObj = json_util.loads(ModelAccount.objects().only('email', 'password').to_json())

            for account in accountObj:
                account['email'] = crypt_suite.decrypt(account['email']).decode()
                account['password'] = crypt_suite.decrypt(account['password']).decode()

            email_list = list(filter(lambda account: account["email"] == email, accountObj))

            if not email_list:
                return Response('{"Message":"Email não encontrado"}', mimetype="application/json", status=404)

            if email_list[0]['password'] != password:
                return Response('{"Message":"Senha invalida"}', mimetype="application/json", status=404)
            
            response = crypt_suite.encrypt(str(email_list[0]['_id'])).decode()

            return Response(json_util.dumps({"id" : response}), mimetype="application/json", status=200)

        except Exception as error:
            res = {'Message':'Falha ao logar', 'error': str(error)}
            return Response(json_util.dumps(res), mimetype='application/json', status=500)
    
    else:
        return Response('{"error":"Method not allowed, use POST"}', mimetype="application/json", status=405)
