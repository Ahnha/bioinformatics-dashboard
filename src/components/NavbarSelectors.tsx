import React from 'react';

interface NavbarSelectorsProps {
    navbarPosition: string;
    setNavbarPosition: (position: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
}

const NavbarSelectors: React.FC<NavbarSelectorsProps> = ({ navbarPosition, setNavbarPosition, theme,
    setTheme }) => (
    <div style={getSelectorContainerStyle(navbarPosition)}>
        <label htmlFor="theme-select" style={{ marginRight: '5px' }} />

        <select
            id="theme-select"
            value={theme}
            onChange={(e) => {
                const newTheme = e.target.value;
                const link = document.getElementById('theme-stylesheet') as HTMLLinkElement | null;
                if (link) {
                    const timestamp = new Date().getTime();
                    link.href = `${process.env.PUBLIC_URL}/styles/${newTheme}.css?t=${timestamp}`;
                }
                setTheme(newTheme);
            }}
            style={{ marginRight: '15px' }}
        >
            <option value="classic">Classic</option>
            <option value="minimal">Minimal</option>
            <option value="modern">Modern</option>
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