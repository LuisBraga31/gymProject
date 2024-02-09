import aboutimage from '../../assets/about.png'
import '../../styles/components/sobre.sass'

export default function Sobre() {
    return (
        <div id="sobre">
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1> SAIBA MAIS SOBRE NÓS </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
                    hic illum quidem asperiores similique! Facere velit veniam aliquam quibusdam 
                    atque perspiciatis corporis unde nemo, cumque rem similique nam minima 
                    maxime asperiores illum corporis.
                </p>
                <button> VEJA MAIS</button>
            </div>

        </div>
    )
}