var API = '1c3b339e9beefb049032739092fb928e';


var Input = document.getElementById('cityInput');
var btn = document.getElementById('btn');
var Weather = document.getElementById('weather-info');


btn.addEventListener('click', function() {
   
    var city = Input.value;

    if (city == null || city == "") {
        alert('No Input is Provided. Please Provide some input.');
        return;
    }

    
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error in Network. Try Reconnecting.');
            }
            return response.json();
        })
        .then(data => {
           
            var weatherDetails = `
                <p>Weather: ${data.weather[0].description}</p>
                <p>Main Temperature: ${data.main.temp}Celsius</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            Weather.innerHTML = weatherDetails;
        })
        .catch(error => {
            
            console.error('Error:', error.message);
            Weather.innerHTML = '<p>Input is Unrecognisable. Cannot fetch weather data. Check input and try again.</p>';
        });
});