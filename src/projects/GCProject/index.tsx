import React, { useState } from 'react';
import './styles.css';

const GCProject: React.FC = () => {
    const [sequence, setSequence] = useState('');
    const [gcContent, setGcContent] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCalculate = async () => {
        if (!sequence.trim()) {
            setError('Please enter a sequence.');
            return;
        }

        setLoading(true);
        setError('');
        setGcContent(null);

        try {
            const response = await fetch('https://gc-api-m0l2.onrender.com/gc-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sequence }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            setGcContent(data.gc_content);
        } catch (err) {
            console.error(err);
            setError('Failed to calculate GC content. Please try again.');
        }

        setLoading(false);
    };

    return (
        <div className="gc-project-container">
            <h2>GC Content Calculator</h2>
            <textarea
                rows={4}
                cols={50}
                placeholder="Enter your DNA sequence here..."
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
            />
            <br />
            <button onClick={handleCalculate} disabled={loading}>
                {loading ? 'Calculating...' : 'Calculate GC Content'}
            </button>
            {error && <p className="error">{error}</p>}
            {gcContent !== null && (
                <p className="result">GC Content: {gcContent.toFixed(2)}%</p>
            )}
        </div>
    );
};

export default GCProject;
