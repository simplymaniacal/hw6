
const btnSearch = document.getElementById("searchCity");
const searchInput = document.getElementById("searchInput");

btnSearch.onclick = function() {
    const inputVal = searchInput.value
    getCityWeather(inputVal)
};

/**
 * this makes an api call to the to the weather api with a specified city.
 * 
 * @param {String} city the city we are getting weather for.
 */
function getCityWeather(city) {
    console.log(city)
    API({
        endpoint: "weather", 
        city: city
    })
}

/**
 * function to interact with the weather api
 * 
 * @param {Object} opts contains the keys for a city/enpoint api call
 */
function API(opts) {
    fetch(`https://api.openweathermap.org/data/2.5/${opts.endpoint}?q=${opts.city}&appid=7a72736cdb2bc2c87c54059134ec0642`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data.visibility)
        })
}
