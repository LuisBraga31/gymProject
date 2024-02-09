import '../../styles/components/contato.sass'

export default function Contato() {

    return (
        <div id="contato">
            <h1> CONTATO </h1>
            <form>
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="Digite seu Email" required />
                <textarea placeholder="Digite aqui ..." name="message"></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}