# TS Node

```BASH
npm install express
npm install typescript ts-node @types/node @types/express --save-dev
npx tsc --init

```

You’ll notice TypeScript-related dependencies are installed as devDependencies. This is because even though code is written in TypeScript, it will be compiled as “vanilla” JavaScript. TypeScript is not required, or used, for runtime and is only used during development. Since the developer is the only “consumer” of TypeScript, it should be installed as a dev dependency

```js
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^16.11.2",
    "ts-node": "^10.3.1",
    "typescript": "^4.4.4"
  }
```

```text
target: using this option, you can specify which ECMAScript version to use in your project. For instance, if you set the target to ES5 and then you use arrow functions, the code is compiled to an equivalent ES5 function. The available versions are ES3 (default), ES5, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, or ESNEXT.

module: with this option, you can specify which module manager to use in the generated JavaScript code. You can choose between the following values none, commonjs, amd, system, umd, es2015, es2020, or ESNext. The most common module manager and the default one is commonjs.

outDir: with this option, we can specify where to output the “vanilla” JavaScript code.

rootDir: specifies where the TypeScript files are located.

strict: enabled by default, this toggles strict type-checking options.

esModuleInterop: this option is true by default; it controls interoperability between CommonJS and ES modules. It does this by creating namespace objects for all imports.
```
