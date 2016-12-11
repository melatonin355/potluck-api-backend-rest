'use strict'

module.exports = {
  GetAllShops : GetAllShops
}

function GetAllShops(req, res, next){
  res.json([{
    shop_id: 23,
    location: "san francisco",
    name: "Michael's Shop",
    description: "Michael's one stop shop of goods"
  },
  {
    shop_id: 11,
    location: "san jose",
    name: "Jhons's Shop",
    description: "Jhons's one stop shop of goods"
  }
  ])
}