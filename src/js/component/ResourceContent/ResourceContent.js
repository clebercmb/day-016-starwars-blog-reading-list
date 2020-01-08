import React from "react";
import PropTypes from "prop-types";
import "./ResourceContent.css";

function ResourceContent(props) {
	console.log("*******ResourceContent*********");
	return (
		<div className="card ResourceContent">
			<img src={"/img/" + props.img} className="card-img-top" alt="..." />

			<div className="card-body">
				<h6 className="card-title">{props.title}</h6>
			</div>
		</div>
	);
}

ResourceContent.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string
};

export default ResourceContent;
