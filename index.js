const api_key = 'bd1e350722736c1c04a4e8506d24ae90';
let city = "pune";

async function fetchweatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${api_key}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.visibility);
    console.log(data.wind.speed);
    updateweatherUI(data)
}

// fetchweatherData();
let cityElement = document.querySelector(".city");
let tempElement = document.querySelector(".temp");
let humidityElement = document.querySelector(".humidity");
let visibilityElement = document.querySelector(".visibility_distance");
let WindSppedElement = document.querySelector(".wind_speed");
let weatherName = document.querySelector(".description_text");
let date = document.querySelector(".date");
let IconChange = document.querySelector(".icon_change");

function updateweatherUI(value){
    cityElement.textContent=value.name;
    tempElement.textContent=`${(Math.round(value.main.temp))}°`;
    humidityElement.textContent=`${value.main.humidity}%`;
    visibilityElement.textContent=`${value.visibility / 1000}KM`;
    WindSppedElement.textContent=`${value.wind.speed}KM/H`;
    weatherName.textContent=value.weather[0].description;
    IconChange.textContent=value.weather[0].icon;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
}

const formElement = document.querySelector(".search_form");
const inputElement = document.querySelector(".city_input");

formElement.addEventListener("submit",(event) => {
    event.preventDefault();
    let city =inputElement.value;
    if(city !== ""){
        fetchweatherData(city);
        inputElement.value = "";
    }
})