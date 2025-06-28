import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLinksProps {
    navbarPosition: string;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ navbarPosition }) => (
    <div style={getMenuStyle(navbarPosition)}>
        <Link to="/" style={{ margin: '5px' }}>Home</Link>
        <Link to="/projects" style={{ margin: '5px' }}>Projects</Link>
        <Link to="/about" style={{ margin: '5px' }}>About</Link>
    </div>
);

export default NavbarLinks;

import { getMenuStyle } from '../helpers/navbar/menuHelpers';