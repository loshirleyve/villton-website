import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Button } from 'antd';

export default class Root extends Component {
  render(){
    return(
        <div>
          {/*<Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link  to="/details">Details</Link>
                </li>
                <li>
                  <Link  to="/list">List</Link>
                </li>
              </ul>

              <Route  path="/" component={App}/>
              <Route  path="/details" component={ComponentDetails}/>
              <Route  path="/list" component={ComponentList}/>
            </div>
          </Router>*/}
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
