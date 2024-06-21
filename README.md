# Getting Started with Create React App

```bash
npx create-react-app react-setup
```

# Install customize-cra

```bash
npm i customize-cra react-app-rewired --D
```

Then, change the script in the package.json as follows:

```json
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  }
```

# Install babel plugin module resolver

src: https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md

```bash
npm install --save-dev babel-plugin-module-resolver
```

Specify the plugin in your .babelrc with the custom root or alias. Here's an example:

```js
{
    "plugins": [
        [
            "module-resolver",
            {
                "alias": {
                    "~": "./src"
                }
            }
        ]
    ]
}
```

## Enabale autocompletion

Configure jsconfig.json in root:

```js
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": [
                "src/*"
            ]
        }
    }
}
```

## Custom Webpack to import Module babel above

see more: https://github.com/arackaf/customize-cra

Configure config-overrides.js in root:

```js
const { override, useBabelRc } = require('customize-cra');

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());
```

# Custom Prettier for Vscode

Configure .prettierrc in root.

For example:

```js
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}

```

Configure .vscode/settings.json

```js
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

# Add Global Style Css/Scss

Install Scss

```bash
npm i -D sass
```

Install Nomarlize

```bash
npm install --save normalize.css
```
