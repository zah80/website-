document.addEventListener("DOMContentLoaded", function() {
    const carList = document.querySelector(".cards");
    const addBtn = document.querySelector(".add-btn");
    const addCarForm = document.querySelector(".add-car-form");

    // Display existing cars
    const cars = [
        // Existing car data
    ];
    cars.forEach(car => addCar(car));

    // Event listener for "Add" button
    addBtn.addEventListener("click", function() {
        // Show the add car form
        addCarForm.style.display = "block";
    });

    // Event listener for "Add Car" button
    document.getElementById("add-car-btn").addEventListener("click", function() {
        const model = document.getElementById("model").value;
        const price = document.getElementById("price").value;
        const image = document.getElementById("image").value;

        // Create a new car object
        const newCar = { model: model, price: price, image: image };

        // Add the new car to the list
        addCar(newCar);

        // Clear input fields and hide the form
        document.getElementById("model").value = "";
        document.getElementById("price").value = "";
        document.getElementById("image").value = "";
        addCarForm.style.display = "none";
    });

    // Event listener for "Update" button
    carList.addEventListener("click", function(event) {
        if (event.target.classList.contains("update-btn")) {
            const card = event.target.closest(".card");
            const model = card.querySelector(".model").textContent;
            const price = card.querySelector(".price").textContent;

            // Prompt user to enter new information
            const newModel = prompt("Enter new model:", model);
            const newPrice = prompt("Enter new price:", price);

            // Update card information
            card.querySelector(".model").textContent = newModel;
            card.querySelector(".price").textContent = newPrice;
        } else if (event.target.classList.contains("delete-btn")) {
            // Remove the card from the list
            const card = event.target.closest(".card");
            card.remove();
        }
    });

    // Function to add car card
    function addCar(carData) {
        // Create car card and append to car list
        const carCard = document.createElement("li");
        carCard.classList.add("card");

        const carDiv = document.createElement("div");
        carDiv.classList.add("car");

        const img = document.createElement("img");
        img.src = carData.image;
        img.alt = carData.model;
        carDiv.appendChild(img);

        const modelParagraph = document.createElement("p");
        modelParagraph.textContent = "Model: ";
        const modelSpan = document.createElement("span");
        modelSpan.classList.add("model");
        modelSpan.textContent = carData.model;
        modelParagraph.appendChild(modelSpan);
        carDiv.appendChild(modelParagraph);

        const priceParagraph = document.createElement("p");
        priceParagraph.textContent = "Price: ";
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("price");
        priceSpan.textContent = carData.price;
        priceParagraph.appendChild(priceSpan);
        carDiv.appendChild(priceParagraph);

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        carDiv.appendChild(updateButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        carDiv.appendChild(deleteButton);

        carCard.appendChild(carDiv);
        carList.appendChild(carCard);
    }
});
