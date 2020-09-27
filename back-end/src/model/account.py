from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField, ReferenceField, IntField

from src.model.utils.validations import Validator
from src.model.address import Address

class Account(Document):

    name = StringField(max_length=100, required=True, validation=Validator.not_empty)
    last_name = StringField(max_length=100, required=True)
    email = EmailField(required=True, unique=True)
    password = StringField(max_length=100, required=True)
    birth_dt = DateTimeField(required=True)
    address = ReferenceField(Address, required=True)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
