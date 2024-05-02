const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=45&lon=12&appid=5c3386be7d977bd079c2f45ffdce782f";
const city = document.getElementById('city');
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
 
async function checkweather(cityName) {
 
    const response = await fetch(apiUrl + "&q=" + cityName);
    let data = await response.json();
    console.log(data);
 
    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = data.list[0].main.temp + "°F";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " mph";
    const date = new Date(data.list[0].dt * 1000);
    document.querySelector(".date").innerHTML = date.toDateString();
}
 
searchBtn.addEventListener("click", ()=> {
    checkweather(searchBox.value);
 
    const cityValue = searchBox.value;
    localStorage.setItem('city', cityValue);
})