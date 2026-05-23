const apiKey = "YOUR_API_KEY";
const lat = 40.2338; // Replace with your city lat
const lon = -111.6585; // Replace with your city lon

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const currentRes = await fetch(currentURL);
        const currentData = await currentRes.json();
        document.querySelector('#current-weather').innerHTML = `
        <p>Temp: ${currentData.main.temp}°F</p>
        <p>${currentData.weather[0].description}</p>
        <img src="https://openweathermap.org/img/w/${currentData.weather[0].icon}.png" alt="${currentData.weather[0].description}">
        `;

        const forecastRes = await fetch(forecastURL);
        const forecastData = await forecastRes.json();
        const daily = forecastData.list.filter(x => x.dt_txt.includes("12:00:00")).slice(0,3);

        document.querySelector('#forecast').innerHTML = daily.map(day => `
            <p>${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°F</p>
            `).join('');
        } catch (err) {
            console.error("Weather fetch failed:", err);
        }
    }
