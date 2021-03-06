import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Dropdown from './Dropdown'
import MobileDropdown from './MobileDropdown'

import { homeGridItems as navItems } from '../data'

const Navbar = () => {
	const activeStyle = {
		backgroundRepeat   : 'repeat-x',
		backgroundImage    : 'linear-gradient(to right, currentColor 100%, currentColor 0)',
		backgroundSize     : '1px 1px',
		backgroundPosition : '0 calc(100% - 0.8em)'
	}

	const [ showDropdown, setShowDropdown ] = useState(false)
	const [ showMobileDropdown, setShowMobileDropdown ] = useState(false)
	const [ checked, setChecked ] = useState(false)
	const checkboxRef = useRef()

	useEffect(
		() => {
			if (checkboxRef) {
				checkboxRef.current.checked = checked
			}
		},
		[ checked ]
	)

	useEffect(
		() => {
			if (checkboxRef.current.checked) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'scroll'
			}
		},
		[ checked ]
	)

	function handleMobileClick() {
		setChecked(false)
	}

	return (
		<nav id='navbar' className='container'>
			<div className='logo'>
				<Link to='/'>Xtophe Xanon</Link>
			</div>
			<ul className='nav-items'>
				<li
					className='nav-dropdown-container'
					onMouseEnter={() => setShowDropdown(true)}
					onMouseLeave={() => setShowDropdown(false)}
				>
					<button>Imagen</button>
					{showDropdown && <Dropdown navItems={navItems} />}
				</li>

				<li>
					<NavLink to='/contact' activeStyle={activeStyle}>
						Contact
					</NavLink>
				</li>
			</ul>

			<div className='overlay-wrap'>
				<input
					type='checkbox'
					className='toggler'
					onClick={() => setChecked(!checked)}
					ref={checkboxRef}
				/>
				<div className='hamburger'>
					<div />
				</div>
				<div className='menu'>
					<div>
						<div>
							<ul>
								<li
									className='nav-dropdown-container'
									onMouseEnter={() => setShowMobileDropdown(true)}
									onMouseLeave={() => setShowMobileDropdown(false)}
								>
									<button>Imagen</button>
									{showMobileDropdown && <MobileDropdown navItems={navItems} handleMobileClick={handleMobileClick}/>}
								</li>
								<li>
									<NavLink to='/contact' onClick={() => handleMobileClick()}>
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
