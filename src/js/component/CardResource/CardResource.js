import React from "react";
import PropTypes from "prop-types";

function CardResource(props) {
	return (
		<div>
			<i>{props.title}</i>
		</div>
	);
}

CardResource.propTypes = {
	title: PropTypes.string
};

export default CardResource;
