import React from "react";
import rigoImage from "../../../dist/img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../component/titlebar/TitleBar";
import TitleBar from "../component/titlebar/TitleBar";
import CardLatestList from "../component/CardLatestList/CardLatestList";

const Home = () => (
	<div className="text-center mt-5">
		<CardLatestList title="CardLatestList" />
	</div>
);

export default Home;
