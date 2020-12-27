import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ navItems }) => {
	const [ click, setClick ] = useState(false)

	// if any li link is clicked (it will be definition be in the ul) we want to close the dropdown
	const handleClick = () => setClick(!click)

	return (
		<ul
			onClick={handleClick}
			className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
		>
      {navItems.map((item, idx) => (
        <li key={idx}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
		</ul>
	)
}

export default Dropdown
