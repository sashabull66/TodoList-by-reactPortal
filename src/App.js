import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import {Navbar} from "./components/Navbar";
import {TodoList} from "./components/TodoList";
import {Info} from "./components/Info";

function App() {
    return (
        <BrowserRouter>
            <div style={styles.container}>
                <Navbar/>
                <Switch>
                    <Route path='/' render={()=><TodoList/>} exact/>
                    <Route path='/info' render={()=><Info/>}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

const styles = {
    container: {
        width: '100%',
    },
}