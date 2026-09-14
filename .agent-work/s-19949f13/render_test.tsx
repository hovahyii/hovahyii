import { renderToString } from 'react-dom/server';
    import React from 'react';
    import * as MobiModule from 'E:/hovahyii/app/projects/mobifone-vietnam/page.tsx';
    import * as UModule from 'E:/hovahyii/app/projects/umobile-5g/page.tsx';
    
    const MobiPage: any = (MobiModule as any).default ?? MobiModule;
    const UPage: any = (UModule as any).default ?? UModule;
    
    const h1 = renderToString(React.createElement(MobiPage));
    const h2 = renderToString(React.createElement(UPage));
    
    function check(name: string, html: string, needles: string[]) {
      for (const n of needles) {
        const ok = html.includes(n);
        console.log((ok ? 'PASS' : 'FAIL') + ' [' + name + '] ' + JSON.stringify(n));
        if (!ok) process.exitCode = 1;
      }
    }
    
    console.log('MobiFone page HTML length:', h1.length);
    check('mobifone', h1, [
      'MobiFone Vietnam',
      '14 VIP routes benchmarked in one day',
      'Airport T1 IBC turnaround verified',
      '280+ issue pipeline tracked',
      'Intern-ready handover',
      'hanoi-drive-test-sharing',
      '/projects/umobile-5g',
    ]);
    
    console.log('UMobile page HTML length:', h2.length);
    check('umobile', h2, [
      'U Mobile 5G',
      'On-going',
      'case study in progress',
      '/projects/mobifone-vietnam',
    ]);
    