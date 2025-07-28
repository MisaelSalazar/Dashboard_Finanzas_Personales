import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

    return (
        <>
            <nav className="navbar navbar-dark bg-primary mb-4">
                <h1 className="navbar-brand p-2">{title}</h1>
            </nav>
        </>
    )
}

export default Header