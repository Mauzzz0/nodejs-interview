const eslint = require('@eslint/js');
const typescriptEslintEslintPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const eslintConfigPrettier = require('eslint-config-prettier');
const importPlugin = require('eslint-plugin-import');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const unusedImports = require('eslint-plugin-unused-imports');
const tseslint = require('typescript-eslint');
const tsImportResolver = require('eslint-import-resolver-typescript');

module.exports = [
  ...tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended),
  eslintConfigPrettier,
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'eslint-import-resolver-typescript': tsImportResolver,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
        },
      ],

      camelcase: 'error',
      'consistent-return': 'error',
      'default-case': 'off',
      eqeqeq: 'error',
      'max-classes-per-file': 'off',
      'no-console': 'off',
      'no-eval': 'error',
      'no-alert': 'warn',
      'no-compare-neg-zero': 'warn',
      'no-case-declarations': 'off',
      'no-else-return': 'warn',
      'no-empty': 'warn',
      'no-extend-native': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-loop-func': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-prototype-builtins': 'off',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-useless-concat': 'warn',
      'no-useless-escape': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'spaced-comment': 'warn',

      curly: ['error', 'all'],
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
  eslintPluginPrettierRecommended,
];
