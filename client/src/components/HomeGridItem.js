import React from 'react'
import { Link } from 'react-router-dom'

const HomeGridItem = ({link, imgSrc, alt, title}) => {
	return (
		<div className='grid-item'>
			<Link to={link}>
				<img src={`images/${imgSrc}`} className='rsp-image' alt={alt} />
				<div className='grid-item-overlay'>
					<div className='grid-item-text'>
						<h2>{title}</h2>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default HomeGridItem
