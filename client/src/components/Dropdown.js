import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
	// flag to control show/hide of dropdown.  maybe change to show, setShow
	const [ click, setClick ] = useState(false)

	// if any li link is clicked (it will be definition be in the ul) we want to close the dropdown
	const handleClick = () => setClick(!click)

	return (
		<ul
			onClick={handleClick}
			className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
		>
			<li>
				<Link to='/bistrot'>bistrot</Link>
			</li>
			<li>
				<Link to='/quixote'>quixote</Link>
			</li>
			<li>
				<Link to='/myco'>myco</Link>
			</li>
			<li>
				<Link to='/eclectica'>eclectica</Link>
			</li>
		</ul>
	)
}

export default Dropdown
