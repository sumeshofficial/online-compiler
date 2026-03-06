import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/**
 * ESLint Flat Config (ESLint v9+)
 * Suitable for Node.js backend projects
 */

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },

    rules: {
      // Possible Errors
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",

      // Best Practices
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      // Code Style
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],

      // Node specific
      "no-process-exit": "off",
    },
  },
  prettier,
];
