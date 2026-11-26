
const detailsContainer = document.getElementById("carDetails");

const selectedId = new URLSearchParams(window.location.search).get("id");

const selectedCar = bmwModels.find(function (car) {
    return car.id === selectedId;
});

if (!selectedCar) {

    detailsContainer.innerHTML = `
        <div class="details-panel">
            <h2>BMW Model Not Found</h2>
            <p>Please select a BMW from the models collection.</p>
        </div>
    `;

} else {

    detailsContainer.innerHTML = `
        <div class="details-panel">

            <p class="section-label">${selectedCar.family}</p>

            <h2>${selectedCar.name}</h2>

            <p>${selectedCar.description}</p>

            <div class="spec-grid">

                <div class="spec-item">
                    <span>Category</span>
                    <strong>${selectedCar.category}</strong>
                </div>

                <div class="spec-item">
                    <span>Model Family</span>
                    <strong>${selectedCar.family}</strong>
                </div>

                <div class="spec-item">
                    <span>Body Style</span>
                    <strong>${selectedCar.body}</strong>
                </div>

                <div class="spec-item">
                    <span>Powertrain</span>
                    <strong>${selectedCar.powertrain}</strong>
                </div>

            </div>

            <p>
                Specifications and availability can differ depending
                on country, model year and selected variant.
            </p>

        </div>
    `;

}
