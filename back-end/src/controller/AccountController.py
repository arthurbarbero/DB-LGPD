from flask import Blueprint, Response, request
from src.model.account import Account as ModelAccount
from src.model.address import Address as ModelAddress
from bson import json_util

bp = Blueprint('account', __name__, url_prefix='/account')

@bp.route('/register', methods=['POST', 'GET'])
def register():

    if request.method == 'POST':
        obj = request.json

        try:
            address = obj.pop("address")
            address = ModelAddress(**address)
            address = address.save()

            obj["address"] = address
            account = ModelAccount(**obj)
            account.save()
            
            return Response(account.to_json(), mimetype="application/json", status=200)

        except Exception as error:
            res = {'Message':'Falha na inserção do usuário', 'error': str(error)}
            return Response(json_util.dumps(res), mimetype='application/json', status=500)

    else:
        return Response('{"error":"Method not allowed, use POST"}', mimetype="application/json", status=404)
    
