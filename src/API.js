export {LocationFetcher}

async function LocationFetcher(location) {
    const Details = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=`,{
        mode: 'cors'
    });
    console.log(Details)
}

LocationFetcher