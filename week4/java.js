//Variables for user input, Button, And Weather Data is provided
var Input = document.getElementById('cityInput');
var btn = document.getElementById('btn');
var Weather = document.getElementById('weather-info');

//Event Listener for Button is Created
btn.addEventListener('click', function() {
   
    var city = Input.value;

    if (city == null || city == "") {
        alert('No Input is Provided. Please Provide some input.');
        return;
    }

//Variable for openWeatherMap API Is created Holding the URL Link For Weather Data where "API" Is the API Key generated
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c3b339e9beefb049032739092fb928e`;

/*With This Data we compare it with the User input to see if
*City Name Matches with any City Present in The URL
*If Present then the following is Printed
*Weather: (Weather of City)
*Main Temperature: (Temperature)
*Wind Speed: (Wind Speed)
*
*If response is null then An alert Box pops up telling the user to input data.
*/

//NOTE: I Could'nt Use the XML Method And do HTTP Request Due to repeated Errors So Instead I used the Fetch method to get the Data In the OpenWeather Map Instead.
    fetch(apiUrl)
        .then(response => {
            if (response == null || response == "") {
                alert('Input is Unrecognisable. Cannot fetch weather data. Check input and try again.');
            }
            return response.json();
        })
        .then(data => {
           
            var weatherDetails = `
                <p>The wrather in Dubai is ${data.weather[0].description}</p>
                <p>The temperature is  ${data.main.temp} Celsius with a Wind Speed of ${data.wind.speed} m/s</p>
            `;
            Weather.innerHTML = weatherDetails;
        })
        .catch(error => {
            
            console.error('Error:', error.message);
            Weather.innerHTML = '<p>Error in Network. Try reconnectings</p>';
        });
});