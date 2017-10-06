import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import homeStyle from './home-m.css'
import { DatePicker } from 'antd';

const Home = () => (
    <h2>Home</h2>
);
const About = () => (
    <h2>About</h2>
);
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
            <li><Link to={`${match.url}/components`}>Components</Link></li>
            <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={ Topics } />
        <Route exact path={match.url} render={() => <h3>Place select a topic</h3>}/>
    </div>
);

const Base = () => (
    <Router>
        <div>
            <ul>
                <li className={homeStyle.red}><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route path="/topics" component={ Topics }/>
        </div>
    </Router>
)

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Base/>
            )

    }
}

ReactDOM.render(<HomePage/>, document.querySelector('#main'))

if (module.hot) {
    module.hot.accept();
}
