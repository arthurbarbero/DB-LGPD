from flask import Flask
from dotenv import load_dotenv, find_dotenv
from werkzeug.middleware.proxy_fix import ProxyFix

from config.db import DBConnect
from src.controller import AccountController

load_dotenv(find_dotenv())

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello'

app.wsgi_app = DBConnect(app.wsgi_app)
app.wsgi_app = ProxyFix(app.wsgi_app)

app.register_blueprint(AccountController.bp)

