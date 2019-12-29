import React from "react";
import CardResource from "../CardResource/CardResource";
import CardRightContent from "../CardRighContent/CardRightContent";
import PropTypes from "prop-types";
import "./CardLatestList.css";

function CardLatestList(props) {
	return (
		<div className="container custom">
			<div className="row-hl d-flex flex-row">
				<div className="col">
					<CardResource
						img="https://lumiere-a.akamaihd.net/v1/images/ax-tagrin-ship-main_d5f72bb1.jpeg?region=0%2C0%2C1280%2C720&width=600"
						title="DALKOR DAGGER"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
				</div>
				<div className="col ">
					<CardRightContent
						img="https://lumiere-a.akamaihd.net/v1/images/vargo-spaceport-main_dc6a55e9.jpeg?region=0%2C0%2C1280%2C720&width=320"
						title="VARGO SPACEPORT"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
					<CardRightContent
						img="https://lumiere-a.akamaihd.net/v1/images/leechee-main_84a34936.jpeg?region=0%2C33%2C1220%2C687&width=320"
						title="LECHEE"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>

					<CardRightContent
						img="https://lumiere-a.akamaihd.net/v1/images/varkana-main_f6013726.jpeg?region=0%2C0%2C1280%2C720&width=320"
						title="VARKANA"
						description="Some quick example text to build on the card title and make up the bulk of the cards content."
					/>
				</div>
			</div>
		</div>
	);
}

CardLatestList.propTypes = {
	title: PropTypes.string
};

export default CardLatestList;
