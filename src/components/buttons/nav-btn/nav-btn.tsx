import './nav-btn.css'

type Btn = {
    id: string
    name: string
}[]



function NavBtn() {

    const btnLabel: Btn = [
        { id: '#1', name: 'Agendar' },
        { id: '#2', name: 'Onde estamos' },
        { id: '#3', name: 'Equipe' },
        { id: '#4', name: 'Entre em contato' },
    ]

    return (
        <>
            {btnLabel.map((btnName) => (
                <a className="nav-btn" href={btnName.id}>{btnName.name}</a>
            ))}
        </>
    )
}

export default NavBtn
