from flask import Flask
from dotenv import load_dotenv, find_dotenv
from werkzeug.middleware.proxy_fix import ProxyFix

from src.controller import AccountController

load_dotenv(find_dotenv())

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)

app.register_blueprint(AccountController.bp)

