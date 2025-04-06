import './nav-btn.css'

type Btn = {
    id: string
    name: string
}[]



function NavBtn({ setIsOpen }) {

    const btnLabel: Btn = [
        { id: '#1', name: 'Agendar' },
        { id: '#2', name: 'Onde estamos' },
        { id: '#3', name: 'Equipe' },
        { id: '#4', name: 'Pacientes' },
    ]

    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            {btnLabel.map((btnName, index) => (
                <a key={index} onClick={handleClick} className="nav-btn" href={btnName.id}>{btnName.name}</a>
            ))}
        </>
    )
}

export default NavBtn
