import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTumblr, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<div id="divHeader">
			<nav className="navbar navbar-light bg-light">
				<div id="socialDiv">
					<ul>
						<li>
							<a href="https://www.facebook.com/StarWars">
								<FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: "#E3DDDD" }} />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/starwars/">
								<FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: "#E3DDDD" }} />
							</a>
						</li>
						<li>
							<a href="https://starwars.tumblr.com/">
								<FontAwesomeIcon icon={faTumblr} size="1x" style={{ color: "#E3DDDD" }} />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/starwars">
								<FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: "#E3DDDD" }} />
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/user/starwars">
								<FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: "#E3DDDD" }} />
							</a>
						</li>
						<li>
							<a id="kids">
								<span>|</span> kids
							</a>
						</li>
					</ul>
				</div>
				<a className="navbar-brand">
					<img src="https://i.ibb.co/cDLTFq9/logo-transparencia.png" />
				</a>
				<form>
					<div>
						<input
							id="search"
							className="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
						<span className="input-group-addon">
							<faSearch icon={faSearch} />
						</span>
					</div>
					<div id="login">
						<ul>
							<li id="loginLi">
								<a>Login /</a>
							</li>
							<li>
								<a>/ Sign up</a>
							</li>
						</ul>
					</div>
				</form>
			</nav>
		</div>
	);
}

export default Header;
