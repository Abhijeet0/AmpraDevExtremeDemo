import React from "react";
import LoaderSVG from "../../assets/Wedges-3s-200px.svg";
import "./loader.scss";

const Loader: React.FC = () => (
	<div className="loader-wrapper">
		<img src={LoaderSVG} alt="loader" />
		{/* <p>Loading, please wait</p> */}
	</div>
);

export default Loader;
