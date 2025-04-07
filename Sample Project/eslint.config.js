import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	{
		languageOptions: {
			globals: {
				jQuery: 'readonly',
				$: 'readonly',
			}
		},
		rules: {
			semi: ['error', 'always'],
			camelcase: 'off',
			'comma-dangle': 'off',
			'brace-style': 0,
			curly: 0,
			indent: 0,
			'no-new': 0,
			'no-misleading-character-class': 0,
			'prefer-promise-reject-errors': 0,
			'no-async-promise-executor': 0,
			'no-tabs': 0,
			'space-before-function-paren': 0,
			'object-property-newline': 0,
			'no-extend-native': 0,
			'prefer-const': [
				'error',
				{
					destructuring: 'all',
					ignoreReadBeforeAssign: false
				}
			],
			'nonblock-statement-body-position': ['error', 'below'],
			'new-cap': 0,
			'prefer-regex-literals': 'off',
			'no-unused-vars': 'off',
			quotes: [2, 'single', { avoidEscape: true }],
			'quote-props': ['error', 'as-needed']
		}
	}
];