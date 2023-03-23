let searchBar = document.querySelector(".search-bar");
let iconBtn = document.querySelector(".icon-btn");
let weather = document.querySelector(".weather");
let apiKey ="f5877aa0629932caf48701900c338594"
let city;

function fetchWeather (){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
.then(response => {
    if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
.then(data => {
    displayWeather (data)
});
}

function displayWeather (data){
    document.querySelector(".city").innerText =`Weather in ${data.name}`;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + `${data.weather[0].icon}` +".png";
    document.querySelector(".description").innerText=`${data.weather[0].description}`;
    document.querySelector(".humidity").innerText="Humidity :"+`${data.main.humidity}`+ "%";
    document.querySelector(".wind").innerText="Wind Speed :"+`${data.wind.speed}`+ "km/h";
    document.querySelector(".temp").innerText=Math.floor(`${data.main.temp}`) + "°C"
    document.querySelector(".weather").classList.remove("loading")
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + `${data.name}`+ "')"
    console.log(data)

}
function find(){
   city = searchBar.value;
    fetchWeather();
}

iconBtn.addEventListener("click", e =>{
    find();
});

searchBar.addEventListener("keyup", e =>{
    if (e.key == "Enter"){
        find();
    }
})

