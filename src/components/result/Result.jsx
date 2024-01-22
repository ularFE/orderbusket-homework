import React from "react";
import scss from "./Result.module.scss";

const Result = ({ meniList }) => {
	return (
		<div className={scss.res}>
			{meniList.map(({ name, count, price }) => {
				return (
					<div className={scss.resultBox}>
						<h2>{name}</h2>
						<p>price:{price}</p>
						<p>count:{count}</p>
            <button>delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default Result;
