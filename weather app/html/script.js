function getWeather() {
    const apiKey = "5e488a07b7f806f2764965919b414c00";
    const searchQuery = document.getElementById("search").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}&units=metric`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
  
        document.querySelector(".location").innerHTML = location;
        document.querySelector(".temperature").innerHTML = temperature + "°C";
        document.querySelector(".description").innerHTML = description;
      })
      .catch(error => {
        console.log(error);
      });
  }
  