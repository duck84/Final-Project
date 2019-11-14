var api_key = "C1AEGJ38IULZ7EER";

var api_request = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=" + api_key;

var request = new XMLHttpRequest()

request.open('Get', api_key, true)

request.onload = function() {
    data = JSON.parse(this.response)
};

