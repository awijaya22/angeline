import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    render()
    {
        return (
           <div>
               <Header></Header>
               <Footer/>
           </div>
        )
    }
}

export default App;
