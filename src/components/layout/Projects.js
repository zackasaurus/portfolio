import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div class="projects">
                <h1>Projects</h1>

                <div className="projects__content">

                    {/* Mortgage Calculator Project */}
                    <h4>Mortgage Calculator</h4>
                    <div className="item">

                        <a href="#!" classMame="img-link">
                            <img src={require("../../img/mortgage-calculator.png")} alt="Mortgage Calculator" />
                        </a>

                        <div className="btn-group">
                            <a href="#" class="btn-light">
                                <i className="fas fa-eye"></i> Project
                            </a>
                            <a href="#" class="btn-dark">
                                <i className="fab fa-github"></i> Github
                            </a>
                        </div>




                    </div>

                    {/* Platform Game */}
                    <h4>Platform Game</h4>

                    <div className="item">
                        <a href="#!">
                            <img src={require("../../img/mortgage-calculator.png")} alt="Mortgage Calculator" />
                        </a>
                        <div className="btn-group">
                            <a href="#!" class="btn-light">
                                <i className="fas fa-eye"></i> Project
                            </a>
                            <a href="#!" class="btn-dark">
                                <i className="fab fa-github"></i> Github
                            </a>
                        </div>

                    </div>

                    <div className="item">

                    </div>
                    <div className="item">

                    </div>
                </div>
            </div>
        )
    }
}
