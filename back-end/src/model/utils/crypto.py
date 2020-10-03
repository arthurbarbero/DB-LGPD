import os
import base64
from Crypto import Random
from Crypto.Cipher import AES 

class Crypt:

    def __init__(self):
        self.key_front = os.getenv('CRYPT_KEY_FRONT').encode()
        self.key_back = os.getenv('CRYPT_KEY_BACK').encode()
        self.block_size = 16
    
    def pad(self, data):
        length = self.block_size - (len(data) % self.block_size)
        return data + chr(length)*length

    def unpad(self, data):
        return data[:-ord(chr(data[-1]))]
    
    def encrypt(self, message):
        IV = Random.new().read(self.block_size)
        aes = AES.new(self.key_back, AES.MODE_CBC, IV)
        return base64.b64encode(IV + aes.encrypt(self.pad(message)))

    def decrypt_front(self, encrypted):
        encrypted = base64.b64decode(encrypted)
        IV = encrypted[:self.block_size]
        aes = AES.new(self.key_front, AES.MODE_CBC, IV)
        return self.unpad(aes.decrypt(encrypted[self.block_size:]))

    def encrypt_front(self, message):
        IV = Random.new().read(self.block_size)
        aes = AES.new(self.key_front, AES.MODE_CBC, IV)
        return base64.b64encode(IV + aes.encrypt(self.pad(message)))  

    def decrypt(self, encrypted):
        encrypted = base64.b64decode(encrypted)
        IV = encrypted[:self.block_size]
        aes = AES.new(self.key_back, AES.MODE_CBC, IV)
        return self.unpad(aes.decrypt(encrypted[self.block_size:]))