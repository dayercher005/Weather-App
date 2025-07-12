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

function RenderDisplay() {

    const currentLocation = document.querySelector("#currentLocation");
    const LocationInput = document.querySelector("#LocationInput");
    const currentWeatherDetails = WeatherLocationFetcher(LocationInput.value);
    currentLocation.textContent = `Current Location: ${LocationInput.value}`;

    const locationTemperature = document.querySelector("#locationTemperature");
    
}


function WeatherAppEventListeners() {
    const LocationModal = ModalEventListeners();
    LocationModal.OpenModal();
    LocationModal.CloseModal();
}