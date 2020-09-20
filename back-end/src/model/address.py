
from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField, ReferenceField, IntField

from src.model.utils.validations import Validator

class Address(Document):
    number = IntField()
    zip_code = StringField(max_length=100)
    city = StringField(max_length=100)
    state = StringField(max_length=100)
    