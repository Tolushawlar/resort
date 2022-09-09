import React, { Component } from 'react';
import load from '../images/gif/loading-gear.gif';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
              <h4>Rooms Data Loading</h4> 
              <img src={load} alt=""/>
            </div>
        )
    }
}
