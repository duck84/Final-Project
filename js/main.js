var weather = document.getElementById('weather');
var news = document.getElementById('news');
var stocks = document.getElementById('stocks')
var ticker = document.getElementById('ticker-text');

weather.addEventListener('click', function(event) {
    window.location.href = './weather/index.html';
}) 

stocks.addEventListener('click', function(event){
    window.location.href = "./stocks.html";
})

ticker.addEventListener("mouseover", function(event) {
    event.target.style.animationPlayState = 'paused';
})

ticker.addEventListener("mouseleave", function(event) {
    event.target.style.animationPlayState = "running"
})