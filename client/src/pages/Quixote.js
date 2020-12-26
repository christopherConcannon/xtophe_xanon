import React from 'react'
import { quixoteImages as images } from '../data'

import Work from '../components/Work'
import Pagination from '../components/Pagination'

const Quixote = () => {

	return (
		<React.Fragment>
			<section className='Quixote showcase work'>
				<div id='portfolio-imgs' className='container'>
					<h1>Quixote</h1>
					{images.map((img) => <Work key={img.imgSrc} {...img} />)}
				</div>
			</section>
			<section className='description'>
				<p>Images created by Xtophe Xanon in Austin, Texas</p>
			</section>
      <Pagination lPage='bistrot' rPage='myco' />
		</React.Fragment>
	)
}

export default Quixote
