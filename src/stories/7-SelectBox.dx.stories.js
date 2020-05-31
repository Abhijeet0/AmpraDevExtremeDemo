import React from "react";
import { SelectBox } from "devextreme-react";
import { selectBoxData } from "./constants";

export default {
	title: "SelectBox",
	component: SelectBox
};

export const SelectBoxInput = () => {
	return (
		<div>
			<p>
				Select box with key-value objects specifying the{" "}
				<code>displayExpr</code> and <code>valueExpr</code>
			</p>
			<SelectBox
				dataSource={selectBoxData}
				displayExpr="country"
				valueExpr="id"
				showClearButton={true}
				searchEnabled={true}
				minSearchLength={2}
				showDataBeforeSearch={true}
				searchTimeout={100}
			/>
		</div>
	);
};
