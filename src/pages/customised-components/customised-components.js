import React, { useState } from "react";
import "./customised-components.scss";
import { Loader, GetImageButton } from "../../components";

const CustomisedComponents = () => {
	const [imageUrl, setImageUrl] = useState("");
	const [loading, setLoading] = useState(false);

	return (
		<div className="customised-components-page-wrapper">
			{loading && <Loader />}
			<h5 className={"content-block"}>Customised Components</h5>
			<div className="content-wrapper">
				<GetImageButton
					getApiUrl="https://source.unsplash.com/random"
					onClickCallback={() => setLoading(true)}
					apiSuccessCallback={url => setImageUrl(url)}
					apiFailureCallback={console.log}
					apiFinalCallback={() => setLoading(false)}
					text="Get Random Image"
					disabled={loading}
				/>
				{typeof imageUrl === "string" && imageUrl.length > 0 && (
					<img src={imageUrl} alt="random pic from Unsplash" />
				)}
			</div>
		</div>
	);
};

export default CustomisedComponents;
