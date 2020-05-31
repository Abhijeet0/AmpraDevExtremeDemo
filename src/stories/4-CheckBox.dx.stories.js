import React, { useState } from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import CheckBox from "devextreme-react/check-box";

export default {
	title: "Checkbox",
	component: CheckBox
};

export const CheckboxInput = () => {
	const [value, setValue] = useState(false);
	const handleValueChange = ({ value }) => setValue(value);

	return (
		<CheckBox
			text={value ? "Uncheck me" : "Check me"}
			value={value}
			onValueChanged={handleValueChange}
		/>
	);
};
