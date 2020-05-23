import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage";
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends React.Component{
    render()
    {
        return (
            <Router>
               <div className={'h-100 App'}>
                   <Header></Header>
                   <Switch>
                       <Route path={'/angeline/'} exact>
                           <HomePage/>
                       </Route>
                       <Route path={'/angeline/resume'}>
                           <Resume/>
                       </Route>
                       <Route path={'/angeline/contact'}>
                           <Contact/>
                       </Route>
                       <Route path={'/angeline/about'}>

                       </Route>
                   </Switch>

                   <Footer/>
               </div>
            </Router>
        )
    }
}

export default App;
