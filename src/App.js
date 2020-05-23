import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage";

class App extends React.Component{
    render()
    {
        return (
           <div className={'h-100 App'}>
               <Header></Header>
                   <HomePage/>
               <Footer/>
           </div>
        )
    }
}

export default App;
