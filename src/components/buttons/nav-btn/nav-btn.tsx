import './nav-btn.css'
import React from 'react'

type Btn = {
    id: string
    name: string
}[]

interface NavBtnProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBtn: React.FC<NavBtnProps> = ({ setIsOpen }) => {
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
            {btnLabel.map((btn, index) => (
                <a key={index} onClick={handleClick} className="nav-btn" href={btn.id}>
                    {btn.name}
                </a>
            ))}
        </>
    )
}

export default NavBtn
