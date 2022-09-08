import React, { useState, useeffect } from "react";
import "./catagories.css";
import burgerImage from "../../images/burger.png";
import pizzaImage from "../../images/pizza.png";
import sandwichImage from "../../images/sandwich.png";
import sladImage from "../../images/salad.png";
import fruitImage from "../../images/vegetable.png";
import juiceImage from "../../images/juice.png";
import { Link } from "react-router-dom";

function CatagoriesSection() {
	const [selected, setSelected] = useState(1);
	return (
		<div className="cat-container">
			<div className="card">
				<img src={burgerImage} alt="Person" className="card__image" />
				<p className="card__name">Burgers</p>

				<Link to="/foods" state={{ selected }}>
					<button className="btn draw-border" onClick={() => setSelected(1)}>
						Order Now
					</button>
				</Link>
			</div>
			<div className="card">
				<img src={pizzaImage} alt="Person" className="card__image" />
				<p className="card__name">Pizza</p>
				<Link to="/foods">
					<button className="btn draw-border" onClick={() => setSelected(2)}>
						Order Now
					</button>
				</Link>
			</div>
			<div className="card">
				<img src={sandwichImage} alt="Person" className="card__image" />
				<p className="card__name">Sandwichs</p>
				<Link to="/foods">
					<button className="btn draw-border" onClick={() => setSelected(3)}>
						Order Now
					</button>
				</Link>
			</div>
			<div className="card">
				<img src={sladImage} alt="Person" className="card__image" />
				<p className="card__name">Salads</p>
				<Link to="/foods">
					<button className="btn draw-border" onClick={() => setSelected(4)}>
						Order Now
					</button>
				</Link>
			</div>
			<div className="card">
				<img src={fruitImage} alt="Person" className="card__image" />
				<p className="card__name">Fruits</p>
				<Link to="/foods">
					<button className="btn draw-border" onClick={() => setSelected(5)}>
						Order Now
					</button>
				</Link>
			</div>
			<div className="card">
				<img src={juiceImage} alt="Person" className="card__image" />
				<p className="card__name">Juice</p>
				<Link to="/foods">
					<button className="btn draw-border" onClick={() => setSelected(6)}>
						Order Now
					</button>
				</Link>
			</div>
		</div>
	);
}

export default CatagoriesSection;
