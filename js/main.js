var api_key = "2dac35031101f117243f615dad362882"
var api_request = "https://api.openweathermap.org/data/2.5/weather?zip=97212,us&units=imperial&appid="

var request = new XMLHttpRequest()
var data
var max_temp;
var min_temp;
var current_temp;
var description;

request.open('Get', api_request + api_key, true)

request.onload = function() {
    data = JSON.parse(this.response)
    max_temp = data['main']['temp_max']
    min_temp = data['main']['temp_min']
    current_temp = data['main']['temp']
    description = data['weather'][0]['description']

    console.log(max_temp, min_temp, current_temp)

    setBackground();
};

function setBackground(){
    if(description == 'Misty' || description == 'fog'){
        document.body.style.backgroundImage="url('./img/fogday.jpg')";
    }
    else if(current_temp <= 32){
        document.body.style.backgroundImage="url('./img/snowday.jpg')";
    }
    else if(current_temp > 32){
        document.body.style.backgroundImage="url('./img/sunnyDay.jpg')";
    }
}

//request.onload = function() {
//    var data = JSON.parse(this.response, function (key,value) {
//        if (key == "main"){
//            console.log(value)
//        }
//        console.log(data['main'])
//    }
//)};

request.send()


