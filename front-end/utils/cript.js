const key = 'ThyagoOdoricoAmaLinux'

function encrypt(text) {
    return CryptoJS.AES.encrypt(text, key).toString()
}

function decrypt(text) {
    var bytes  = CryptoJS.AES.decrypt(text, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}