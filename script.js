let city= "New York";
let unit='C';
let Day="Today";
document.getElementById('c').addEventListener('click',function(){  
    document.getElementById('c').style.backgroundColor='#b71c1c';
    document.getElementById('f').style.backgroundColor='white';
    unit=$('#c')[0].name;
    event.preventDefault();
})
document.getElementById('f').addEventListener('click',function(){
    event.preventDefault();
    document.getElementById('f').style.backgroundColor='#b71c1c';
    document.getElementById('c').style.backgroundColor='white';
    unit=$('#f')[0].name;
})
    document.getElementById('Submit').addEventListener('click',function(){
    event.preventDefault();
    city=document.getElementById('Search').value;
    console.log(city);
    $('#Search')[0].value="";
    Location.fetchLocation(city);
    weather.fetchWeather(lat,lon);
});

let lat="22.5726723",lon="88.3638815";
    let Location={
        apiKey:"6c65d5c02dc08e8e70fa959a377ba5bd",
        fetchLocation:function(x){
            fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + x +"&appid="+ this.apiKey).then(response=>response.json()).then(data=>{
                lat=data[0].lat;
                lon=data[0].lon;
            });
        }
    }
document.getElementById('Curr_day').addEventListener('click',function(){
    Day="Today";
    console.log(Day);

});
document.getElementById('Curr_week').addEventListener('click',function(){
    Day="Week";
    console.log(Day);
});
let weather={
    apiKey:"6c65d5c02dc08e8e70fa959a377ba5bd",
    fetchWeather: function(lat,lon){
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey).then((response)=>response.json()).then((data)=>console.log(data));
    }
};
