var api_key = "&api_token=RJihFJAd1VKD4VEBDanei82WCaShBSfF6FkMJ02aUbTXQ9d6XW5uoaWKi2Mt";
var default_stocks = "symbol=INTC,COLM,NKE";
var default_indexes = "symbol=^INX,^DJI,^IXIC"
var api_request = "https://api.worldtradingdata.com/api/v1/stock?"

var indexRequest = new XMLHttpRequest();
var stockRequest = new XMLHttpRequest();
var indexDict = {};
var stockDict = {};

indexRequest.open('Get', api_request + default_indexes + api_key, true)
stockRequest.open('Get', api_request + default_stocks + api_key, true)

indexRequest.onload = function(callback) {
    var indexData = JSON.parse(this.response);
    parseRequest(indexData, indexDict, addIndexesToTicker);
};

stockRequest.onload = function(callback) {
    var stockData = JSON.parse(this.response);
    parseRequest(stockData, stockDict, addStocksToTicker)
}

function parseRequest (object, dict, callback){
    i = 1;
    for (index of object["data"]){
        dict['index' + i] = {'name' : index['name'],
                                  'price' : index['price'],
                                  'change' :index['change_pct'],
                                  'day' : index['day_change']
                                 }
        i++

    }
    callback(dict);
};

function addStockPricesToHTML(){


}

function addIndexesToTicker(dict){
    var ticker = document.getElementById('ticker-text');
    var span = document.createElement('span');
    let node = document.createTextNode("** Stock Indexes ** \xa0\xa0\xa0\xa0");
    span.append(node);
    ticker.appendChild(span);

    for(index of Object.values(dict)){
        var name = document.createElement('span');
        var price = document.createElement('span');
        var change = document.createElement('span');
        var day = document.createElement('span');

        let nameNode = document.createTextNode(index['name'] + ": ");
        let priceNode = document.createTextNode(index['price'] + ' ( ');
        let dayNode = document.createTextNode(index['day'] + '\xa0\xa0');
        let changeNode = document.createTextNode(index['change'] + '% )\xa0\xa0\xa0\xa0');


        name.append(nameNode);
        price.appendChild(priceNode);
        day.append(dayNode);
        change.append(changeNode);

        if((index['change']).includes('-'))
        {
            change.setAttribute('class', 'negative');
            day.setAttribute('class', 'negative');
        }else{
            change.setAttribute('class', 'positive');
            change.setAttribute('class', 'positive');
        }

        ticker.appendChild(name);
        ticker.appendChild(price);
        ticker.appendChild(day);
        ticker.appendChild(change);

    }
}

function addStocksToTicker(dict){
    var ticker = document.getElementById('ticker-text');
    var span = document.createElement('span');
    let node = document.createTextNode("** Individual Stocks ** \xa0\xa0\xa0\xa0");
    span.append(node);
    ticker.appendChild(span);

    for(index of Object.values(dict)){
        var name = document.createElement('span');
        var price = document.createElement('span');
        var change = document.createElement('span');
        var day = document.createElement('span');

        let nameNode = document.createTextNode(index['name'] + ": ");
        let priceNode = document.createTextNode(index['price'] + ' ( ');
        let dayNode = document.createTextNode(index['day'] + '\xa0\xa0');
        let changeNode = document.createTextNode(index['change'] + '% )\xa0\xa0\xa0\xa0');


        name.append(nameNode);
        price.appendChild(priceNode);
        day.append(dayNode);
        change.append(changeNode);

        if((index['change']).includes('-'))
        {
            change.setAttribute('class', 'negative');
            day.setAttribute('class', 'negative');
        }else{
            change.setAttribute('class', 'positive');
            change.setAttribute('class', 'positive');
        }

        ticker.appendChild(name);
        ticker.appendChild(price);
        ticker.appendChild(day);
        ticker.appendChild(change);
    }
}

indexRequest.send()
stockRequest.send()


