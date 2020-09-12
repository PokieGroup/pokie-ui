module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ['.eslintrc.js', 'env/**/*', 'src/tests'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    project: './tsconfig.json',
  },
  settings: {
    "import/extensions":['.js', '.ts', '.tsx', '.png'],
    "import/resolver": {
      typescript: {},
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      }
    },
    "react": {
      "version": "999.999.999",
    }
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    "no-console": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "@typescript-eslint/explicit-function-return-type": "warn", // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    "default-param-last": ["warn"],
    "no-empty": "warn",
    complexity: ["warn", 4],
    "max-depth": ["warn", 2],
    "max-nested-callbacks": ["warn", 3],
    "max-params": ["warn"],
    "max-statements": ["warn", 15, {"ignoreTopLevelFunctions": true}],
    "max-lines": ["error", {
      max: 200,
    }],
    "camelcase": ["warn"],
    "no-empty-function": ["warn"],
    "no-useless-catch": ["warn"],
    "no-useless-return": ["warn"],
    "max-lines-per-function": ["warn", 100],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "./src/tests/api.js"]}]
  },
};
