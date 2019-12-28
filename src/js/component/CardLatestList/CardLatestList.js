import React from "react";
import CardResource from "../CardResource/CardResource";
import CardRightContent from "../CardRighContent/CardRightContent";
import PropTypes from "prop-types";

function CardLatestList(props) {
	return (
		<div>
			<i>{props.title}</i>
			<CardResource title="CardResource" />
			<CardRightContent title="CardRightContent" />
		</div>
	);
}

CardLatestList.propTypes = {
	title: PropTypes.string
};

export default CardLatestList;
