var api_key = "2dac35031101f117243f615dad362882"

var api_request = "https://api.openweathermap.org/data/2.5/weather?zip=97212,us&units=imperial&appid="

var request = new XMLHttpRequest()

request.open('Get', api_request + api_key, true)

request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data)
}

request.send()

