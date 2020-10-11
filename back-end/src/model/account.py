from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField, ReferenceField, IntField

from src.model.utils.validations import Validator
from src.model.address import Address

class Account(Document):

    email = StringField(required=True)
    password = StringField(required=True)
    data = StringField(required=True)
    address = ReferenceField(Address, required=True)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
