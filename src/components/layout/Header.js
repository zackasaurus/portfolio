import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="menu-btn">
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <div className="menu">
                    <ul className="menu-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
