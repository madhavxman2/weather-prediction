const apiKey = "50ccc998bd999b950ff522c2c5a78b3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) {
      // Handle error when response is not successful (e.g., city not found)
      throw new Error('City not found');
    }

    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C ";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    let value1 = data.weather[0].main;
    document.querySelector(".weather-icon").src = `images/${value1}.png`;
    // weatherIcon.alt = data.weather[0].description;

    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block';

  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors here (e.g., show an error message to the user)
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none'
  }
 
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Optionally, you can call checkWeather() to display default weather information on page load.
// Just uncomment the line below.
// checkWeather("YOUR_DEFAULT_CITY_NAME");
