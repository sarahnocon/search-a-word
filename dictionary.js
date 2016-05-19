

request('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite',{form:{key:"31d42d41-bba5-4667-8f0b-293297a50a0c"}}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})
