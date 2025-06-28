import React from 'react';

interface NavbarSelectorsProps {
    navbarPosition: string;
    setNavbarPosition: (position: string) => void;
}

const NavbarSelectors: React.FC<NavbarSelectorsProps> = ({ navbarPosition, setNavbarPosition }) => (
    <div style={getSelectorContainerStyle(navbarPosition)}>
        <label htmlFor="theme-select" style={{ marginRight: '5px' }} />
        <select id="theme-select" onChange={(e) => switchTheme(e.target.value)} style={{ marginRight: '15px' }}>
            <option value="classic">Classic</option>
            <option value="minimal">Minimal</option>
        </select>

        <label htmlFor="position-select" style={{ marginRight: '5px' }} />
        <select
            id="position-select"
            value={navbarPosition}
            onChange={(e) => setNavbarPosition(e.target.value)}
        >
            <option value="navbar-top">Top Menu</option>
            <option value="navbar-bottom">Bottom Menu</option>
            <option value="navbar-left">Left Menu</option>
            <option value="navbar-right">Right Menu</option>
        </select>
    </div>
);

export default NavbarSelectors;

import { getSelectorContainerStyle } from '../helpers/navbar/selectorHelpers';
import { switchTheme } from '../helpers/theme/themeHelpers';