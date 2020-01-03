/*
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
*/

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import TitleBar from "../component/titlebar/TitleBar";
import Resource from "../component/Resource/Resource";
import "../../styles/resources.css";

const Resources = props => {
	const { store, actions } = useContext(Context);

	console.log("&=*******");
	console.log(store.people.results);

	let people =
		!!store.people.results &&
		store.people.results.map(element => {
			return (
				<Resource
					key={element.name}
					title={element.name}
					img={
						element.name
							.split(" ")
							.join("_")
							.toLowerCase() + ".jpg"
					}
				/>
			);
		});

	return (
		<div className="resources">
			<div className="text-center mt-5r">
				<TitleBar title="People //" />
			</div>

			<div className="d-flex flex-wrap">
				<div className="d-flex flex-wrap">{people}</div>
			</div>
		</div>
	);
};

export default Resources;
