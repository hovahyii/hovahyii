
    const fs = require('fs');
    const path = require('path');
    const ts = require('E:/hovahyii/node_modules/typescript');
    const React = require('E:/hovahyii/node_modules/react');
    const { renderToString } = require('E:/hovahyii/node_modules/react-dom/server');
    
    const src = fs.readFileSync('E:/hovahyii/app/projects/umobile-5g/page.tsx', 'utf8');
    const out = ts.transpileModule(src, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 },
    });
    const tmp = 'E:/hovahyii/.agent-work/s-19949f13/umobile_smoke.js';
    fs.writeFileSync(tmp, out.outputText);
    const mod = require(tmp);
    const html = renderToString(React.createElement(mod.default));
    fs.writeFileSync('E:/hovahyii/.agent-work/s-19949f13/umobile_smoke.html', html);
    
    const needles = [
      'HW-LTE-Traffic-Volume',
      'swap &amp; modernization traffic assurance',
      '23',
      '46',
      'regional reports',
      'SR &amp; NR',
      'Central &amp; Eastern',
      'KV 4G MOD',
      '13 Jul 2026',
      '27 Aug 2026',
      '03 Jun 2026',
      '>20%',
      'COPA80',
      'modernization tracker',
      'work-site list',
    ];
    let ok = true;
    for (const n of needles) {
      const found = html.includes(n);
      if (!found) ok = false;
      console.log((found ? 'PASS' : 'FAIL') + ' | ' + n);
    }
    console.log('HTML bytes:', html.length);
    console.log(ok ? 'SMOKE OK' : 'SMOKE FAILED');
    process.exit(ok ? 0 : 1);
    