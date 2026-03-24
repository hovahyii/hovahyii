import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Proposal Defense - Jehovah Yii Zui Hon',
    description: 'A Machine Learning Framework for Automated Geospatial Root Cause Analysis in 5G Radio Frequency Optimization.',
    openGraph: {
        title: 'Master\'s Thesis Proposal Defense',
        description: 'A Machine Learning Framework for Automated Geospatial Root Cause Analysis in 5G Radio Frequency Optimization.',
        images: [
            {
                url: '/master/chart/Fig_Problem_Clusters.png',
                width: 1200,
                height: 630,
                alt: '5G Spatial Diagnosis Clusters',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Master\'s Thesis Proposal Defense',
        description: 'A Machine Learning Framework for Automated Geospatial Root Cause Analysis in 5G Radio Frequency Optimization.',
        images: ['/master/chart/Fig_Problem_Clusters.png'],
    },
};

export default function ProposalDefenceSlides() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <iframe 
                src="/master/proposal%20defence%20slides.html" 
                className="w-full h-full border-none"
                title="Proposal Defence Slides"
                allowFullScreen
            />
        </div>
    );
}
