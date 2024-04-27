// function weather(query) {
//     let url = "https://api.openweathermap.org/data/2.5/forecast?lat=45&lon=12&appid=5c3386be7d977bd079c2f45ffdce782f";
//     let data =

//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data));

//     function runData(data) {
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=&units=imperial&lat=45&lon=12&appid=5c3386be7d977bd079c2f45ffdce782f";

async function checkweather() {

    const response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = data.list[0].main.temp + "°F";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity;
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " mph";
}
checkweather();