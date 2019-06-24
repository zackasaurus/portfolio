import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="main" id="home">
                <h1 className="lg-heading">
                    Zachary <span className="text-secondary">Bogard</span>
                </h1>
                <h2 className="sm-heading">
                    Software Developer / Designer
                </h2>
                <div className="icons">
                    <a href="">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <i className="fab fa-github fa-2x"></i>
                        <i className="fab fa-behance fa-2x"></i>
                        <i className="fab fa-codepen fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}
