import react from "react";
import Header from "./Header";
import MyPost from "./MyPost";
import NoPage from "./NoPage";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import "./App.css";
import { render } from "@testing-library/react";
import React from "react";
import Home from "./Home";
import About from "./About";
export default function App() 
{
  return(
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/post' component={MyPost}/>
        <Route path="" component={NoPage} />
      </Switch>  
    </div>
    </Router>
    
  )
 }
