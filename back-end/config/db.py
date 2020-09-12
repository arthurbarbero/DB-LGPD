import os
from flask import current_app as app , make_response
from werkzeug.wrappers import Response
from flask_pymongo import PyMongo

class DBConnect:
        
    def getDB():
        try:
            app.config["MONGO_URI"] = "mongodb://localhost:27017/pessoais"
            db = PyMongo(app)
            return db

        except Exception as error:
            res = Response('Connection to mongo failed', mimetype='text/plain', status=501)
            return make_response(res)