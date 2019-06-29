import React, { Component } from 'react'
import Particles from 'react-particles-js'

const particleOpt = {
    particles: {
        number: {
            value: 10
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: '#000',
            // width: 100
        },
        move: {
            speed: 0.5,
            direction: "top",
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse: {
                distance: 50,
                duration: 0.4
            }
        }
    }

}
export default class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="main">
                    <img className="logo" src={require("../../img/Logo2-01.svg")} alt=""></img>
                    {/* <Particles params={particleOpt}>
                    </Particles> */}


                    <h1 className="lg-heading">
                        Zachary <span className="text-secondary">Bogard</span>
                    </h1>
                    <h2 className="sm-heading">
                        Software Developer | Designer
                </h2>
                    {/* <h4 className="bio">Bio</h4> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, pariatur.
                        Deserunt placeat sequi aspernatur tenetur? Consectetur debitis dolorum
                        laborum doloremque non recusandae adipisci accusamus excepturi,
                        omnis quisquam corporis facilis optio cum quaerat,
                        asperiores ipsam vel enim doloribus nisi alias? Qui dolor consequuntur
                    consectetur non fugiat fugit voluptate vel, repellendus quia.</p>
                    <div className="icons">
                        <a href="">
                            <i className="fab fa-linkedin fa-2x"></i>
                            <i className="fab fa-github fa-2x"></i>
                            <i className="fab fa-behance fa-2x"></i>
                            <i className="fab fa-codepen fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}
