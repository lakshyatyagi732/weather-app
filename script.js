// ----------------Variables-Delhi----------------

var Dcloud_pct = document.getElementById("Dcloud_pct");
var Dtemp = document.getElementById("Dtemp");
var Dfeels_like = document.getElementById("Dfeels_like");
var Dhumidity = document.getElementById("Dhumidity");
var Dmin_temp = document.getElementById("Dmin_temp");
var Dmax_temp = document.getElementById("Dmax_temp");
var Dwind_speed = document.getElementById("Dwind_speed");
var Dwind_degrees = document.getElementById("Dwind_degrees");
var Dtemp2 = document.getElementById("Dtemp2");
// -----------------------------------------------------

// ----------------Variables-Khatauli----------------

var Kcloud_pct = document.getElementById("Kcloud_pct");
var Ktemp = document.getElementById("Ktemp");
var Kfeels_like = document.getElementById("Kfeels_like");
var Khumidity = document.getElementById("Khumidity");
var Kmin_temp = document.getElementById("Kmin_temp");
var Kmax_temp = document.getElementById("Kmax_temp");
var Kwind_speed = document.getElementById("Kwind_speed");
var Kwind_degrees = document.getElementById("Kwind_degrees");
var Ktemp2 = document.getElementById("Ktemp2");
// ------------------------------------------------------

// ----------------Variables-New York----------------

var Ncloud_pct = document.getElementById("Ncloud_pct");
var Ntemp = document.getElementById("Ntemp");
var Nfeels_like = document.getElementById("Nfeels_like");
var Nxhumidity = document.getElementById("Nhumidity");
var Nmin_temp = document.getElementById("Nmin_temp");
var Nmax_temp = document.getElementById("Nmax_temp");
var Nwind_speed = document.getElementById("Nwind_speed");
var Nwind_degrees = document.getElementById("Nwind_degrees");
var Ntemp2 = document.getElementById("Ntemp2");
// ------------------------------------------------------

var result_place = document.getElementById("result_place");
var input_nav = document.getElementById("input_nav");
var button = document.getElementById("search");


// ------------------------------------------------------------------

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55c5e952c8msha27bbd6391ff817p111f3ejsn60fb67ecc5b5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// ______________Delhi___________________
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
// console.log(response);

       Dcloud_pct.innerText = response.cloud_pct;
       Dtemp.innerText = response.temp;
       Dfeels_like.innerText = response.feels_like;
       Dhumidity.innerText = response.humidity;
       Dmin_temp.innerText = response.min_temp;
       Dmax_temp.innerText = response.max_temp;
       Dwind_speed.innerText = response.wind_speed;
       Dwind_degrees.innerText = response.wind_degrees;
       Dtemp2.innerText = response.temp + '°C';

    })
	.catch(err => console.error(err));

    // ____________________________________________

    // ______________khatauli___________________
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=khatauli', options)
.then(response => response.json())
.then(response => {
// console.log(response);

   Kcloud_pct.innerText = response.cloud_pct;
   Ktemp.innerText = response.temp;
   Kfeels_like.innerText = response.feels_like;
   Khumidity.innerText = response.humidity;
   Kmin_temp.innerText = response.min_temp;
   Kmax_temp.innerText = response.max_temp;
   Kwind_speed.innerText = response.wind_speed;
   Kwind_degrees.innerText = response.wind_degrees;
   Ktemp2.innerText = response.temp + '°C';

})
.catch(err => console.error(err));

// ____________________________________________

    // ______________New York___________________
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
    .then(response => response.json())
    .then(response => {
    // console.log(response);
    
       Ncloud_pct.innerText = response.cloud_pct;
       Ntemp.innerText = response.temp;
       Nfeels_like.innerText = response.feels_like;
       Nhumidity.innerText = response.humidity;
       Nmin_temp.innerText = response.min_temp;
       Nmax_temp.innerText = response.max_temp;
       Nwind_speed.innerText = response.wind_speed;
       Nwind_degrees.innerText = response.wind_degrees;
       Ntemp2.innerText = response.temp + '°C';
    
    })
    .catch(err => console.error(err));
    
    // ____________________________________________



    
const get_temp = (city)=>{
    // result_place.innerText = city.value; 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
console.log(response);
       result_place.innerText = city; 
       Rcloud_pct.innerText = response.cloud_pct;
       Rtemp.innerText = response.temp;
       Rfeels_like.innerText = response.feels_like;
       Rhumidity.innerText = response.humidity;
       Rmin_temp.innerText = response.min_temp;
       Rmax_temp.innerText = response.max_temp;
       Rwind_speed.innerText = response.wind_speed;
       Rwind_degrees.innerText = response.wind_degrees;
      

    })
	.catch(err => console.error(err));
}

button.addEventListener('click',(e)=>{
    e.preventDefault();
    get_temp(input_nav.value);
    console.log(input_nav.value);
    input_nav.value = "";
});