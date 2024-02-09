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
                <li><Link to="#"> Home </Link ></li>
                <li><Link to="#infos"> Infos </Link></li>
                <li><Link to="#ofertas"> Ofertas </Link></li>
                <li><Link to="#"> Sobre </Link></li>
                <li><Link to="#"> Contato </Link></li>
            </ul>

        </nav>

    )

}