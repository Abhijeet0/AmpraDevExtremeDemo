import React, { useState } from "react";

import { Tabs } from "devextreme-react";
import { longTabs } from "./constants";

export default {
	title: "Tabs",
	component: Tabs
};

export const FullWidthTabs = () => {
	const [tabIndex, setTabIndex] = useState(0);

	const onOptionChanged = ({ name, value }) => {
		if (name === "selectedIndex") setTabIndex(value);
	};

	return (
		<div>
			<p>Full width Tabs selector</p>
			<Tabs
				dataSource={longTabs}
				selectedIndex={tabIndex}
				onOptionChanged={onOptionChanged}
			/>

			<p>Scrollable Tabs selector</p>
			<Tabs
				dataSource={longTabs}
				width={400}
				scrollByContent={true}
				showNavButtons={true}
				selectedIndex={tabIndex}
				onOptionChanged={onOptionChanged}
			/>

			<p style={{ border: "1px solid lightgrey", padding: "15px" }}>
				{longTabs[tabIndex].content}
			</p>
		</div>
	);
};
