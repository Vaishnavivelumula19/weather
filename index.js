var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitButton'); // Changed 'bin' to 'btn'
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Changed 'descrip' to 'description'
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = '0a0cf34d2d19449bb931aa87d993589d';

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () { // Changed 'BigInt' to 'btn'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description']; // Changed 'data['weather']['0']['description']' to 'data['weather'][0]['description']'
            var tempature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>'${nameval}'<span>`; // Added single quotes around ${nameval}
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`; // Changed 'wndspeed' to 'windspeed'

        })
        .catch(err => alert('You entered the wrong city name')); // Changed 'Wrong' to 'wrong'
});
