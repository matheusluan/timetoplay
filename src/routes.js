import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from './Components/Home/Home.js';
import OldWoman from './Components/OldWoman/OldWoman.js';


function Routes(){
   return(
       <BrowserRouter>
            <Route path="/" exact component={Home} />       
            <Route path="/oldwoman" exact component={OldWoman} />       
       </BrowserRouter> 
   ); 
}

export default Routes;