//SELECT ELEMENTS for current weather
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const dateElement = document.querySelector(".current-date");

//select elements for date for weather forecast
const NextdateElement = document.querySelector(".next-date");
const thirddateElement = document.querySelector(".third-date");
const fourthdateElement = document.querySelector(".fourth-date");
const fifthdateElement = document.querySelector(".fifth-date");
const sixthdateElement = document.querySelector(".sixth-date");

//select element for next day forecast
const nextdayIconElement = document.querySelector(".weather-small-icon1");
const nextdayTempElement = document.querySelector(".temp-value1 p");
const nextdayDescElement = document.querySelector(".temp-description1 p");

//select element for third day forecast
const thirddayIconElement = document.querySelector(".weather-small-icon2");
const thirddayTempElement = document.querySelector(".temp-value2 p");
const thirddayDescElement = document.querySelector(".temp-description2 p");

//select element for fourth day forecast
const fourthdayIconElement = document.querySelector(".weather-small-icon3");
const fourthdayTempElement = document.querySelector(".temp-value3 p");
const fourthdayDescElement = document.querySelector(".temp-description3 p");

//select element for fifth day forecast
const fifthdayIconElement = document.querySelector(".weather-small-icon4");
const fifthdayTempElement = document.querySelector(".temp-value4 p");
const fifthdayDescElement = document.querySelector(".temp-description4 p");

//App Data
const weather = {};
weather.temperature = {
    unit:"celsius"
}

//APP consts and vars
const KELVIN = 273;

//current date display
var d = new Date();
var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
dateElement.innerHTML = "<p>Today, " + monthNames[d.getMonth()] + " " + d.getDate()+ "</p>";

//next 5 days date display
var tomorrow = new Date();
tomorrow.setDate(d.getDate()+1);
NextdateElement.innerHTML = "<p>" + dayNames[tomorrow.getDay()] + "<br>" + monthNames[tomorrow.getMonth()] + " " + tomorrow.getDate()+ "</p>";

var third = new Date();
third.setDate(d.getDate()+2);
thirddateElement.innerHTML = "<p>" + dayNames[third.getDay()] + "<br>" + monthNames[third.getMonth()] + " " + third.getDate()+ "</p>";

var fourth = new Date();
fourth.setDate(d.getDate()+3);
fourthdateElement.innerHTML = "<p>" + dayNames[fourth.getDay()] + "<br>" + monthNames[fourth.getMonth()] + " " + fourth.getDate()+ "</p>";

var fifth = new Date();
fifth.setDate(d.getDate()+4);
fifthdateElement.innerHTML = "<p>" + dayNames[fifth.getDay()] + "<br>" + monthNames[fifth.getMonth()] + " " + fifth.getDate()+ "</p>";

var sixth = new Date();
sixth.setDate(d.getDate()+5 );
sixthdateElement.innerHTML = "<p>" + dayNames[sixth.getDay()] + "<br>" + monthNames[sixth.getMonth()] + " " + sixth.getDate()+ "</p>";

//API key
const key= "6b3522dbeb4a7a626587c9a5272884fc";

//check if user browser support geolocation
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display="block";
    notificationElement.innerHTML = "<p>Browser Doesn't support Geolocation.</p>";
}

//set user's position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
    getNextDayWeather(latitude, longitude);
    getThirdDayWeather(latitude, longitude);
    getFourthDayWeather(latitude, longitude);
    getFifthDayWeather(latitude, longitude);
}

