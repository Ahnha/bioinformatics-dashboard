import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';
import Navbar from './Navbar';

const App: React.FC = () => {
    const [navbarPosition, setNavbarPosition] = useState<string>('navbar-top');

    return (
        <BrowserRouter>
            <Navbar
                navbarPosition={navbarPosition}
                setNavbarPosition={setNavbarPosition}
            />
            <div style={getContentStyle(navbarPosition)}>
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
};

// This computes padding for the main content based on the navbar position
const getContentStyle = (position: string): React.CSSProperties => {
    switch (position) {
        case 'navbar-top':
            return { paddingTop: '50px' };
        case 'navbar-bottom':
            return { paddingBottom: '50px' };
        case 'navbar-left':
            return { paddingLeft: '150px' };
        case 'navbar-right':
            return { paddingRight: '150px' };
        default:
            return {};
    }
};

export default App;