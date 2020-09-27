const key = 'U2FsdGVkX1+h7dM5y1SLpVq/hDcf5ekhjrQDONSkHF50iLTMrL/sRQuxKDQp0sLFSGeG/i+kJACeFcWwDFX1QhDu0swataPmbDAgO2nozmikZNAmFR159xFakr0BfX/wPpHODJGkmYALhITwOS3My/f6qXlCD08v9VKE70SbZrX2uxq8YhAm1EGEluFHBO7bXXuSUvVMn3UtH4QziDGe9CC6smq8hJcl4Hsz0w0mVqZ8S11B9HwPdDxbqpWlpALQMbNrrlA3Qa8bfLTtell+xB3f5EtQ66RgTFY+68tP2FCfQ5NVCiaq6DAFcRpN7cVZwoMwY9nmhBSRvLnujB8kyaA81s7coOu+NXIRBHI3k4PSKgrx+JbkLuCszW7saruR'

function encrypt(text) {
    return CryptoJS.AES.encrypt(text, key).toString()
}

function decrypt(text) {
    return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
}