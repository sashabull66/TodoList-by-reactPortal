import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {Navbar} from "./components/Navbar";
import {TodoList} from "./components/TodoList";
import {Info} from "./components/Info";
import {BeforeDeleteModal} from "./components/BeforeDeleteModal";

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
            {/*<Portal><h1>dsfdsfdsf</h1></Portal>*/}
            {/*<BeforeDeleteModal/>*/}
        </BrowserRouter>
    );
}

export default App;

const styles = {
    container: {
        width: '100%',
    },
}