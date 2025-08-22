const ts = require('typescript');

module.exports = {
  process(src, filename) {
    const result = ts.transpileModule(src, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
      fileName: filename,
    });
    return { code: result.outputText };
  },
};
