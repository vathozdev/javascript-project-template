import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },

    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
];