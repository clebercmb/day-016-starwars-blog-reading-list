import React from "react";
import PropTypes from "prop-types";
import "./Resource.css";
import { Link } from "react-router-dom";

function Resource(props) {
	console.log("*******Resource*********");

	let numberPattern = /\d+/g;
	let resourceId = props.url.match(numberPattern).toString();

	const url = "/resources/" + resourceId;

	console.log(url);

	function resetState(e) {
		debugger;
		console.log("Reset Sate");
	}

	return (
		<div className="card cardResource">
			<Link to={url} onClick={e => resetSate(e)}>
				<img src={"/img/" + props.img} className="card-img-top" alt="..." />
			</Link>
			<div className="card-body">
				<h6 className="card-title">{props.title}</h6>

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
	name_img: PropTypes.string,
	url: PropTypes.string
};

/* 
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>

*/

export default Resource;
