import React, { useState } from 'react';
import GCProject from '../../projects/GCProject';
import FastaCleanerProject from '../../projects/FastaCleanerProject';
import RnaSeqAnalysisProject from '../../projects/RnaSeqAnalysisProject';

type TabKey = 'gc' | 'fasta' | 'rna';

const ProjectTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('gc');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'gc':
                return <GCProject />;
            case 'fasta':
                return <FastaCleanerProject />;
            case 'rna':
                return <RnaSeqAnalysisProject />;
            default:
                return null;
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Projects</h1>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <button onClick={() => setActiveTab('gc')}>GC Calculator</button>
                <button onClick={() => setActiveTab('fasta')}>FASTA Cleaner</button>
                <button onClick={() => setActiveTab('rna')}>RNA-Seq Analysis</button>
            </div>
            <div>{renderTabContent()}</div>
        </div>
    );
};

export default ProjectTabs;
