let city= "New York";
let unit= "C";
let Day="Today";
document.getElementById('Curr_day').addEventListener('click',function(){
    Day="Today";
    console.log(Day);

});
document.getElementById('Curr_week').addEventListener('click',function(){
    Day="Week";
    console.log(Day);
});
//document.getElementById('').addEventListener('click',function(){
//})
let weather={
    apiKey:"6c65d5c02dc08e8e70fa959a377ba5bd",
    fetchWeather: function(x){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=" + this.apiKey).then((response)=>response.json()).then((data)=>console.log(data));
    }
};