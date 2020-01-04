import React from "react";
import PropTypes from "prop-types";
import "./Resource.css";

function Resource(props) {
	return (
		<div className="card cardResource">
			<img src={"/img/" + props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h6 className="card-title">{props.title}</h6>
				{props.img}

				<a href="/#" className="dataBank">
					DATABANK
				</a>
			</div>
		</div>
	);
}

Resource.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	description: PropTypes.string,
	name_img: PropTypes.string
};

export default Resource;
