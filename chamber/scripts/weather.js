// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const forecastDiv = document.querySelector("#forecast");

// 51.50, -0.12
const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.50&lon=-0.12&units=imperial&appid=38b07c8612ea622b365c841f50a776a2";
const urlf = "https://api.openweathermap.org/data/2.5/forecast?lat=51.50&lon=-0.12&units=imperial&appid=38b07c8612ea622b365c841f50a776a2";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

async function apiForecast() {
    try {
        const response = await fetch(urlf);
        if (response.ok) {
            const data = await response.json();
            
            displayForecast(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

apiFetch();
apiForecast();
// <p class="center weather"><img id="weather-icon"></img><span id="current-temp"></span> - <span id="caption"></span>.</p>
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `png of ${desc}`);
    captionDesc.textContent = `${desc.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
}

function displayForecast(list) {

    const div1 = document.createElement("div");
    const p1 = document.createElement("p");
    const timestamp1 = list[7].dt * 1000; // Convert seconds to milliseconds
    const date1 = new Date(timestamp1);
    const day1 = date1.toLocaleString('en-US', { weekday: 'short' });
    p1.textContent = `${day1}`;
    div1.appendChild(p1);
    forecastDiv.appendChild(div1);
    const p2 = document.createElement("p");
    p2.textContent = `${list[7].main.temp}°F`;
    div1.appendChild(p2);

    const div2 = document.createElement("div");
    const p3 = document.createElement("p");
    const timestamp2 = list[15].dt * 1000; // Convert seconds to milliseconds
    const date2 = new Date(timestamp2);
    const day2 = date2.toLocaleString('en-US', { weekday: 'short' });
    p3.textContent = `${day2}`;
    div2.appendChild(p3);
    forecastDiv.appendChild(div2);
    const p4 = document.createElement("p");
    p4.textContent = `${list[15].main.temp}°F`;
    div2.appendChild(p4);

    const div3 = document.createElement("div");
    const p5 = document.createElement("p");
    const timestamp3 = list[23].dt * 1000; // Convert seconds to milliseconds
    const date3 = new Date(timestamp3);
    const day3 = date3.toLocaleString('en-US', { weekday: 'short' });
    p5.textContent = `${day3}`;
    div3.appendChild(p5);
    forecastDiv.appendChild(div3);
    const p6 = document.createElement("p");
    p6.textContent = `${list[23].main.temp}°F`;
    div3.appendChild(p6);

}