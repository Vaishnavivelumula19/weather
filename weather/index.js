var inputvalue=document.querySelector('#cityinput')
var bin=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik ='0a0cf34d2d19449bb931aa87d993589d'
function convertion(val)
{
    return (val - 273).toFixed(3)
}

BigInt.addEventListener('click',function()
{

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>'${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${ convertion(tempature)} C</span>`
        description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${wndspeed} km/h<span>`

    })

    .catch(err => alert('You entered Wrong city name'))
})