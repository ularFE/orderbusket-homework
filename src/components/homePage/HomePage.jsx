import { useState } from "react";
import scss from "./HomePage.module.scss";
import Menu from "../menu/Menu";
import Hamburger from "../../components/img/hamburger.png";
import Cola from "../../components/img/cola.svg";
import Coffee from "../../components/img/coffee.png";
import Tea from "../../components/img/tea.svg";
import Cheeseburger from "../../components/img/cheeseburger.svg";
import Fries from "../../components/img/fries.svg";

const data = [
	{
		id: 1,
		img: Hamburger,
		name: "Hamburger",
		price: 100,
	},
	{
		id: 2,
		img: Coffee,
		name: "Coffee",
		price: 60,
	},
	{
		id: 3,
		img: Tea,
		name: "Tea",
		price: 20,
	},
	{
		id: 4,
		img: Cola,
		name: "Cola",
		price: 70,
	},
	{
		id: 5,
		img: Cheeseburger,
		name: "Cheese burger",
		price: 120,
	},
	{
		id: 6,
		img: Fries,
		name: "Fries",
		price: 90,
	},
];

const HomePage = () => {
	const [menu, setMenu] = useState(data);

	return (
		<div className={scss.homePage}>
			<Menu menu={menu} setMenu={setMenu} />
			
		</div>
	);
};

export default HomePage;
