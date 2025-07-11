export {LocationFetcher}

async function LocationFetcher(location) {
    const WeatherDetailsJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=FN5JYKF3GDMMFET2J2CG6W7WE`,{
        mode: 'cors'
    });
    const WeatherDetails = await WeatherDetailsJSON.json(); 
    const weatherConditions =  WeatherDetails.currentConditions.conditions;
    const temperature =  WeatherDetails.currentConditions.temp;
    const weatherDescription = WeatherDetails.description;
    console.log(weatherDescription);
    return {weatherConditions, temperature, weatherDescription}
}

