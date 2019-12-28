import React from "react";
import PropTypes from "prop-types";

function CardRightContent(props) {
	return <div>{props.title}</div>;
}

CardRightContent.propTypes = {
	title: PropTypes.string
};

export default CardRightContent;
