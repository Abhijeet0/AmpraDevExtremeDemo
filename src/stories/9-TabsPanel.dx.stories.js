import React, { useState } from "react";
import TabPanel from "devextreme-react/tab-panel";
import { longTabs } from "./constants";

export default {
	title: "Tabs Panel",
	component: TabPanel
};

const TabTitle = ({ text, icon }) => (
	<span>
		<i class={`dx-icon-${icon}`} />
		{"  " + text}
	</span>
);
const TabContentItem = ({ data, index }) => {
	const { id, text, icon, content } = data;

	return (
		<div style={{ padding: 15, cursor: "grab" }}>
			<p>
				id: <code>{id}</code>
			</p>
			<p>
				text: <code>{text}</code>
			</p>
			<p>
				icon: <code>{icon}</code>
			</p>
			<p>
				content: <code>{content}</code>
			</p>
		</div>
	);
};

export const TabsPanel = () => {
	const [tabIndex, setTabIndex] = useState(0);

	const onOptionChanged = ({ name, value }) => {
		if (name === "selectedIndex") {
			console.log(name, value);
			setTabIndex(value);
		}
	};

	return (
		<div>
			<p>
				Simple tabs panel with custom title and content render
				functions. Keyboard navigation supported.
			</p>
			<TabPanel
				width={300}
				dataSource={longTabs}
				selectedIndex={tabIndex}
				onOptionChanged={onOptionChanged}
				itemTitleRender={({ icon }) => (
					<i className={`dx-icon-${icon}`} />
				)}
				itemRender={({ text }) => <p style={{ margin: 15 }}>{text}</p>}
			/>
			<br />

			<p>
				Tabs Panel with <code>loop</code>, <code>animationEnabled</code>{" "}
				and <code>swipeEnabled</code> set to <code>true</code>
			</p>
			<p>
				It has a custom component for the tab content and supports swipe
				gestures and keyboard navigation as well.
			</p>
			<TabPanel
				height={210}
				dataSource={longTabs}
				selectedIndex={tabIndex}
				onOptionChanged={onOptionChanged}
				loop={true}
				itemTitleRender={TabTitle}
				itemComponent={TabContentItem}
				animationEnabled={true}
				swipeEnabled={true}
			/>
		</div>
	);
};
