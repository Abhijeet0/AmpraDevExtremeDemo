import React from "react";
import { Button } from "devextreme-react/button";

const GetImageButton = ({
	getApiUrl = "",
	text = "Get Data",
	disabled = false,
	onClickCallback = console.log,
	apiSuccessCallback = console.log,
	apiFailureCallback = console.log,
	apiFinalCallback = console.log
}) => {
	const getImageUrl = () => {
		fetch(getApiUrl)
			.then(res => res.blob())
			.then(img => {
				const url = URL.createObjectURL(img);
				// console.log(img, url);
				apiSuccessCallback(url);
			})
			.catch(apiFailureCallback)
			.finally(apiFinalCallback);
		onClickCallback();
	};

	return (
		<Button
			type="normal"
			onClick={getImageUrl}
			stylingMode="outlined"
			icon="refresh"
			text={text}
			disabled={disabled}
			className={"btn-refresh-image"}
		/>
	);
};

export default GetImageButton;
