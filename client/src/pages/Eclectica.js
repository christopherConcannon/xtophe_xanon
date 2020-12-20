import React from 'react'
import { Link } from 'react-router-dom'
import { eclecticaImages as images } from '../data'

import Work from '../components/Work'
import Pagination from '../components/Pagination'

const Eclectica = () => {
	return (
		<React.Fragment>
			<section className='showcase'>
				<div id='portfolio-imgs' className='container'>
					<h1>Eclectica</h1>
					{images.map((img) => <Work key={img.imgSrc} {...img} />)}
				</div>
			</section>
      <Pagination lPage='myco' />
		</React.Fragment>
	)
}

export default Eclectica
