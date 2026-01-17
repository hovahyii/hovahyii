import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mastering Git & GitHub Workshop | Interactive Lecture Deck',
    description: 'Learn Git & GitHub from basics to AI-assisted workflows. Interactive workshop with live demos covering version control, branching, collaboration, and GitHub features.',
    keywords: ['Git', 'GitHub', 'Workshop', 'Tutorial', 'Version Control', 'Branching', 'Collaboration'],
    authors: [{ name: 'Jehovah Yii Zui Hon (Hovah)', url: 'https://hovahyii.vercel.app' }],
    openGraph: {
        title: 'Mastering Git & GitHub Workshop',
        description: 'Interactive workshop covering Git fundamentals, branching, collaboration, and AI-assisted workflows.',
        url: 'https://hovahyii.vercel.app/git-lecture-deck',
        siteName: 'Hovah Yii',
        images: [
            {
                url: 'https://hovahyii.vercel.app/og-git-workshop.png',
                width: 1200,
                height: 630,
                alt: 'Git & GitHub Workshop - Interactive Lecture Deck',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mastering Git & GitHub Workshop',
        description: 'Interactive workshop covering Git fundamentals, branching, collaboration, and AI-assisted workflows.',
        images: ['https://hovahyii.vercel.app/og-git-workshop.png'],
    },
};

export default function GitLectureDeckLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
