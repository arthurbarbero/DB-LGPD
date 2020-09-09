from flask import Blueprint, Response
from config.db import DBConnect
from bson import json_util

bp = Blueprint('teste', __name__, url_prefix='/teste')

@bp.route('/')
def teste():
    mongo = DBConnect.getDB()
    texto = json_util.dumps(mongo.db.dadospessoais.find_one())
    return Response(texto, mimetype="application/json")
