import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import KinkListNew from './components/kinklist-new/KinkListNew';
import KinkListView from './components/kinklist-view/KinkListView';
import NoMatch from './components/NoMatch';
import './Theme.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* <Route exact path="/" render={(props) => <QuestionView {...props} kinksJson={kinksJson} />} /> */}
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/new" render={(props) => <KinkListNew {...props} />} />
          <Route exact path="/kinklist/:id" render={(props) => <KinkListView {...props} />} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
