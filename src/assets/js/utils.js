import CryptoJS from 'crypto-js'
export default {
    encrypt (word, keyStr) {
        keyStr = keyStr || 'aimlink@gangqianga@advantech';
        let key = CryptoJS.enc.Latin1.parse(keyStr);// Latin1 w8m31+Yy/Nw6thPsMpO5fg==
        let iv = CryptoJS.enc.Latin1.parse(keyStr);
        let encrypted = CryptoJS.AES.encrypt(word, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding,
        });

        return encrypted.toString();
    },

    decrypt (word, keyStr) {
        keyStr = keyStr || 'aimlink@gangqianga@advantech';
        let key = CryptoJS.enc.Latin1.parse(keyStr);// Latin1 w8m31+Yy/Nw6thPsMpO5fg==
        let iv = CryptoJS.enc.Latin1.parse(keyStr);
        try {
            let decrypt = CryptoJS.AES.decrypt(word, key, {
                iv: iv,
                padding: CryptoJS.pad.ZeroPadding,
            });
            return CryptoJS.enc.Latin1.stringify(decrypt).toString();
        } catch (e) {
            return '';
        }
    },

    encryptDes(message, key){
        key = key || 'ahc*5f/8';
        var keyHex = CryptoJS.enc.Latin1.parse(key)
        var ivHex = CryptoJS.enc.Latin1.parse(key)
        var option = { iv: ivHex, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, option)
        return encrypted.toString()
      },
      
      // DES解密
    decryptDes(message, key){
        key = key || 'ahc*5f/8';
        var keyHex = CryptoJS.enc.Latin1.parse(key)
        var ivHex = CryptoJS.enc.Latin1.parse(key)
        var decrypted = CryptoJS.DES.decrypt(
          message,
          keyHex,
          {
            iv: ivHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          }
        )
        return decrypted.toString(CryptoJS.enc.Utf8)
    }
      
};