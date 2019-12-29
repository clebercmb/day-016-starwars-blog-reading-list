import React from "react";
import PropTypes from "prop-types";

function TitleBar(props) {
	return <h3 className="divTitle">{props.title}</h3>;
}

TitleBar.propTypes = {
	title: PropTypes.string
};

export default TitleBar;
