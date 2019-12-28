import React from "react";
import PropTypes from "prop-types";

function TitleBar(props) {
	return <h1 className="divTitle">{props.title}</h1>;
}

TitleBar.propTypes = {
	title: PropTypes.string
};

export default TitleBar;
