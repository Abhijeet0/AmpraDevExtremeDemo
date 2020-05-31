import React from "react";
import { Button } from "devextreme-react/button";
import notify from "devextreme/ui/notify";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

export default {
	title: "Button",
	component: Button
};

const buttonDefaultProps = {
	onClick: () => notify("Button clicked!")
};

export const DefaultText = () => (
	<div>
		<p>
			Default text button with <b>outlined</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="default"
			stylingMode="outlined"
			text="Default"></Button>
		<p>
			Default text button with <b>contained</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="default"
			stylingMode="contained"
			text="Default"></Button>
		<p>
			Default text button with <b>text</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="default"
			stylingMode="text"
			text="Default"></Button>
	</div>
);

export const NormalText = () => (
	<div>
		<p>
			Normal text icon with <b>outlined</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="normal"
			stylingMode="outlined"
			text="Normal"></Button>
		<p>
			Normal text icon with <b>contained</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="normal"
			stylingMode="contained"
			text="Normal"></Button>
		<p>
			Normal text icon with <b>text</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="normal"
			stylingMode="text"
			text="Normal"></Button>
	</div>
);

export const BackText = () => (
	<div>
		<p>
			Back button with <b>outlined</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="back"
			stylingMode="outlined"></Button>
		<p>
			Back button with <b>contained</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="back"
			stylingMode="contained"></Button>
		<p>
			Back button with <b>text</b> style
		</p>
		<Button {...buttonDefaultProps} type="back" stylingMode="text"></Button>
	</div>
);

export const DangerText = () => (
	<div>
		<p>
			Danger text button with <b>outlined</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="danger"
			stylingMode="outlined"
			text="Danger"></Button>
		<p>
			Danger text button with <b>contained</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="danger"
			stylingMode="contained"
			text="Danger"></Button>
		<p>
			Danger text button with <b>text</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="danger"
			stylingMode="text"
			text="Danger"></Button>
	</div>
);

export const SuccessText = () => (
	<div>
		<p>
			Success text button with <b>outlined</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="success"
			stylingMode="outlined"
			text="Success"></Button>
		<p>
			Success text button with <b>contained</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="success"
			stylingMode="contained"
			text="Success"></Button>
		<p>
			Success text button with <b>text</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="success"
			stylingMode="text"
			text="Success"></Button>
	</div>
);

export const NormalIconText = () => (
	<div>
		<p>
			Normal Icon button with <b>outlined</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="normal"
			icon="refresh"
			stylingMode="outlined"
			text="Refresh"></Button>
		<p>
			Normal Icon button with <b>contained</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="normal"
			icon="refresh"
			stylingMode="contained"
			text="Refresh"></Button>
		<p>
			Normal Icon button with <b>text</b> style
		</p>
		<Button
			{...buttonDefaultProps}
			type="normal"
			icon="refresh"
			stylingMode="text"
			text="Refresh"></Button>
	</div>
);
