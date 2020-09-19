from flask import Blueprint, Response, request
from src.model.account import Account as ModelAccount
from bson import json_util

bp = Blueprint('account', __name__, url_prefix='/account')

@bp.route('/register', methods=['POST', 'GET'])
def register():

    if request.method == 'POST':
        obj = request.json

        try:
            account = ModelAccount(**obj)
            return Response(account.to_json(), mimetype="application/json", status=200)

        except Exception as error:
            return Response('{"error":"Falha na inserção do usuário"} ', mimetype='application/json', status=500)

    else:
        return Response('{"error":"Method not allowed, use POST"}', mimetype="application/json", status=404)
    
