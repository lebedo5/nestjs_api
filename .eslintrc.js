module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "max-len": [
      "error",
      {
        "code": 140,
        "ignoreUrls": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "react/require-default-props": "off",
    // strings use double quotes
    "prettier/prettier": ["error", {
      "endOfLine": "auto",
      "singleQuote": true,
      "jsxSingleQuote": true,
      "useTabs": false,
      "tabWidth": 4,
      "bracketSpacing": true,
      "semi": true,
      "trailingComma": "all",
      "arrowParens": "always"
    }],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "react/function-component-definition": [2,  {
      "namedComponents": ["arrow-function", "function-declaration"],
      "unnamedComponents": "arrow-function"
    }],
    "import/prefer-default-export": "off",
    "no-console": ["error", { "allow": ["error", "warn"] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/no-named-as-default": 0
  },
};
