export {WeatherLocationFetcher, WeatherDetailsFetcher}

async function WeatherLocationFetcher(location) {
    const WeatherDetailsJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=FN5JYKF3GDMMFET2J2CG6W7WE`,{
        mode: 'cors'
    });

    console.log(WeatherDetailsJSON);
    return WeatherDetailsJSON
}

async function WeatherDetailsFetcher() {
    const WeatherDetailsJSON = WeatherLocationFetcher();
    const WeatherDetails = await WeatherDetailsJSON.json();
    console.log(WeatherDetails);
}

