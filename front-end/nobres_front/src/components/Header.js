import React from 'react'
import LogoNobres from '../img/nobreslogo.png'
import { Link } from 'react-scroll';
import '../styles/Style.css'


export default function Header() {

    const color = {
        color: '#FF5F00'
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white shadow">
                <div className="container-fluid">
                    
                    {/* Logo */}
                    <a className="navbar-brand" href='#'>
                        <img src={LogoNobres} width={'110px'} ></img>
                    </a>
                    
                    {/* Sanduiche */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* sanduiche on */}
                    <div className="collapse navbar-collapse justify-content-end corTexto"  id="navbarSupportedContent" style={color}>
                        <ul className="nav gap-3" >
                            <li className="nav-item" style={color}>
                                <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500} className="nav-link active" style={color}>CARDÁPIO</Link>
                            </li>
                            <li className="nav-item">
                            <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500} className="nav-link active" style={color}>RESERVAS</Link>
                            </li>
                            <li className="nav-item">
                            <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500} className="nav-link active" style={color}>CONTATO</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
