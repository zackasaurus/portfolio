import React, { Component } from 'react'
import Home from './Home'
import Projects from './Projects';
import Contact from './Contact';


export default class MainContent extends Component {
    render() {
        return (
            <div>
                <Home id="particles.js"></Home>
                <Projects></Projects>
                <Contact></Contact>
            </div>


        )
    }
}
