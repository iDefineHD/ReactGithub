import React, { Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GitHubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css'

const App = () => {
	return (
		<GitHubState>
			<AlertState>
			<Router>
				<div className='App'>
					<Navbar title='GitHub Finder' icon='fab fa-github' />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								component={Home}
							/>
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								component={User}
							/>
							<Route component={NotFound}/>
						</Switch>
					</div>
				</div>
			</Router>
			</AlertState>
		</GitHubState>
	)
}

export default App
