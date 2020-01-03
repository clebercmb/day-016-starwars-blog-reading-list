import React from "react";
import "./Navbar.css";
import { Nav } from "react-bootstrap";

function NavBar() {
	return (
		<div>
			<Nav className="menuNav justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">News + Blog</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Video</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Films</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3">Series</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-4">Interactive</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-5">Community</Nav.Link>
				</Nav.Item>
				<Nav.Item id="navRight">
					<Nav.Link eventKey="link-6">Databank</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}

export default NavBar;
