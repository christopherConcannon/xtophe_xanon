import React from 'react'

const Work = ({ imgSrc, alt }) => {
	return (
		<div data-aos='fade-up'>
			<img className='rsp-image' src={`images/${imgSrc}`} alt={alt} />
		</div>
	)
}

export default Work
