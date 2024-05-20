const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=5c3386be7d977bd079c2f45ffdce782f";
const city = document.getElementById('city');
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Call the function when the page loads
window.onload = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        checkweather(position.coords.latitude, position.coords.longitude);
    });
};

// function for current weather and 5 day forecast
async function checkweather(lat, lon) {
    const response = await fetch(apiUrl + "&lat=" + lat + "&lon=" + lon);
    let data = await response.json();
    updateWeatherInfo(data);
}

// Function to update weather information on the page
function updateWeatherInfo(data) {
    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " mph";
    document.querySelector(".temp").innerHTML = data.list[0].main.temp + "°F";
    document.querySelector(".temp1").innerHTML = data.list[8].main.temp + "°F";
    document.querySelector(".temp2").innerHTML = data.list[16].main.temp + "°F";
    document.querySelector(".temp3").innerHTML = data.list[24].main.temp + "°F";
    document.querySelector(".temp4").innerHTML = data.list[32].main.temp + "°F";
    document.querySelector(".temp5").innerHTML = data.list[39].main.temp + "°F";

    // Displaying icons
    document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + ".png";
    document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + ".png";
    document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + ".png";
    document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + ".png";
    document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + ".png";

    // Update date at the top of the page
    const date = new Date(data.list[0].dt * 1000);
    document.querySelector(".date").innerHTML = date.toDateString();

    // Displaying the days in the five day forecast
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.querySelector(".day1").innerHTML = days[new Date(data.list[8].dt_txt).getDay()];
    document.querySelector(".day2").innerHTML = days[new Date(data.list[16].dt_txt).getDay()];
    document.querySelector(".day3").innerHTML = days[new Date(data.list[24].dt_txt).getDay()];
    document.querySelector(".day4").innerHTML = days[new Date(data.list[32].dt_txt).getDay()];
    document.querySelector(".day5").innerHTML = days[new Date(data.list[39].dt_txt).getDay()];
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
    const cityName = searchBox.value;
    if (cityName) {
        fetch(apiUrl + "&q=" + cityName)
            .then(response => response.json())
            .then(data => {
                updateWeatherInfo(data);
                localStorage.setItem('city', cityName);
            })
            .catch(error => console.error('Error:', error));
    }
});
