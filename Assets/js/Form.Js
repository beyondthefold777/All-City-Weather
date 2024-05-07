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
    document.querySelector(".tempnight").innerHTML = data.list[3].main.temp + "°F";
    document.querySelector(".temp1").innerHTML = data.list[8].main.temp + "°F"; 
    document.querySelector(".temp2").innerHTML = data.list[16].main.temp + "°F";
    document.querySelector(".temp3").innerHTML = data.list[24].main.temp + "°F";
    document.querySelector(".temp4").innerHTML = data.list[32].main.temp + "°F";
    document.querySelector(".tempfive").innerHTML = data.list[40].main.temp + "°F";
    const date = new Date(data.list[0].dt * 1000);
    document.querySelector(".date").innerHTML = date.toDateString();

}
 
searchBtn.addEventListener("click", ()=> {
    checkweather(searchBox.value);
 
    const cityValue = searchBox.value;
    localStorage.setItem('city', cityValue);
})