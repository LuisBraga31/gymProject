import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

import '../../styles/components/navbar.sass'

export default function NavBar() {

    const [nav, setNav] = useState(false);

    const mudarBackground = () => {
        
        if(window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', mudarBackground)

    return (

        <nav className={nav ? "nav active" : "nav"}>
                
            <Link to="#" className="logo">
                <img src={logo} alt="" />
            </Link>

            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><a href="#"> Home </a ></li>
                <li><a href="#"> Infos </a></li>
                <li><a href="#ofertas"> Ofertas </a></li>
                <li><a href="#sobre"> Sobre </a></li>
                <li><a href="#contato"> Contato </a></li>
            </ul>

        </nav>

    )

}