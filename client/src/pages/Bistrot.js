import React from 'react'
import { Link } from 'react-router-dom'
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
			<Pagination direx='page-nav-right' rPage={{ to: 'quixote', title: 'Quixote' }} />
			{/* <section className='pagination container page-nav-right'>
				<Link to='/quixote'>
					<h2>Quixote</h2>
					<svg className='caret-right-icon' width='18' height='32' viewBox='0 -1 9 16'>
						<polyline
							stroke='#000'
							fill='none'
							strokeMiterlimit='10'
							points='1.6,1.2 6.5,7.9 1.6,14.7'
						/>
					</svg>
				</Link>
			</section> */}
		</React.Fragment>
	)
}

export default Bistrot
