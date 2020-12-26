import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
	const [ showDropdown, setShowDropdown ] = useState(false)

	const renderLinks = () => {
		return (
			<ul>
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

	return (
		<li className='nav-dropdown'>
			<button
				onMouseEnter={() => setShowDropdown(true)}
				onMouseLeave={() => setShowDropdown(false)}
			>
				Imagen
			</button>
      { showDropdown && renderLinks()}
		</li>
	)
}

export default Dropdown
