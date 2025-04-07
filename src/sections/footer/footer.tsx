import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <ul>
                <h3>Links úteis</h3>
                <li><a href="#1">Agendamentos</a></li>
                <li><a href="#2">Localização</a></li>
                <li><a href="#3">Equipe</a></li>
            </ul>
            <ul>
                <h3>Contatos</h3>
                <li>(+351) 987 654 321</li>
                <li>clinicasaude@email.com</li>
            </ul>
            <ul>
                <h3>Redes Sociais</h3>
                <div className="icons">
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Footer
