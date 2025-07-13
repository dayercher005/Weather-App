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
            RenderDisplay();
        })
    }

    return {OpenModal, CloseModal}
}

async function RenderDisplay() {

    const currentLocation = document.querySelector("#currentLocation");
    const LocationInput = document.querySelector("#LocationInput");

    const currentWeatherDetails = await WeatherLocationFetcher(LocationInput.value);
    currentLocation.textContent = `Current Location: ${LocationInput.value}`;

    const locationTemperature = document.querySelector("#locationTemperature");
    locationTemperature.textContent = `${currentWeatherDetails.temperature}ºF`;
    
    const locationDescription = document.querySelector("#locationDescription");
    locationDescription.textContent = currentWeatherDetails.description;

    const locationConditions = document.querySelector("#locationConditions");
    locationConditions.textContent = currentWeatherDetails.conditions;
}


function WeatherAppEventListeners() {
    const LocationModal = ModalEventListeners();
    LocationModal.OpenModal();
    LocationModal.CloseModal();
}