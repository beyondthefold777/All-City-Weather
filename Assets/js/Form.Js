const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=45&lon=12&appid=5c3386be7d977bd079c2f45ffdce782f";
const city = document.getElementById('city');
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
 
// function for current weather and 5 day forecast
async function checkweather(cityName) {
    const response = await fetch(apiUrl + "&q=" + cityName);
    let data = await response.json();
    console.log(data);
 
    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " mph";
    document.querySelector(".temp").innerHTML = data.list[0].main.temp + "°F";
    document.querySelector(".temp1").innerHTML = data.list[8].main.temp + "°F";
    document.querySelector(".temp2").innerHTML = data.list[16].main.temp + "°F";
    document.querySelector(".temp3").innerHTML = data.list[24].main.temp + "°F";
    document.querySelector(".temp4").innerHTML = data.list[32].main.temp + "°F";
    document.querySelector(".temp5").innerHTML = data.list[39].main.temp + "°F";
    // displaying our icons
    document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + ".png";
    // date at the top of the page
    const date = new Date(data.list[0].dt * 1000);
    document.querySelector(".date").innerHTML = date.toDateString();
    // displaying the days in the five day forecast
    const date1 = data.list[5].dt_txt
    document.querySelector(".day1").innerHTML = date1;
    const date2 = data.list[13].dt_txt
    document.querySelector(".day2").innerHTML = date2;
    const date3 = data.list[21].dt_txt
    document.querySelector(".day3").innerHTML = date3;
    const date4 = data.list[29].dt_txt
    document.querySelector(".day4").innerHTML = date4;
    const date5 = data.list[37].dt_txt
    document.querySelector(".day5").innerHTML = date5;
}
 
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
 
    const cityValue = searchBox.value;
    localStorage.setItem('city', cityValue);
});

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
 
    const cityValue = searchBox.value;
});