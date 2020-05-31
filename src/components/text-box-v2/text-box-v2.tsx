import React from "react";
import TextBox from "devextreme-react/text-box";
import "./text-box-v2.scss";

interface props {
	prefix?: React.Component | string | undefined;
	suffix?: React.Component | string | undefined;
	placeholder?: string | undefined;
	onPrefixClick?(params?: any): any;
	onSuffixClick?(params?: any): any;
}

export const TextBoxV2 = (props: props) => {
	const inputProps = {
		placeholder: "your text here",
		prefix: "x",
		suffix: "y",
		onPrefixClick: () => alert("prefix clicked"),
		onSuffixClick: () => alert("suffix clicked"),
		...props
	};

	return (
		<div className="text-box-v2-wrapper">
			<div
				className="prefix-wrapper"
				onClick={() => inputProps.onPrefixClick()}>
				{inputProps.prefix}
			</div>
			<TextBox className="text-box-v2" {...inputProps}></TextBox>
			<div
				className="suffix-wrapper"
				onClick={() => inputProps.onSuffixClick()}>
				{inputProps.suffix}
			</div>
		</div>
	);
};

export default TextBoxV2;
