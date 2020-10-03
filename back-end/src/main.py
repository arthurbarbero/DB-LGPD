from flask import Flask
from dotenv import load_dotenv, find_dotenv
from werkzeug.middleware.proxy_fix import ProxyFix
from flask_cors import CORS
from config.db import DBConnect
from src.controller import AccountController

load_dotenv(find_dotenv())

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello'

app.wsgi_app = DBConnect(app.wsgi_app)
app.wsgi_app = ProxyFix(app.wsgi_app)
CORS(app)
app.register_blueprint(AccountController.bp)
