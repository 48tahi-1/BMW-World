
const car1Select = document.getElementById("car1");
const car2Select = document.getElementById("car2");
const compareBtn = document.getElementById("compareBtn");

const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");

const comparisonBody = document.getElementById("comparisonBody");
const comparisonSection = document.getElementById("comparisonSection");
const compareMessage = document.getElementById("compareMessage");


// Load BMW models into dropdowns
function loadCarOptions() {

    bmwModels.forEach(car => {

        const option1 = document.createElement("option");
        option1.value = car.id;
        option1.textContent = car.name;

        const option2 = option1.cloneNode(true);

        car1Select.appendChild(option1);
        car2Select.appendChild(option2);

    });

}


// Compare selected models
function compareCars() {

    const car1 = bmwModels.find(
        car => car.id === car1Select.value
    );

    const car2 = bmwModels.find(
        car => car.id === car2Select.value
    );

    if (!car1 || !car2) {

        comparisonSection.hidden = true;

        compareMessage.textContent =
            "Please select both BMW models.";

        return;
    }

    if (car1.id === car2.id) {

        comparisonSection.hidden = true;

        compareMessage.textContent =
            "Please select two different BMW models.";

        return;
    }

    heading1.textContent = car1.name;
    heading2.textContent = car2.name;

    const details = [

        ["Category", car1.category, car2.category],

        ["BMW Family", car1.family, car2.family],

        ["Body Type", car1.body, car2.body],

        ["Powertrain", car1.powertrain, car2.powertrain],

        ["Description", car1.description, car2.description]

    ];

    comparisonBody.innerHTML = "";

    details.forEach(item => {

        const row = document.createElement("tr");

        const featureCell = document.createElement("td");
        const firstCell = document.createElement("td");
        const secondCell = document.createElement("td");

        featureCell.textContent = item[0];
        firstCell.textContent = item[1] || "Not available";
        secondCell.textContent = item[2] || "Not available";

        row.appendChild(featureCell);
        row.appendChild(firstCell);
        row.appendChild(secondCell);

        comparisonBody.appendChild(row);

    });

    comparisonSection.hidden = false;

    compareMessage.textContent =
        "Successfully comparing " + car1.name + " and " + car2.name + ".";

}


// Button event
compareBtn.addEventListener("click", compareCars);


// Load models
loadCarOptions();
