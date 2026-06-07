// @ts-check

// based on https://github.com/vercel/next.js/pull/71218#issuecomment-2440754208
import js from '@eslint/js';
import ts from 'typescript-eslint';
// import tailwind from 'eslint-plugin-tailwindcss';
import nextVitals from 'eslint-config-next/core-web-vitals';
import pluginQuery from '@tanstack/eslint-plugin-query';
// @ts-expect-error missing types
import drizzle from 'eslint-plugin-drizzle';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig } from 'eslint/config';
import importZod from 'eslint-plugin-import-zod';

// next/typescript only registers @typescript-eslint; we use strictTypeChecked instead
const nextConfig = nextVitals.filter((config) => config.name !== 'next/typescript');

const config = defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'public/**', 'src/components/**'],
  },
  ...nextConfig,
  {
    settings: {
      react: { version: '19' },
    },
  },
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // ...tailwind.configs['flat/recommended'],
  pluginQuery.configs['flat/recommended'],
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      drizzle,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...drizzle.configs.recommended.rules,
    },
  },
  ...importZod.configs.recommended,
  {
    rules: {
      // strictTypeChecked + stylisticTypeChecked are stricter than eslint-config-next/typescript
      // (recommended + no-unused-vars/no-unused-expressions downgraded to warn). Only overrides below.
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      // "@typescript-eslint/require-await": "off",
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      'drizzle/enforce-delete-with-where': [
        'error',
        {
          drizzleObjectName: 'db',
        },
      ],
      'drizzle/enforce-update-with-where': [
        'error',
        {
          drizzleObjectName: 'db',
        },
      ],
    },
  },
]);
export default config;
