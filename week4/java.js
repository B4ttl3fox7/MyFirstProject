var weatherContainer = document.getElementById("weather-info");
var btn = document.getElementById("btn");
var input = document.getElementById("cityInput");

btn.addEventListener("click",function()
{
    var value = 
    
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '1c3b339e9beefb049032739092fb928e');
    
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log(ourData[0]);
 }

 ourRequest.send();
});

