import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './component/pages/Home';
import Students from './component/pages/Students';
import Staff from './component/pages/Staff';
import Settings from './component/pages/Settings';
import AddStudent from './component/pages/AddStudent';
import AddStaff from './component/pages/AddStaff';

const App = () => {
    return (
       <Router>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/students" component={Students}/>
               <Route exact path="/add-student" component={AddStudent}/>
               <Route exact path="/staff" component={Staff}/>
               <Route exact path="/add-staff" component={AddStaff}/>
               <Route exact path="/settings" component={Settings}/>
           </Switch>
       </Router>
    )
}

export default App;