//show error if there is any
function showError(error){
    notificationElement.style.display="block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

//get current weather from api provider
function getWeather(latitude, longitude){
    let api= `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    console.log(api);
    fetch(api)
        .then(function(response){
            let data= response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            console.log(weather.iconId);
            weather.city = data.name;
            weather.country = data.sys.country;
         }).then(function(){
            displayWeather();
            setBackground();
         });

 }

 //display next day forecast weather
 function getNextDayWeather(latitude, longitude){
    let api= `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    console.log(api);
    fetch(api)
    .then(function(response){
        let data= response.json();
        return data;
    })
    .then(function(data){
        let temp_min= Math.min(data.list[0].main.temp_min, data.list[1].main.temp_min, data.list[2].main.temp_min,
                                data.list[3].main.temp_min, data.list[4].main.temp_min, data.list[5].main.temp_min,
                                data.list[6].main.temp_min, data.list[7].main.temp_min);
        weather.temperature.min = Math.floor(temp_min- KELVIN);
        let temp_max= Math.max(data.list[0].main.temp_max, data.list[1].main.temp_max, data.list[2].main.temp_max,
                                data.list[3].main.temp_max, data.list[4].main.temp_max, data.list[5].main.temp_max,
                                data.list[6].main.temp_max, data.list[7].main.temp_max);
        weather.temperature.max = Math.floor(temp_max- KELVIN);
        weather.description = data.list[0].weather[0].description;
        weather.iconId = data.list[0].weather[0].icon;
        console.log(weather.description);
        console.log(weather.temperature.min);
        console.log(weather.temperature.max);
     }).then(function(){
        displayNextDayWeather();
     });

 }

  //display third day forecast weather
  function getThirdDayWeather(latitude, longitude){
    let api= `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api)
    .then(function(response){
        let data= response.json();
        return data;
    })
    .then(function(data){
        let temp_min= Math.min(data.list[8].main.temp_min, data.list[9].main.temp_min, data.list[10].main.temp_min,
                                data.list[11].main.temp_min, data.list[12].main.temp_min, data.list[13].main.temp_min,
                                data.list[14].main.temp_min, data.list[15].main.temp_min);
        weather.temperature.min = Math.floor(temp_min- KELVIN);
        let temp_max= Math.max(data.list[8].main.temp_max, data.list[9].main.temp_max, data.list[10].main.temp_max,
                                data.list[11].main.temp_max, data.list[12].main.temp_max, data.list[13].main.temp_max,
                                data.list[14].main.temp_max, data.list[15].main.temp_max);
        weather.temperature.max = Math.floor(temp_max- KELVIN);
        weather.description = data.list[8].weather[0].description;
        weather.iconId = data.list[8].weather[0].icon;
        console.log(weather.description);
        console.log(weather.temperature.min);
        console.log(weather.temperature.max);
     }).then(function(){
        displaythirdDayWeather();
     });

 }

  //display fourth day forecast weather
  function getFourthDayWeather(latitude, longitude){
    let api= `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api)
    .then(function(response){
        let data= response.json();
        return data;
    })
    .then(function(data){
        let temp_min= Math.min(data.list[16].main.temp_min, data.list[17].main.temp_min, data.list[18].main.temp_min,
                                data.list[19].main.temp_min, data.list[20].main.temp_min, data.list[21].main.temp_min,
                                data.list[22].main.temp_min, data.list[23].main.temp_min);
        weather.temperature.min = Math.floor(temp_min- KELVIN);
        let temp_max= Math.max(data.list[16].main.temp_max, data.list[17].main.temp_max, data.list[18].main.temp_max,
                                data.list[19].main.temp_max, data.list[20].main.temp_max, data.list[21].main.temp_max,
                                data.list[22].main.temp_max, data.list[23].main.temp_max);
        weather.temperature.max = Math.floor(temp_max- KELVIN);
        weather.description = data.list[16].weather[0].description;
        weather.iconId = data.list[16].weather[0].icon;
        console.log(weather.description);
        console.log(weather.temperature.min);
        console.log(weather.temperature.max);
     }).then(function(){
        displayFourthDayWeather();
     });

 }

  //display fifth day forecast weather
  function getFifthDayWeather(latitude, longitude){
    let api= `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api)
    .then(function(response){
        let data= response.json();
        return data;
    })
    .then(function(data){
        let temp_min= Math.min(data.list[24].main.temp_min, data.list[25].main.temp_min, data.list[26].main.temp_min,
                                data.list[27].main.temp_min, data.list[28].main.temp_min, data.list[29].main.temp_min,
                                data.list[30].main.temp_min, data.list[31].main.temp_min);
        weather.temperature.min = Math.floor(temp_min- KELVIN);
        let temp_max= Math.max(data.list[24].main.temp_max, data.list[25].main.temp_max, data.list[26].main.temp_max,
                                data.list[27].main.temp_max, data.list[28].main.temp_max, data.list[29].main.temp_max,
                                data.list[30].main.temp_max, data.list[31].main.temp_max);
        weather.temperature.max = Math.floor(temp_max- KELVIN);
        weather.description = data.list[24].weather[0].description;
        weather.iconId = data.list[24].weather[0].icon;
        console.log(weather.description);
        console.log(weather.temperature.min);
        console.log(weather.temperature.max);
     }).then(function(){
        displayFifthDayWeather();
     });

 }

 //display current weather to UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

//display next day weather to UI
function displayNextDayWeather(){
    nextdayIconElement.innerHTML = `<img src="icons/${weather.iconId}.png" width=30% height=30%/>`;
    nextdayTempElement.innerHTML = `${weather.temperature.min}°<span>C</span>/${weather.temperature.max}°<span>C</span>`;
    nextdayDescElement.innerHTML = weather.description;
}

//display Third day weather to UI
function displaythirdDayWeather(){
    thirddayIconElement.innerHTML = `<img src="icons/${weather.iconId}.png" width=30% height=30%/>`;
    thirddayTempElement.innerHTML = `${weather.temperature.min}°<span>C</span>/${weather.temperature.max}°<span>C</span>`;
    thirddayDescElement.innerHTML = weather.description;
}

//display fourth day weather to UI
function displayFourthDayWeather(){
    fourthdayIconElement.innerHTML = `<img src="icons/${weather.iconId}.png" width=30% height=30%/>`;
    fourthdayTempElement.innerHTML = `${weather.temperature.min}°<span>C</span>/${weather.temperature.max}°<span>C</span>`;
    fourthdayDescElement.innerHTML = weather.description;
}

//display fifth day weather to UI
function displayFifthDayWeather(){
    fifthdayIconElement.innerHTML = `<img src="icons/${weather.iconId}.png" width=30% height=30%/>`;
    fifthdayTempElement.innerHTML = `${weather.temperature.min}°<span>C</span>/${weather.temperature.max}°<span>C</span>`;
    fifthdayDescElement.innerHTML = weather.description;
}

//celsius to fahrenheit conversion
function celsiusToFahrenheit(temperature){
    return (temperature*9/5)+32;
}

//when the user clicks on the temperature element
tempElement.addEventListener("click", function(){
    if(weather.temperature.value===undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit ="celsius";
    }
});

 //set background image according to the current weather
 function setBackground(){
    if(weather.iconId == "01d"){
        document.body.style.backgroundImage="url('./background_images/01d.jpg')";
    }
    else if(weather.iconId == "01n"){
        document.body.style.backgroundImage="url('./background_images/01n.jpg')";
    }
    else if(weather.iconId == "02d"){
        document.body.style.backgroundImage="url('./background_images/02d.jpg')";
    }
    else if(weather.iconId == "02n"){
        document.body.style.backgroundImage="url('./background_images/02n.jpg')";
    }
    else if(weather.iconId == "03d"){
        document.body.style.backgroundImage="url('./background_images/03d.jpg')";
    }
    else if(weather.iconId == "03n"){
        document.body.style.backgroundImage="url('./background_images/03n.jpg')";
    }
    else if(weather.iconId == "04d"){
        document.body.style.backgroundImage="url('./background_images/04d.jpg')";
    }
    else if(weather.iconId == "04n"){
        document.body.style.backgroundImage="url('./background_images/04n.jpg')";
    }
    else if(weather.iconId == "09d"){
        document.body.style.backgroundImage="url('./background_images/09n.jpg')";
    }
    else if(weather.iconId == "09n"){
        document.body.style.backgroundImage="url('./background_images/09n.jpg')";
    }
    else if(weather.iconId == "10d"){
        document.body.style.backgroundImage="url('./background_images/10d.jpg')";
    }
    else if(weather.iconId == "10n"){
        document.body.style.backgroundImage="url('./background_images/10n.jpg')";
    }
    else if(weather.iconId == "11d"){
        document.body.style.backgroundImage="url('./background_images/11d.jpg')";
    }
    else if(weather.iconId == "11n"){
        document.body.style.backgroundImage="url('./background_images/11n.jpg')";
    }
    else if(weather.iconId == "13d"){
        document.body.style.backgroundImage="url('./background_images/13d.jpg')";
    }
    else if(weather.iconId == "13n"){
        document.body.style.backgroundImage="url('./background_images/13n.jpg')";
    }
    else if(weather.iconId == "50d"){
        document.body.style.backgroundImage="url('./background_images/50d.jpg')";
    }
    else if(weather.iconId == "50n"){
        document.body.style.backgroundImage="url('./background_images/50n.jpg')";
    }
}
