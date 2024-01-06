module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "no-mixed-spaces-and-tabs": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    
    "no-var": 0,
    
    semi: ["error", "always", { omitLastInOneLineBlock: false }],
    "comma-dangle": ["error", "never"],
    quotes: ["error", "single"],
    "react/prop-types": [0],
    indent: ["error", "tab"],
  },
};
