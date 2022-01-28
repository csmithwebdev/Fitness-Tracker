import React from 'react'
import { Row, Col} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
	return (
			<Col lg={2} className="sidebar-col">
				<div className="two wide column sidebar">
						<h3>Menu</h3>
					<ul className="side-nav">
					<li className="side-nav-title side-nav-item">Navigation</li>
						<Row>
							<Col lg={1}>
								<i className="bi bi-calendar-check"></i>
							</Col>
							<Col>
								<li className="side-nav-item side-nav-link"><a href="#">Calendar</a></li>
							</Col>
						</Row>
					</ul>
				</div>
			</Col>
	)
}