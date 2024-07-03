// layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'My Last Paper - Conclude My 4 Years of Studies at UMPSA',
  description: 'A countdown to my last paper concluding 4 years of studies at UMPSA (Universiti Malaysia Pahang Al-Sultan Abdullah) - Memorial Moment',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <main className="text-center p-6 md:p-12">
        {children}
      </main>
    </div>
  );
}
