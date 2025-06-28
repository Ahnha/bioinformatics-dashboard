import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const AboutPage: React.FC = () => {
    const [content, setContent] = useState<string>('Loading...');

    useEffect(() => {
        fetch('/about.md')
            .then((res) => res.text())
            .then(setContent)
            .catch((err) => setContent(`Error loading content: ${err}`));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default AboutPage;

/*
  Pattern: Dynamic Content Loading
  -------------------------------
  Loads content from a markdown file, keeps the page easy to update
  without touching the code.
*/