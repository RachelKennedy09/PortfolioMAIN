// step 1: Grab the elements

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("weatherResult");

//step 1.5: add event listeners

weatherForm.addEventListener("submit", function (e) {
  //using submit in stead of click for "enter"
  e.preventDefault(); //stops page reloading on enter

  const city = cityInput.value.trim(); //reads what the user typed
  resultDiv.textContent = "You searched for: ${city}"; //changes (textContent) what user typed in box
  // always remember to keep the APi inside the function.
  // Step 2: Build your API URL

  const apiKey = "01914da6b930a55e765497fa0cd1ced0";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Step 3: Fetch the weather data
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      // Step 4: Display the data
      const temp = data.main.temp;
      const description = data.weather[0].description;
      resultDiv.textContent = `🌡️ ${temp}°C, ${description}`;
    })
    .catch((error) => {
      resultDiv.textContent = error.message;
    });
});

//website: https://home.openweathermap.org/api_keys

//example cheat sheet below
//fetch("https://api.example.com/weather") //this is the returned promise
//.then(response => response.json())      // When it's done, THEN do this
//.then(data => console.log(data))        // And THEN do this with the result
//.catch(error => console.log("Error"));  // If anything breaks