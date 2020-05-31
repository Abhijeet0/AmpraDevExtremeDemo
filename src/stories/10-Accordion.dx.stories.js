import React from "react";

import { Accordion } from "devextreme-react";
import { longTabs } from "./constants";

export default {
	title: "Accordion",
	component: Accordion
};

var accordionData = [
	{
		firstName: "John",
		lastName: "Smith",
		birthDate: "1986/03/14",
		position: "Network Administrator"
	},
	{
		firstName: "Samantha",
		lastName: "Jones",
		birthDate: "1972/11/13",
		position: "Technical Writer"
	}
];

export const SimpleAccordion = () => (
	<div>
		<p>Simple one-at-a-time accordions with styling</p>
		<Accordion
			dataSource={accordionData}
			style={{
				backgroundColor: "rgba(0,0,0,0.7)",
				color: "white",
				textTransform: "capitalize",
				border: "1px solid lightgrey"
			}}
			itemTitleRender={({ position }) => (
				<span style={{ color: "white" }}>{position}</span>
			)}
			itemRender={data => (
				<div>
					{Object.keys(data).map(key => (
						<p>
							{key}: {data[key]}
						</p>
					))}
				</div>
			)}
		/>
	</div>
);

export const CustomAccordion = () => {
	return (
		<div>
			<p>Individually Collapsible accordions without animations</p>
			<Accordion
				dataSource={longTabs}
				collapsible={true}
				multiple={true}
				animationDuration={0}
				itemTitleRender={({ icon, title }) => (
					<span>
						<i className={`dx-icon-${icon}`} /> {title}
					</span>
				)}
			/>
		</div>
	);
};
