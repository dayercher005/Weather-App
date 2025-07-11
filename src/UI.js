export {WeatherAppEventListeners}

function ModalEventListeners() {

    const LocationModal = document.querySelector("#LocationDialog");

    function OpenModal() {
        const modalButton = document.querySelector("#LocationChanger");

        modalButton.addEventListener("click", () => {
            LocationModal.showModal();
        })
    }

    function CloseModal() {
        const submitButton = document.querySelector("#submitModal");
        
        submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            LocationModal.close();
        })
    }

    return {OpenModal, CloseModal}
}


function WeatherAppEventListeners() {
    const LocationModal = ModalEventListeners();
    LocationModal.OpenModal();
    LocationModal.CloseModal();
}