import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }

    clickHandler = () => {
        if (this.state.showMenu) {
            // console.log('state is true')
            this.setState({
                showMenu: false
            })
        }
        else {
            this.setState({
                showMenu: true
            })
        }

    }
    render() {

        let menuClass = {
            menuBtn: `menu-btn ${this.state.showMenu ? 'close' : ''}`,
            menuNav: `menu-nav ${this.state.showMenu ? 'show' : ''}`
        }
        // let menuBtnClass = 'show'
        // console.log(this.state.showMenu)
        let menuBtn = <div
            onClick={this.clickHandler}
            className={menuClass.menuBtn}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>


        let menuNav = <ul className={menuClass.menuNav}>
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
        let menu = <div className="menu">
            {menuNav}
        </div>

        // if (!this.state.showMenu) {
        //     menuBtn.classList.add('close');
        //     menu.classList.add('show');
        //     menuNav.classList.add('show');
        // }

        return (
            <header>
                {menuBtn}
                {menu}
            </header>
        )
    }
}
