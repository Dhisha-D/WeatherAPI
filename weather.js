function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='ef1b6b524d4b821dee21c25ae45176f4';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    +city+'&appid='+apikey+'&units=metric')
    .then(response => response.json())
    .then(data=>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML.t;
    })
}