var request = require('request');
var fs = require("fs");
//request.debug = true

onResponse = function(err, response, data) {
  console.log(data)
}

options = {
  url: 'https://api.channeladvisor.com/oauth2/token',
  auth: {
    user: '[APPLICATION ID]',
    password: '[SHARED SECRET]'
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  form: {
    client_id: '[APPLICATION ID]',
    scope: 'orders inventory',
    developer_key: '[DEVELOPER KEY]',
    account_id: '[SOAP ACCOUNT ID]',
    password: '[SOAP DEVELOPER PASSWORD]',
    grant_type: 'soap'
  }
};

request.post(options, onResponse).pipe(fs.createWriteStream('token.json'));