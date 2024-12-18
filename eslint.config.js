import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Specify JS and JSX files
    languageOptions: {
      globals: globals.browser, // Browser globals
    },
  },
  pluginJs.configs.recommended, // Apply recommended JS rules
  pluginReact.configs.flat.recommended, // Apply recommended React rules
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Disable the rule requiring React to be in scope (React 17+)
    }
  }
];
