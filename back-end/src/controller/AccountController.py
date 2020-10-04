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

            account = crypt_suite.encrypt(json_util.dumps(obj)).decode()

            address = crypt_suite.encrypt(json_util.dumps(address)).decode()

            addressObj = ModelAddress()
            addressObj.data = address
            addressObj = addressObj.save()

            accountObj = ModelAccount()
            accountObj.data = account
            accountObj.address = addressObj
            accountObj.save()

            response = crypt_suite.encrypt(str(accountObj.id)).decode()

            return Response(json_util.dumps({"id" : response}), mimetype="application/json", status=200)

        except Exception as error:
            res = {'Message':'Falha na inserção do usuário', 'error': str(error)}
            return Response(json_util.dumps(res), mimetype='application/json', status=500)

    else:
        return Response('{"error":"Method not allowed, use POST"}', mimetype="application/json", status=404)
