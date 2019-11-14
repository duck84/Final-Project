var api_key = "RJihFJAd1VKD4VEBDanei82WCaShBSfF6FkMJ02aUbTXQ9d6XW5uoaWKi2Mt";
var api_request = "https://api.worldtradingdata.com/api/v1/stock?symbol=F,BA,NKE&api_token="

var request = new XMLHttpRequest()
var stock1_name;
var stock1_price;
var stock2_name;
var stock2_price;


request.open('Get', api_request + api_key, true)

request.onload = function() {
    api_data = JSON.parse(this.response);
    stock1_name = api_data["data"][0]["name"];
    stock1_price = api_data["data"][0]["price"];
    stock2_name = api_data["data"][1]["name"];
    stock2_price = api_data["data"][1]["price"];
    stock3_name = api_data["data"][2]["name"];
    stock3_price = api_data["data"][2]["price"];


    addStockPricesToHTML();
};

function addStockPricesToHTML(){
    var nameId1 = document.getElementById('name1');
    var priceId1 = document.getElementById('price1');
    var nameId2 = document.getElementById('name2');
    var priceId2 = document.getElementById('price2');
    var nameId3 = document.getElementById('name3');
    var priceId3 = document.getElementById('price3');

    nameId1.innerHTML += stock1_name;
    priceId1.innerHTML += stock1_price;
    nameId2.innerHTML += stock2_name;
    priceId2.innerHTML += stock2_price;
    nameId3.innerHTML += stock3_name;
    priceId3.innerHTML += stock3_price;

}
request.send()
