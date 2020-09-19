from datetime import datetime

from mongoengine import Document, EmailField, StringField, BooleanField, DateTimeField


class Account(Document):
    email = EmailField(required=True, unique=True)
    name = StringField(max_length=100)
    activate = BooleanField(default=True)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
