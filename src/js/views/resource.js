import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import ResourceContent from "../component/ResourceContent/ResourceContent";
import "../../styles/resource.css";

const Resource = props => {
	console.log("*******View Resource");
	const { store, actions } = useContext(Context);
	let url = "https://swapi.co/api/people/" + props.match.params.theid + "/";
	//console.log(props);

	if (store.resource == null || store.resource.url != url) {
		actions.getResource(url);
		console.log(">>>>>3:");
		console.log(store.resource);
	}
	let character = store.resource;

	let img = null;
	let name = null;
	if (character != null) {
		img =
			character.name
				.split(" ")
				.join("_")
				.toLowerCase() + ".jpg";
		name = character.name;
	}

	console.log(img);

	console.log(">>>>>4:");
	console.log(character);
	console.log(img);

	return (
		<div className="resource">
			<ResourceContent title={name} img={img} />
		</div>
	);
};

Resource.propTypes = {
	match: PropTypes.object
};

export default Resource;
