from mongoengine import ValidationError

class Validator:
    
    def not_empty(val):
        if not val:
            raise ValidationError('Value can not be empty')