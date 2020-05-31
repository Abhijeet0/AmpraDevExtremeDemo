import React, { useState } from "react";

import { Menu } from "devextreme-react";
import { productsMenu } from "./constants";
import notify from "devextreme/ui/notify";

export default {
	title: "Menu",
	component: Menu
};

export const DropdownMenus = () => {
	const [selected, setSelected] = useState(productsMenu[0].items[0]);
	const onItemClick = e => {
		setSelected(e.itemData);
		notify(e.itemData.name + " has been selected!");
	};

	return (
		<div>
			<h3>Options:</h3>
			<Menu
				dataSource={productsMenu}
				displayExpr="name"
				showFirstSubmenuMode={{
					name: "onHover",
					delay: { show: 0, hide: 500 }
				}}
				orientation="horizontal"
				submenuDirection="auto"
				hideSubmenuOnMouseLeave={true}
				onItemClick={onItemClick}
				activeStateEnabled={true}
			/>
			{selected && (
				<p style={{ margin: "30px 10px" }}>
					<p>Product ID: {selected.id}</p>
					<p>Name: {selected.name}</p>
					<p>Price: {`$${selected.price}`}</p>
				</p>
			)}
		</div>
	);
};
