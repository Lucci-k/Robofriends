import React, {Component, Suspense} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'

// import Header from '../components/Header';
// built-in code splitting react lazy
const Header = React.lazy(() => import('../components/Header'));

class MainPage extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

    filterRobots = robots => {
        return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
    }

	render() {
		const {onSearchChange, robots, isPending} = this.props;
		
		return isPending ?
			<h1>Loading...</h1> :
			(
			<div className='tc'>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
				</Suspense>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={this.filterRobots()}/>
					</ErrorBoundry>
				</Scroll>
			</div>
			);
	}
}

export default MainPage;
