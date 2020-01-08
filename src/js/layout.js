import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Resources from "./views/resources";
import Resource from "./views/resource";
import injectContext from "./store/appContext";

import Header from "./component/Header/Header";
import { Footer } from "./component/footer";
import NavBar from "./component/navbar/Navbar";

/* Components:
- Header (Oliver)
- Navbar
- SearchBar
- TitleBar 1
- CardBellowContentList
- 	CardBellowContent 1
-   CardBellowContent 2
	...
-	CardBellowContent n
- TitleBar 2	  (Cleber)
- 
- LatestList
- 	CardResource 
-	CardRightContent 1
- 	CardRightContent 2
-	CardRightContent 3
- TitleBar 3


*/

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Header />
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/resources/:theid" component={Resource} />
						<Route path="/resources" component={Resources} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
