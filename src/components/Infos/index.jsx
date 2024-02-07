import '../../styles/components/infos.sass'
import InfoBox from './InfoBox'
import fimage1 from '../../assets/1.svg'
import fimage2 from '../../assets/2.svg'
import fimage3 from '../../assets/3.svg'
import fimage4 from '../../assets/4.svg'

export default function Infos() {

    return (
        <div id="infos">
            <h1> Infos </h1>
            <div className="a-container">
                <InfoBox image={fimage1} title="Força e Resistência" />
                <InfoBox image={fimage2} title="Tonifique seu Corpo" />
                <InfoBox image={fimage3} title="Fortaleça-se" />
                <InfoBox image={fimage4} title="Exercícios de Cardio" />
            </div>

        </div>
    )
}