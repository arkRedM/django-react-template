import React from 'react';
import './style.css';

let logo = require('../../media/favicon-96x96.png');


class ExampleView extends React.Component{
    render(){
        return (
            <div className="image-container">
                <img src={logo} alt="logo" />
            </div>
        )
    }
}

export { ExampleView };