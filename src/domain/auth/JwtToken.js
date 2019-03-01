const base64url = require('base64url');
const CryptoJS = require('crypto-js')

export function CreateToken(data) {
  let secret = "mysupersecret";
  var header = {
    alg: "HS256",
    typ: "JWT"
  };
  header = JSON.stringify(header)
  var payload = {
    id: "1",
    expires: new Date(2030,10,10)
  };
  payload = JSON.stringify(payload)
  let unsignedToken = base64url(header) + "." + base64url(payload);
  return unsignedToken + "." + base64url.toBase64(CryptoJS.HmacSHA256(unsignedToken, secret));
}
