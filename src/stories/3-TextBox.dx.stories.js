import React from "react";
import { TextBox } from "devextreme-react";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

export default {
	title: "Textbox",
	component: TextBox
};

export const InputModes = () => (
	<div>
		<p>
			Text Input field with placeholder, max length of 10 characters, and
			text clear button
		</p>
		<TextBox
			showClearButton
			placeholder="placeholder text here..."
			maxLength={10}
		/>
		<p>
			Text Input field <b>Readonly</b>
		</p>
		<TextBox readOnly defaultValue="this text cannot be edited" />
		<p>
			Text Input field with <b>search</b> mode
		</p>
		<TextBox mode="search" showClearButton placeholder="search text here" />
		<p>
			Text Input field with <b>masking</b> and validations
		</p>
		<TextBox mask="+\91 X00 000 0000" maskRules={{ X: /[5-9]/ }} />
		<p>
			Text Input field with <b>text</b> mode
		</p>
		<TextBox mode="text" showClearButton placeholder="your text here" />
		<p>
			Text Input field with <b>url</b> mode
		</p>
		<TextBox mode="url" showClearButton placeholder="abc.pqr" />
		<p>
			Text Input field with <b>email</b> mode
		</p>
		<TextBox mode="email" showClearButton placeholder="xyz@abc.pqr" />
		<p>
			Text Input field with <b>password</b> mode
		</p>
		<TextBox mode="password" showClearButton placeholder="password here" />
	</div>
);
