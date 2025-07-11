async function LocationFetcher(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=`,{
        mode: 'cors'
    });
}