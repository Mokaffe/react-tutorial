import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './hello'
import {ClickComponent, InputComponent} from './ClickComponent'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <ClickComponent></ClickComponent>
        <br></br>
        <br></br>
        <InputComponent></InputComponent>
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();