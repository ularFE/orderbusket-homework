import React, { useState } from "react";
import scss from "./Menu.module.scss";
import Result from "../result/Result";

const Menu = ({ menu }) => {
	const [meniList, setMenuList] = useState([]);
	const [countUs, setCountUs] = useState([]);
	const handleAdd = (id) => {
		const findMenu = meniList.find((item) => item.id === id);
		if (findMenu) {
			const menuData = menu.find((item) => item.id === id);
			const menuDataObj = {
				id: findMenu.id,
				name: findMenu.name,
				price: (findMenu.price += menuData.price),
				count: (findMenu.count += 1),
				img: findMenu.img,
			};
			const menuFilter = meniList.filter((item) => item.id !== id);
			setMenuList([...menuFilter, menuDataObj]);
		} else {
			const menuData = menu.find((item) => item.id === id);
			const menuCount = { ...menuData, count: 1 };
			meniList.push(menuCount);
		}
		setCountUs([findMenu]);
	};
	return (
		<div>
			<h1>MENU</h1>
      <div className={scss.hmpg}>
      <div className={scss.menuBox}>
				{menu.map(({ id, name, price, img }) => {
					return (
						<div onClick={() => handleAdd(id)} className={scss.menu}>
							<img src={img} alt={name} />
							<h3>{name}</h3>
							<h4>{price}</h4>
						</div>
					);
				})}
			</div>
			<Result menu={menu} meniList={meniList} setMenuList={setMenuList} />
      </div>
		</div>
	);
};

export default Menu;
