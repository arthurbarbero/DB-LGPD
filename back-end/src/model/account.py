from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField, ReferenceField, IntField

from src.model.utils.validations.Validator import not_empty, string_validator
from src.model.address import Address

class Account(Document):

    nome = StringField(max_length=100, validation=[not_empty, string_validator])
    sobrenome = StringField(max_length=100)
    email = EmailField(required=True, unique=True)
    senha = StringField(max_length=100)
    dt_nasc = DateTimeField()
    endereço = ReferenceField(Address)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
