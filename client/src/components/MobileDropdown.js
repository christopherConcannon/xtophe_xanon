import React from 'react'
import { Link } from 'react-router-dom'

const MobileDropdown = ({ navItems, handleMobileClick }) => {
	return (
		<ul className='mobile-dropdown-menu'>
      {navItems.map((item, idx) => (
        <li>
          <Link to={item.link} onClick={() => handleMobileClick()}>
            {item.title}
          </Link>
        </li>
      ))}
		</ul>
	)
}

export default MobileDropdown
