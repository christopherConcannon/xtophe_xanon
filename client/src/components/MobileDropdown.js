import React from 'react'
import { Link } from 'react-router-dom'

const MobileDropdown = ({ handleMobileClick }) => {
	return (
		<ul className='mobile-dropdown-menu'>
			<li>
				<Link to='/bistrot' onClick={() => handleMobileClick()}>
					bistrot
				</Link>
			</li>
			<li>
				<Link to='/quixote' onClick={() => handleMobileClick()}>
					quixote
				</Link>
			</li>
			<li>
				<Link to='/myco' onClick={() => handleMobileClick()}>
					myco
				</Link>
			</li>
			<li>
				<Link to='/eclectica' onClick={() => handleMobileClick()}>
					eclectica
				</Link>
			</li>
		</ul>
	)
}

export default MobileDropdown
