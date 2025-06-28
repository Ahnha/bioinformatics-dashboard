import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarSelectors from './NavbarSelectors';

interface NavbarProps {
    navbarPosition: string;
    setNavbarPosition: (position: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navbarPosition, setNavbarPosition }) => (
    <nav className={navbarPosition}>
        <NavbarLinks navbarPosition={navbarPosition} />
        <NavbarSelectors navbarPosition={navbarPosition} setNavbarPosition={setNavbarPosition} />
    </nav>
);

export default Navbar;