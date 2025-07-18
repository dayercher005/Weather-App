import {WeatherLocationFetcher} from "./API.js"
export {WeatherAppEventListeners}

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
            const WeatherAppDisplay = RenderDisplay()
            WeatherAppDisplay
        })
    }

    return {OpenModal, CloseModal}
}

async function RenderDisplay() {

    const currentLocation = document.querySelector("#currentLocation");
    const LocationInput = document.querySelector("#LocationInput");
    const currentWeatherDetails = await WeatherLocationFetcher(LocationInput.value);

    const LocationChanger = () => {
        currentLocation.textContent = `Current Location: ${currentWeatherDetails.address}`;
    }

    const TemperatureChanger = () => {
        const locationTemperature = document.querySelector("#locationTemperature");
        const FahrenheitTemp = document.querySelector("#Fahrenheit");
        const CelsiusTemp = document.querySelector("#Celsius");

        if(FahrenheitTemp.checked == true){
            locationTemperature.textContent = `Temperature: ${currentWeatherDetails.temperature}ºF`;
        } else if (CelsiusTemp.checked == true){
            locationTemperature.textContent = `Temperature: ${(currentWeatherDetails.temperature - 32) * 5/9}ºC`;
        }
    }
    
    const DescriptionChanger = () => {
        const locationDescription = document.querySelector("#locationDescription");
        locationDescription.textContent = `Weather Description: ${currentWeatherDetails.description}`;
    }

    const ConditionChanger = () => {
        const locationConditions = document.querySelector("#locationConditions");
        locationConditions.textContent = `Weather Conditions: ${currentWeatherDetails.conditions}`;
    }

    const IconChanger = () => {
        const locationIcon = document.querySelector("#locationIcon");
        import(`../images/${currentWeatherDetails.icon}.png`).then(({default: Icon}) => {
            locationIcon.src = Icon;
        })
    }

    return {LocationChanger, TemperatureChanger, DescriptionChanger, ConditionChanger, IconChanger}
}


function WeatherAppEventListeners() {
    const LocationModal = ModalEventListeners();
    LocationModal.OpenModal();
    LocationModal.CloseModal();
}