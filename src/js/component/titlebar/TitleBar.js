import React from "react";
import PropTypes from "prop-types";
import "./TitleBar.css";

function TitleBar(props) {
	return (
		<div className="titleBar">
			<h5>{props.title}</h5>
		</div>
	);
}

TitleBar.propTypes = {
	title: PropTypes.string
};

export default TitleBar;
