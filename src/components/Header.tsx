import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

    return (
        <>
            <Navbar
                title={title}
            ></Navbar>
            <div className="flex">
                <Sidebar />
                <div className="content">
                    
                </div>
            </div>
        </>
    )
}

export default Header