import React from "react";
import PropTypes from "prop-types";
import "./CardRightContent.css";

function CardRightContent(props) {
	return (
		<div className="card d-flex flex-wrap cardRightContent">
			<div className="cardRightContent-img">
				<img src={props.img} className="" alt="..." />
			</div>
			<div className="">
				<h6 className="card-title">{props.title}</h6>

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

/*

		<div className="card cardRightContent">
			<div className="half image-left">
				<img src={props.img} className="" alt="..." />
			</div>
			<div className="">
				<h6 className="card-title">{props.title}</h6>

				<a href="/#" className="dataBank">
					DATABANK
				</a>
			</div>
		</div>

*/
