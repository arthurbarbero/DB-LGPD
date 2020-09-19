
from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField, ReferenceField, IntField

from src.model.utils.validations.Validator import not_empty

class Address(Document):
    numero = IntField()
    cep = StringField(max_length=100)
    cidade = StringField(max_length=100)
    estado = StringField(max_length=100)