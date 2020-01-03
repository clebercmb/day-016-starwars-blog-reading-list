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

	return (
		<div className="resources">
			<div className="text-center mt-5r">
				<TitleBar title="People //" />
			</div>

			<div className="d-flex flex-wrap">
				<div className="d-flex flex-wrap">
					<Resource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
					<Resource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>

					<Resource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>

					<Resource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>

					<Resource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>

					<Resource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
				</div>
			</div>
		</div>
	);
};

export default Resources;
