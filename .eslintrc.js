module.exports = {
    extends: ['airbnb-typescript-prettier'],
    parserOptions: {
      project: "tsconfig.json",
      tsconfigRootDir: __dirname,
      sourceType: "module",
    },
    rules: {
      'react/prop-types': 0,
      'react/destructuring-assignment': 0,
      'react/static-property-placement': 0,
      'jsx-a11y/alt-text': 0,
      'react/jsx-props-no-spreading': 0,
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": 0,
      "no-param-reassign": [2, { "props": false }],
      '@typescript-eslint/no-non-null-assertion': 'off'
    },
  };