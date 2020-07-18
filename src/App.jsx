import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import KinkListNew from './components/kinklist-new/KinkListNew';
import KinkListEdit from './components/kinklist-edit/KinkListEdit';
import NoMatch from './components/NoMatch';
import './Theme.scss';

function App() {
  return (
    <React.Fragment>
      <div id="app-container">
        <Router>
          <Switch>
            {/* <Route exact path="/" render={(props) => <QuestionView {...props} kinksJson={kinksJson} />} /> */}
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/kinklist/new" render={(props) => <KinkListNew {...props} />} />
            <Route exact path="/kinklist/edit/:id" render={(props) => <KinkListEdit {...props} />} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}
export default App;
