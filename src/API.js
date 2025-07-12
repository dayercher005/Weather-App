export {WeatherLocationFetcher}

async function WeatherLocationFetcher(location) {
    try{
        const WeatherDetailsJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=FN5JYKF3GDMMFET2J2CG6W7WE`,{
            mode: 'cors'
        });

        const WeatherDetails = await WeatherDetailsJSON.json();
        console.log(WeatherDetails)

        const WeatherObject = {
            temperature: await WeatherDetails.currentConditions.temp,
            description: await WeatherDetails.description,
            conditions: await WeatherDetails.currentConditions.conditions
        }

        return WeatherObject
    } catch (error) {

    }
    
}


