import React from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarSelectors from './NavbarSelectors';

interface NavbarProps {
    navbarPosition: string;
    setNavbarPosition: (position: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navbarPosition, setNavbarPosition, theme,
    setTheme }) => (
    <nav className={navbarPosition}>
        <NavbarLinks navbarPosition={navbarPosition} />
        <NavbarSelectors
            navbarPosition={navbarPosition}
            setNavbarPosition={setNavbarPosition}
            theme={theme}
            setTheme={setTheme}
        />
    </nav >
);

export default Navbar;