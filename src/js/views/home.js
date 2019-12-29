import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../component/titlebar/TitleBar";
import TitleBar from "../component/titlebar/TitleBar";
import CardLatestList from "../component/CardLatestList/CardLatestList";

const Home = () => (
	<div className="text-center mt-5">
		<TitleBar title="THE LATEST //" />
		<CardLatestList title="CardLatestList" />
	</div>
);

export default Home;

/*

const Home = () => (
	<div className="text-center mt-5">
		<TitleBar title="STAR WARS: THE RISE OF SKYWALKER //"/>
		<h1>Hello Rigo!</h1>

		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
*/
