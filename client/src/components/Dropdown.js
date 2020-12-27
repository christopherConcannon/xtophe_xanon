import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
	const [ showDropdown, setShowDropdown ] = useState(false)

	return (
		<ul className='dropdown-menu'>
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
