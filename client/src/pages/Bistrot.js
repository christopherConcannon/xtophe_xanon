import React from 'react'
import { bistrotImages as images } from '../data'

import Work from '../components/Work'
import Pagination from '../components/Pagination'

const Bistrot = () => {
	return (
		<React.Fragment>
			<section className='Bistrot showcase work'>
				<div id='portfolio-imgs' className='container'>
					<h1>bistrot</h1>
					{images.map((img) => <Work key={img.imgSrc} {...img} />)}
				</div>
			</section>
			<Pagination direx='page-nav-right' rPage='quixote' />
		</React.Fragment>
	)
}

export default Bistrot
