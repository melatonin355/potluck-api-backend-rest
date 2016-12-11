'use strict'
var client = require('../helpers/es_aws')
module.exports = {
  GetAllShops : GetAllShops
}

function GetAllShops(req, res, next){
  client.search({
    index: 'store',
    type: 'store',
    q: '*',
    _sourceInclude: 'shop_id, location, name, description'
  }, function(error, response){
    if(error){
      res.end(JSON.stringify(error));
    }else{
      
    }

  })
}