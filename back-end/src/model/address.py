
from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField, ReferenceField, IntField

from src.model.utils.validations import Validator

class Address(Document):
    data = StringField()
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
    