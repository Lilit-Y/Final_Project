function clickHandler() {
    var city= document.getElementById("myText").value;
    
}
  
    
city="Paris"
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" +city+"&units=metric&APPID=9bd09423a09da91f3c8911472a1edbfa",
 function(data) {
    console.log(data);

    var icon="https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    var wea=data.weather[0].main;
    var temp=data.main.temp+"C";
    

    $('.icon').attr('src', icon);
    $('.wea').append(wea);
    $('.temp').append(temp);
   
 }
);
