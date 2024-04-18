// JavaScript for adding and deleting product cards
document.addEventListener("DOMContentLoaded", function() {
    const carList = document.getElementById("car-list");

    // Sample car data
    const cars = [
        { model: "E-Class", price: "$50,000", image: "mercedes1.jpg" },
        { model: "S-Class", price: "$80,000", image: "mercedes2.jpg" }
    ];

    // Display cars
    cars.forEach(function(car, index) {
        addCar(card, index);
    });

    // Function to add car card
    function addCar(carData, index) {
        const carCard = document.createElement("div");
        carCard.classList.add("car");

        const img = document.createElement("img");
        img.src = carData.image;
        img.alt = carData.model;
        carCard.appendChild(img);

        const modelParagraph = document.createElement("p");
        modelParagraph.textContent = "Model: " + carData.model;
        carCard.appendChild(modelParagraph);

        const priceParagraph = document.createElement("p");
        priceParagraph.textContent = "Price: " + carData.price;
        carCard.appendChild(priceParagraph);

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";
        buyButton.addEventListener("click", function() {
            alert("Product bought: " + carData.model);
        });
        carCard.appendChild(buyButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            carList.removeChild(carCard);
        });
        carCard.appendChild(deleteButton);

        carList.appendChild(carCard);
    }
});




document.querySelector('.cards').addEventListener('click', e => {
	if (e.target.classList.contains('delete-btn')) {

		if (!document.startViewTransition) {
			e.target.parentElement.remove();
			return;
		}

		e.target.parentElement.style.viewTransitionName = 'targeted-card';
		document.startViewTransition(() => {
			e.target.parentElement.remove();
		});
	}
})

document.querySelector('.add-btn').addEventListener('click', async (e) => {
	const template = document.getElementById('card');

	const $newCard = template.content.cloneNode(true);

	if (!document.startViewTransition) {
		document.querySelector('.cards').appendChild($newCard);
		return;
	}

	$newCard.firstElementChild.style.viewTransitionName = 'targeted-card';
	$newCard.firstElementChild.style.backgroundColor = `#${ Math.floor(Math.random()*16777215).toString(16)}`;
	const transition = document.startViewTransition(() => {
		document.querySelector('.cards').appendChild($newCard);
	});

	await transition.finished;

	const rand = window.performance.now().toString().replace('.', '_') + Math.floor(Math.random() * 1000);
	document.querySelector('.cards .card:last-child').style.viewTransitionName = `card-${rand}`;

});