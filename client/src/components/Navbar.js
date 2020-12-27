import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Dropdown from './Dropdown'

const Navbar = () => {
	const activeStyle = {
		backgroundRepeat   : 'repeat-x',
		backgroundImage    : 'linear-gradient(to right, currentColor 100%, currentColor 0)',
		backgroundSize     : '1px 1px',
		backgroundPosition : '0 calc(100% - 0.8em)'
	}

	const [ showDropdown, setShowDropdown ] = useState(false)

	return (
		<nav id='navbar' className='container'>
			<div className='logo'>
				<Link to='/'>Xtophe Xanon</Link>
			</div>
			<ul className='nav-items'>
				{/* <li><NavLink exact to="/" activeStyle={activeStyle}>Imagen</NavLink></li> */}
				<li
					className='nav-dropdown-container'
					onMouseEnter={() => setShowDropdown(true)}
					onMouseLeave={() => setShowDropdown(false)}
				>
					<button>Imagen</button>
					{showDropdown && <Dropdown />}
				</li>

				<li>
					<NavLink to='/contact' activeStyle={activeStyle}>
						Contact
					</NavLink>
				</li>
			</ul>

			<div className='overlay-wrap'>
				<input type='checkbox' className='toggler' />
				{/*inner empty div will become hamburger line */}
				<div className='hamburger'>
					<div />
				</div>
				<div className='menu'>
					<div>
						<div>
							<ul>
								{/* <li>
									<a href='index.html'>Work</a>
								</li> */}
								<li
									className='nav-dropdown-container'
									onMouseEnter={() => setShowDropdown(true)}
									onMouseLeave={() => setShowDropdown(false)}
								>
									<button>Imagen</button>
									{showDropdown && <Dropdown />}
								</li>
								<li>
									<NavLink to='/contact' activeStyle={activeStyle}>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
