import React from 'react'
import { Row, Col} from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
	return (
			<Col lg={2} className="sidebar-col">
				<div className="two wide column sidebar">
						<Link to="/"><img className="logo" src="https://www.csmithwebdev.com/wp-content/uploads/2022/01/logo.svg"/></Link>
					<ul className="side-nav">
					<li className="side-nav-title side-nav-item">Navigation</li>
						<Row>
							<Col lg={1}>
								<i className="bi bi-calendar-check"></i>
							</Col>
							<Col>
							<Link style={{textDecoration: 'none'}} className="link" to="/calendar">
								<li className="side-nav-item side-nav-link">Calendar</li>
							</Link>
							</Col>
						</Row>
						<Row>
							<Col lg={1}>
								<i className="bi bi-card-checklist"></i>
							</Col>
							<Col>
								<Link style={{textDecoration: 'none'}} to="/goals">
								<li className="side-nav-item side-nav-link">Fitness Goals</li>
								</Link>
							</Col>
						</Row>
					</ul>
				</div>
			</Col>
	)
}