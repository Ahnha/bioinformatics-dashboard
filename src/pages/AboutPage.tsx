import React from 'react';
import ReactMarkdown from 'react-markdown';
import aboutContent from '../content/aboutContent';

const AboutPage: React.FC = () => (
    <div style={{ padding: '20px' }}>
        <ReactMarkdown>{aboutContent}</ReactMarkdown>
    </div>
);

export default AboutPage;