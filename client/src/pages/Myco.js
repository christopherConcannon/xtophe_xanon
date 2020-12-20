import React from 'react'
import { Link } from 'react-router-dom'
import { mycoImages as images } from '../data'

import Work from '../components/Work'
import Pagination from '../components/Pagination'

const Myco = () => {
	return (
		<React.Fragment>
			<section className='Myco showcase'>
				<div id='portfolio-imgs' className='container'>
					<h1>Myco</h1>
					{images.map((img) => <Work key={img.imgSrc} {...img} />)}
				</div>
			</section>
			<section className='description'>
				<p>Images in the key of mushroom</p>
			</section>
      <Pagination lPage='quixote' rPage='eclectica' />
		</React.Fragment>
	)
}

export default Myco
