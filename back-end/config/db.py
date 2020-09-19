import os
from werkzeug.wrappers import Response

from mongoengine import connect


class DBConnect:
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        try:
            connect(
                db=os.getenv('MONGO_DATABASE'),
                host=os.getenv('MONGO_HOST'),
                port=int(os.getenv('MONGO_PORT')) if os.getenv('MONGO_PORT') else None,
                username=os.getenv('MONGO_USERNAME'),
                password=os.getenv('MONGO_PASSWORD'),
            )
            
            print("Connection to mongo succeeded")
            return self.app(environ, start_response)

        except Exception as error:
            res = Response('Connection to mongo failed', mimetype='text/plain', status=501)
            return res(environ, start_response)

            
            