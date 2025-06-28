import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectTabs from '../components/Tabs/ProjectTabs';

const AppRoutes: React.FC = () => (
    <Routes>
    <Route path= "/" element = {< HomePage />} />
        < Route path = "/projects" element = {< ProjectTabs />} />
            < Route path = "/about" element = {< AboutPage />} />
                </Routes>
  );

export default AppRoutes;
