import React from 'react'
import { Link } from 'react-router-dom'

const Quixote = () => {
	return (
		<React.Fragment>
			<section className='Quixote showcase work'>
				<div id='portfolio-imgs' className='container'>
					<h1>Quixote</h1>
					<div data-aos='fade-up'>
						<img className='rsp-image' src='images/sky-3-3x2-solarize.jpg' alt='sky solarize' />
					</div>
					<div data-aos='fade-up'>
						<img className='rsp-image' src='images/sky-2-3x2-rekt.jpg' alt='sky rekt' />
					</div>
					<div data-aos='fade-up'>
						<img className='rsp-image' src='images/aurore-3x2.jpg' alt='aurore' />
					</div>
					<div data-aos='fade-up'>
						<img className='rsp-image' src='images/nest-2x3-cutout.jpg' alt='nest cutout' />
					</div>
					<div data-aos='fade-up'>
						<img className='rsp-image' src='images/sky-1-3x2-filter.jpg' alt='sky filter' />
					</div>
					<div data-aos='fade-up'>
						<img className='rsp-image' src='images/sky-4-3x2.jpg' alt='sky' />
					</div>
				</div>
			</section>
			<section className='description'>
				<p>Images created by Xtophe Xanon in Austin, Texas</p>
			</section>
			<section className='pagination container'>
				
					<Link to='/bistrot'>
						<svg className='caret-left-icon' width='18' height='32' viewBox='0 -1 9 16'>
							<polyline
								stroke='#000'
								fill='none'
								strokeMiterlimit='10'
								points='7.3,14.7 2.5,8 7.3,1.2'
							/>
						</svg>
						<h2>bistrot</h2>
					</Link>
					<Link to='/myco'>
						<h2>Myco</h2>
						<svg className='caret-right-icon' width='18' height='32' viewBox='0 -1 9 16'>
							<polyline
								stroke='#000'
								fill='none'
								strokeMiterlimit='10'
								points='1.6,1.2 6.5,7.9 1.6,14.7'
							/>
						</svg>
					</Link>
			</section>
		</React.Fragment>
	)
}

export default Quixote
