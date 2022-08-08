import React from "react";
import "./catagories.css";
import burgerImage from "../../images/burger.png";
import pizzaImage from "../../images/pizza.png";
import sandwichImage from "../../images/sandwich.png";
import sladImage from "../../images/salad.png";
import fruitImage from "../../images/vegetable.png";
import juiceImage from "../../images/juice.png";

function CatagoriesSection() {
	return (
		<div className="container">
			<div className="card">
				<img src={burgerImage} alt="Person" className="card__image" />
				<p className="card__name">Burgers</p>

				<button className="btn draw-border">Order Now</button>
			</div>{" "}
			<div className="card">
				<img src={pizzaImage} alt="Person" className="card__image" />
				<p className="card__name">Pizza</p>

				<button className="btn draw-border">Order Now</button>
			</div>{" "}
			<div className="card">
				<img src={sandwichImage} alt="Person" className="card__image" />
				<p className="card__name">Sandwichs</p>

				<button className="btn draw-border">Order Now</button>
			</div>{" "}
			<div className="card">
				<img src={sladImage} alt="Person" className="card__image" />
				<p className="card__name">Salads</p>

				<button className="btn draw-border">Order Now</button>
			</div>
			<div className="card">
				<img src={fruitImage} alt="Person" className="card__image" />
				<p className="card__name">Fruits</p>

				<button className="btn draw-border">Order Now</button>
			</div>
			<div className="card">
				<img src={juiceImage} alt="Person" className="card__image" />
				<p className="card__name">Juice</p>

				<button className="btn draw-border">Order Now</button>
			</div>
		</div>
	);
}

export default CatagoriesSection;
