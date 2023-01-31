
# Weather App

This weather app allows users to check current weather conditions and forecasts using data from RapidAPI's weather API. The app is built using JavaScript, making it fast and dynamic. Users can easily search for the weather by city or zip code, and the app will display real-time information on temperature, humidity, wind speed, and more. The app is designed to provide users with accurate and up-to-date weather information, making it a convenient tool for planning outdoor activities or staying informed during inclement weather.



## API Reference
#### Get Weather Details

```http
  GET https://weather-by-api-ninjas.p.rapidapi.com/current?city={cityName}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityName`      | `string` | **Required**. name of the city to fetch |




## Usage/Examples

```javascript
fetch('https://weather-by-api-ninjas.p.rapidapi.com/current?city=London', {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
    'x-rapidapi-key': <RapidAPI Key>
  }
})
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
});

```


## Documentation
Please Refer to the official "Weather by API-Ninjas" Documentation page for full usage details.

[Weather by API-Ninjas __ DOCUMENTATION](https://rapidapi.com/apininjas/api/weather-by-api-ninjas)


## 🚀 About Me
👋 Hi, I’m Lakshya Tyagi

👀 I’m interested in Coding

🌱 I’m currently learning Web Development

💞️ I’m looking to collaborate on back-end projects

📫 Instagram-@lakshyatyagi.83


## Authors

- [@lakshyatyagi732](https://github.com/lakshyatyagi732)

