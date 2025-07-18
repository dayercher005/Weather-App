import {WeatherLocationFetcher} from "./API.js"
export {WeatherAppEventListeners, ErrorFunction}

function ModalEventListeners() {

    const LocationModal = document.querySelector("#LocationDialog");

    function OpenModal() {
        const modalButton = document.querySelector("#LocationChanger");

        modalButton.addEventListener("click", (e) => {
            e.preventDefault();
            LocationModal.showModal();
        })
    }

    function CloseModal() {
        const submitButton = document.querySelector("#submitModal");
        
        submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            LocationModal.close();
            RenderDisplay();  
        })
    }

    return {OpenModal, CloseModal}
}

async function RenderDisplay() {

    const currentLocation = document.querySelector("#currentLocation");
    const LocationInput = document.querySelector("#LocationInput");
    const currentWeatherDetails = await WeatherLocationFetcher(LocationInput.value);
 
    currentLocation.textContent = `Current Location: ${currentWeatherDetails.address}`;
    
    const locationTemperature = document.querySelector("#locationTemperature");
    const FahrenheitTemp = document.querySelector("#Fahrenheit");
    const CelsiusTemp = document.querySelector("#Celsius");

    if(FahrenheitTemp.checked){
        locationTemperature.textContent = `Temperature: ${currentWeatherDetails.temperature}ºF`;
    } else if (CelsiusTemp.checked) {
        locationTemperature.textContent = `Temperature: ${((currentWeatherDetails.temperature - 32) * 5/9).toFixed(1)}ºC`;
    }

    FahrenheitTemp.addEventListener("click", () => {
        locationTemperature.textContent = `Temperature: ${currentWeatherDetails.temperature}ºF`;
    })

    CelsiusTemp.addEventListener("click", () => {
        locationTemperature.textContent = `Temperature: ${((currentWeatherDetails.temperature - 32) * 5/9).toFixed(1)}ºC`;
    })

    
    const locationDescription = document.querySelector("#locationDescription");
    locationDescription.textContent = `Weather Description: ${currentWeatherDetails.description}`;
    
    const locationConditions = document.querySelector("#locationConditions");
    locationConditions.textContent = `Weather Conditions: ${currentWeatherDetails.conditions}`;
    
    
    const locationIcon = document.querySelector("#locationIcon");
    import(`../images/${currentWeatherDetails.icon}.png`).then(({default: Icon}) => {
        locationIcon.src = Icon;
    })
    
}

function ErrorFunction() {
    const currentLocation = document.querySelector("#currentLocation");
    currentLocation.textContent = "Location Not Found !";

    const locationTemperature = document.querySelector("#locationTemperature");
    locationTemperature.textContent = "";

    const locationDescription = document.querySelector("#locationDescription");
    locationDescription.textContent = "";
    
    const locationConditions = document.querySelector("#locationConditions");
    locationConditions.textContent = "";
    
    
    const locationIcon = document.querySelector("#locationIcon");
    locationIcon.src = ""
}



function WeatherAppEventListeners() {
    const LocationModal = ModalEventListeners();
    LocationModal.OpenModal();
    LocationModal.CloseModal();
    RenderTemperatureDisplay();
}