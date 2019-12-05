var api_key = "api_token=RJihFJAd1VKD4VEBDanei82WCaShBSfF6FkMJ02aUbTXQ9d6XW5uoaWKi2Mt";
if(window.location.hash.substring(1)){
    var tickerSymbol =  window.location.hash.substring(1)
    var default_symbol = "symbol=" + tickerSymbol + "&";
}else{
    var default_symbol = "symbol=NKE&";
}

var api_request = "https://api.worldtradingdata.com/api/v1/history?";
var dateFrom = 'date_from=2018-11-21&';
var dateTo = 'date_to=2019-11-21&';
var sort = 'sort=oldest&';

window.onload = function () {

    var dataPoints = [];
    var y = 0;
    var data = [];
    var dataSeries = { type: "line" };

    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "transparent",
        
        fillOpacity: .10,
        animationEnabled: true,
        zoomEnabled: true,
        title: {
            fontColor: 'white',
            text: "Price"
        },
        axisY: {
            labelFontColor: 'white',
            includeZero: false
        },
        axisX:{
            labelFontColor: "white",
          },
        data: [{
            fontColor: 'white',
            type: 'line',
            dataPoints: dataPoints
        }]
    });

    function addData(data) {
        list = [];
        for (date in data["history"]) {
            list.push([data['history'][date]['close'], date])
        }

        for (var i = 0; i < list.length; i++) { 
            dataPoints.push({
                x: i, label: list[i][1],
                y: parseFloat(list[i][0])
            });
        }
        dataSeries.dataPoints = dataPoints;
        chart.render();


    }

    $.getJSON(api_request + default_symbol + dateFrom + dateTo + sort + api_key, addData);

}

function setInfo() {
    var api_key = "&api_token=RJihFJAd1VKD4VEBDanei82WCaShBSfF6FkMJ02aUbTXQ9d6XW5uoaWKi2Mt";
    if(window.location.hash.substring(1)){
        var tickerSymbol =  window.location.hash.substring(1)
        var symbolString = "symbol=" + tickerSymbol + "&";
    }else{
        var symbolString = "symbol=NKE&";
    }
    var api_request = "https://api.worldtradingdata.com/api/v1/stock?"

    var stockRequest = new XMLHttpRequest();
    var stockDict = {};

    stockRequest.open('Get', api_request + symbolString + api_key, true)

    stockRequest.onload = function (callback) {
        var stockData = JSON.parse(this.response);
        parseRequest(stockData, stockDict, addStockPricesToHTML)
    }

    function parseRequest(object, dict, callback) {
        i = 1;
        for (index of object["data"]) {
            dict['index' + i] = {
                'name': index['name'],
                'price': index['price'],
                'change': index['change_pct'],
                'day': index['day_change'],
                'symbol': index['symbol'],
                'day_high': index['day_high'],
                'day_low' : index['day_low'],
                '52_week_high' : index['52_week_high'],
                '52_week_low' : index['52_week_low'],
                'pe' : index['pe'],
            }
            i++

        }
        callback(dict);
    };

    function addStockPricesToHTML(dict) {
        var name = document.getElementById('name');
        name.innerHTML = ('Name: \xa0\xa0' + dict['index1']['name'])

        var symbol = document.getElementById('symbol');
        var symbolText = dict['index1']['symbol'];
        symbolText = symbolText.replace('^','');
        symbol.innerHTML = ('\xa0\xa0\xa0\xa0 Symbol: \xa0\xa0' + symbolText)

        var price = document.getElementById('price');
        price.innerHTML = ('Price: \xa0\xa0 $' + dict['index1']['price'])

        var change = document.getElementById('change')
        change.innerHTML = ('\xa0\xa0\xa0\xa0 Change: \xa0\xa0' + dict['index1']['change'] + '%')

        var high = document.getElementById('high');
        high.innerHTML = ('High: \xa0\xa0 $' + dict['index1']['day_high'])

        var low = document.getElementById('low')
        low.innerHTML = ('\xa0\xa0\xa0\xa0 Low: \xa0\xa0 $' + dict['index1']['day_low'])

    }

    
    stockRequest.send();

}

setInfo();



function changeStock(){
    stockString = document.getElementsByTagName("input")[0].value;
    window.location.href = './stocks.html' + '#' + stockString;
    location.reload()

}

function addEvent(){
    var stockInput = document.getElementsByTagName("input")[0]
    stockInput.addEventListener("keyup", function(event) {
    if(event.key !== 'Enter') return;
    console.log("TEST")
    event.preventDefault();
    window.location.href = './stocks.html' + '#' + stockString.value;
    })
}







