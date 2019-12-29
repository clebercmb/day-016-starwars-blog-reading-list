import React from "react";
import PropTypes from "prop-types";
import "./CardResource.css";

function CardResource(props) {
	return (
		<div className="card cardResource ">
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="/#" className="dataBank">
					DATABANK
				</a>
			</div>
		</div>
	);
}

CardResource.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	description: PropTypes.string
};

export default CardResource;
