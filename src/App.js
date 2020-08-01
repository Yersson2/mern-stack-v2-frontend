import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList';
import CreateUser from './components/CreateUser';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
     <Router>
      <Navigation/>
      <Route path='/' exact component={ NoteList }/>
      <Route path='/edit/:id' component={ CreateNote }/>
      <Route path='/create' component={ CreateNote }/>
      <Route path='/user' component={ CreateUser }/>
     </Router>
  );
}

export default App;
