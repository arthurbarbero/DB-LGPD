import os
from flask import current_app as api , make_response
from werkzeug.wrappers import Response
from flask_pymongo import PyMongo

class DBConnect:
    def __call__(self, environ, start_response):
        try:
            return self.app(environ, start_response)

        except Exception as error:
            res = Response('Connection to mongo failed', mimetype='text/plain', status=501)
            return res(environ, start_response)
    
    def getDB():
        try:
            api.config["MONGO_URI"] = "mongodb://localhost:27017/pessoais"
            db = PyMongo(api)
            return db

        except Exception as error:
            res = Response('Connection to mongo failed', mimetype='text/plain', status=501)
            return make_response(res)