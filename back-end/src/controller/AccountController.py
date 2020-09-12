from flask import Blueprint, Response, request
from config.db import DBConnect
from bson import json_util

bp = Blueprint('account', __name__, url_prefix='/account')

@bp.route('/register', methods=['POST', 'GET'])
def register():
    mongo = DBConnect.getDB()

    if request.method == 'POST':
        obj = request.json


        registro = mongo.db.dadospessoais.insert_one(obj)

        return Response(json_util.dumps(registro.inserted_id), mimetype="application/json", status=200)
    else:
        return Response('{"error":"Method not allowed, use POST"', mimetype="application/json", status=404)
    
