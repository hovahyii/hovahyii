const fs = require('fs');
    const ts = require('E:/hovahyii/node_modules/typescript');
    const workdir = 'E:/hovahyii/.agent-work/s-19949f13';
    
    function transpile(srcPath, outPath) {
      const src = fs.readFileSync(srcPath, 'utf8');
      const out = ts.transpileModule(src, {
        compilerOptions: {
          jsx: ts.JsxEmit.ReactJSX,
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ES2020,
          esModuleInterop: true,
        },
        fileName: 'page.tsx',
      });
      fs.writeFileSync(outPath, out.outputText);
      console.log('transpiled', srcPath, '->', outPath, out.outputText.length, 'chars');
    }
    
    transpile('E:/hovahyii/app/projects/mobifone-vietnam/page.tsx', workdir + '/mobifone-page.mjs');
    transpile('E:/hovahyii/app/projects/umobile-5g/page.tsx', workdir + '/umobile-page.mjs');
    