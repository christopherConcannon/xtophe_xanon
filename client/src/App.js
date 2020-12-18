import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bistrot from './pages/Bistrot'
import Quixote from './pages/Quixote'
import Myco from './pages/Myco'
import Eclectica from './pages/Eclectica'
import Contact from './pages/Contact'

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path='/bistrot' component={Bistrot} />
			<Route exact path='/quixote' component={Quixote} />
			<Route exact path='/myco' component={Myco} />
			<Route exact path='/eclectica' component={Eclectica} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/' component={Home} />
			<Footer />
		</Router>
	)
}

export default App
