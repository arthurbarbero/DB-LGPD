import os
import base64
from Crypto import Random
from Crypto.Cipher import AES 
from src.model.utils.vault import Commands

class Crypt:

    def __init__(self):
        self.key_front = os.getenv('CRYPT_KEY_FRONT').encode()
        self.key_back = os.getenv('CRYPT_KEY_BACK').encode()
        self.block_size = 16
        self.commands = Commands()
    
    def pad(self, data):
        length = self.block_size - (len(data) % self.block_size)
        return data + chr(length)*length

    def unpad(self, data):
        return data[:-ord(chr(data[-1]))]
    
    def encrypt(self, pk, message):
        IV = Random.new().read(self.block_size)
        key = self.commands.get_secret(pk).encode('latin-1', 'replace')
        aes = AES.new(key, AES.MODE_CBC, IV)
        return base64.b64encode(IV + aes.encrypt(self.pad(message)))

    def encrypt_init(self, pk):
        key = Random.new().read(self.block_size)
        
        self.commands.unseal()
        self.commands.create_secret(pk=pk, key=key)
        self.commands.seal()

    def decrypt_front(self, encrypted):
        encrypted = base64.b64decode(encrypted)
        IV = encrypted[:self.block_size]
        aes = AES.new(self.key_front, AES.MODE_CBC, IV)
        return self.unpad(aes.decrypt(encrypted[self.block_size:]))

    def encrypt_front(self, message):
        IV = Random.new().read(self.block_size)
        aes = AES.new(self.key_front, AES.MODE_CBC, IV)
        return base64.b64encode(IV + aes.encrypt(self.pad(message)))  

    def decrypt(self, pk, encrypted):
        encrypted = base64.b64decode(encrypted)
        IV = encrypted[:self.block_size]
        key = self.commands.get_secret(pk).encode('latin-1', 'replace')
        aes = AES.new(key, AES.MODE_CBC, IV)
        return self.unpad(aes.decrypt(encrypted[self.block_size:]))