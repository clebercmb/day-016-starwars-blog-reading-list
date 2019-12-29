import React from "react";
import PropTypes from "prop-types";
import "./CardRightContent.css";

function CardRightContent(props) {
	return (
		<div className="card row d-flex flex-row cardRightContent">
			<div className="col">
				<img src={props.img} className="img-fluid" alt="..." />
			</div>
			<div className="col">
				<h5 className="card-title">{props.title}</h5>

				<a href="/#" className="dataBank">
					DATABANK
				</a>
			</div>
		</div>
	);
}

CardRightContent.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	description: PropTypes.string
};

export default CardRightContent;
