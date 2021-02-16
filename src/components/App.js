import React, { useState, useEffect } from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';
import './App.css';


const App = () => {

	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
	     .then(response=> response.json())
	     .then(users => setRobots(users));
	})

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})	
	return !robots.length ?
	<h1 className='tc f2'>Loading</h1> :
	(
	<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots} />
		</Scroll>
	</div>
	);
}


export default App;