import {ErrorFunction} from "./UI.js";

export {WeatherLocationFetcher}

async function WeatherLocationFetcher(location) {

    const APIKey = "FN5JYKF3GDMMFET2J2CG6W7WE";

    try{
        const WeatherDetailsJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${APIKey}&iconSet=icons1`,{
            mode: 'cors'
        });
        const WeatherIconsJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${APIKey}&iconSet=icons2`,{
            mode: 'cors'
        });
        
        const WeatherIcons = await WeatherIconsJSON.json();
        console.log(WeatherIcons);

        const WeatherDetails = await WeatherDetailsJSON.json();
        console.log(WeatherDetails)
        console.log(WeatherDetailsJSON)

        const WeatherObject = {
            address: await WeatherDetails.resolvedAddress,
            temperature: await WeatherDetails.currentConditions.temp,
            description: await WeatherDetails.description,
            conditions: await WeatherDetails.currentConditions.conditions,
            icon: await WeatherDetails.currentConditions.icon
        }

        return WeatherObject
    } catch (error) {
        ErrorFunction();
    }
    
}


