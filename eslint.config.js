import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [
            ['@', path.resolve(__dirname, 'src')],
            ['@app', path.resolve(__dirname, 'src/app')],
            ['@features', path.resolve(__dirname, 'src/features')],
            ['@pages', path.resolve(__dirname, 'src/pages')],
            ['@processes', path.resolve(__dirname, 'src/processes')],
            ['@shared', path.resolve(__dirname, 'src/shared')],
            ['@widgets', path.resolve(__dirname, 'src/widgets')],
          ],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          typescript: {},
        },
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['build/*'],
  },
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      import: importPlugin, // подключаем плагин import
      prettier: prettierPlugin, // подключаем плагин Prettier
      'react-hooks': reactHooksPlugin, // подключаем плагин для React Hooks
    },
  },
  {
    rules: {
      // Добавление правил для импорта
      'import/no-unresolved': ['error', { commonjs: true, amd: true }], // предотвращает ошибки при разрешении импортов
      'import/named': 'error', // проверка, что все именованные импорты существуют
      'import/default': 'error', // проверка на существование дефолтных импортов
      'import/namespace': 'error', // проверка на корректность namespace импортов
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true, // запрещает использование зависимостей в продакшн-коде
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // системные и внешние модули
            ['internal'], // внутренние модули
            ['parent'], // импорты из родительских файлов
            ['sibling'], // импорты из соседних файлов
            ['index'], // импорты из текущего индекса
          ],
          'newlines-between': 'always', // обязательная пустая строка между группами
        },
      ],
      'import/newline-after-import': ['error', { count: 1 }], // обязательная пустая строка после импорта
      'import/no-duplicates': 'error', // запрещает дублирование импортов

      'react/react-in-jsx-scope': 'off',

      // Интеграция с Prettier
      'prettier/prettier': [
        'error', // выдавать ошибку за нарушение правил форматирования
      ],

      '@typescript-eslint/no-unused-vars': 'warn',

      // Правила для React Hooks
      'react-hooks/rules-of-hooks': 'error', // проверка правильности использования хуков
      'react-hooks/exhaustive-deps': [
        'warn', // предупреждение, если зависимости в хуке указаны некорректно
        {
          additionalHooks: '(useMyCustomHook)', // если есть дополнительные хуки, которые должны проверяться
        },
      ],
    },
  },
  {
    // Подключение конфигурации Prettier
    rules: {
      ...prettierConfig.rules,
    },
  },
];
