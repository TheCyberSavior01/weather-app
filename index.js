const button = document.getElementById("button");

button.addEventListener("click", function(){
    updateWeather();
});

function updateWeather() {
    const city = document.getElementById("city-name");
    const cityName = city.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=eae566e1b34f15b25ecaf80e357ea4c4`)
    .then(response => response.json())
    .then (data => {
        const updateCity = document.getElementById("city-update");
        updateCity.innerText = data.name;
        const updateTemperature = document.getElementById("temperature");
        const tempInKelvin = data.main.temp;
        tempIncelsius = tempInKelvin - 273.15
        updateTemperature.innerText = Math.round(tempIncelsius);
        const updateDescription = document.getElementById("description");
        const weatherType = data.weather[0].description;
        updateDescription.innerText = weatherType;
        console.log(data);
    })
};