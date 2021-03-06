import React from 'react';
import Style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
	return (
		<nav className = {Style.nav__wrapper}>
			<h2>Navigation</h2>
			<ul>
				<li className = {Style.item}>
					<NavLink to="/profile" activeClassName={Style.active}>Profile</NavLink>
				</li>
				<li className = {Style.item}>
					<NavLink to="/dialogs" activeClassName={Style.active}>Messages</NavLink>
				</li>
				<li className = {Style.item}>
					<NavLink to="/Users" activeClassName={Style.active}>Users</NavLink>
				</li>
				<li className = {Style.item}>
					<NavLink to="/Settings" activeClassName={Style.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;