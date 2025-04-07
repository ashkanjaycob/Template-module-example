import Color from 'color';
const lighten = (clr, val) => Color(clr).lighten(val / 100).rgb().string();
const darken = (clr, val) => Color(clr).darken(val / 100).rgb().string();
const _saturate = (clr, val) => Color(clr).saturate(val / 100).rgb().string();
const _desaturate = (clr, val) => Color(clr).desaturate(val / 100).rgb().string();
const rgba = (clr, val) => Color(clr).opaquer(1).fade(1 - val);
const tint = (clr, val) => Color(clr).mix(Color('#ffffff'), val / 100).rgb().string();
const shade = (clr, val) => Color(clr).mix(Color('#000000'), val / 100).rgb().string();

let colors = {
	primary: '#FF642B',
	blue: '#3C7AF7',
	green: '#0AAD3B',
	yellow: '#F69D00',
	red: '#EB3936',
	orange: '#FF642B',
	secondary: '#18191D',
	gray: '#505464',
	dark: '#343740',
	light: '#F0F1F5',
};

const screens = {
	'2xs': '375px',
	xs: '420px',
	sm: '576px',
	md: '768px',
	lg: '1024px',
	xl: '1232px',
	'2xl': '1400px',
	'3xl': '1920px',
};
colors = {
	...colors,
	'red-dark': shade(colors.red, 10),
	'green-dark': shade(colors.green, 10),
	'blue-dark': shade(colors.blue, 10),
	'gray-100': lighten(colors.light, 1.5),
	'gray-200': colors.light,
	'gray-300': '#DFE2ED',
	'gray-400': lighten(colors.gray, 5),
	'gray-500': colors.gray,
	'gray-600': colors.dark,
	'gray-700': colors.secondary,
	'gray-800': '#1C202B',
	'gray-900': '#181B24',
};
const rgbColors = {};
for (const color in colors) {
	rgbColors[color] = Color(colors[color]).rgb().color.join(' ');
}
export const content = [
	'./layouts/**/*.html',
	'./index.html',
	'./src/**/*.js',
	'./safelist.txt'
];
export const theme = {
	variables: {
		colors,
		rgbColors
	},
	environment: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	container: {
		center: true,
		screens: {
			lg: '1024px',
			xl: '1232px',
			'2xl': '1400px'
		},

		padding: {
			DEFAULT: '1rem',
		},
	},
	screens: {
		...screens,
		...(Object.keys(screens).reduce((a, v) => ({ ...a, [`-${v}`]: { max: `${parseInt(screens[v]) - 1}px` } }), {})),
	},
	colors: {
		...(Object.keys(colors).reduce((a, v) => ({ ...a, [v]: `rgb(var(--kt-${v}))` }), {})),
		white: '#fff',
		black: '#000',
		transparent: 'transparent',
		inherit: 'inherit'
	},
	fontFamily: {
		sans: ['IRANYekanX', 'sans-serif'],
		serif: ['IRANYekanX', 'sans-serif'],
	},

	spacing: {
		0: '0',
		1: '1px',
		2: '2px',
		3: '3px',
		4: '4px',
		5: '5px',
		6: '6px',
		7: '7px',
		8: '8px',
		9: '9px',
		10: '10px',
		11: '11px',
		12: '12px',
		13: '13px',
		14: '14px',
		15: '15px',
		16: '16px',
		17: '17px',
		18: '18px',
		19: '19px',
		20: '20px',
		22: '22px',
		24: '24px',
		26: '26px',
		28: '28px',
		30: '30px',
		32: '32px',
		34: '34px',
		36: '36px',
		38: '38px',
		40: '40px',
		44: '44px',
		48: '48px',
		52: '52px',
		56: '56px',
		60: '60px',
		64: '64px',
		68: '68px',
		72: '72px',
		76: '76px',
		80: '80px',
		84: '84px',
		88: '88px',
		92: '92px',
		96: '96px',
		100: '100px',
		half: '50%',
		full: '100%',
		'1/10': '10%',
		'2/10': '20%',
		'3/10': '30%',
		'4/10': '40%',
		'5/10': '50%',
		'6/10': '60%',
		'7/10': '70%',
		'8/10': '80%',
		'9/10': '90%',
	},
	borderRadius: {
		none: '0',
		xs: '4px',
		sm: '6px',
		DEFAULT: '8px',
		lg: '12px',
		xl: '16px',
		'2xl': '20px',
		circle: '50%',
		pill: '1000px',
	},
	fontSize: {
		'5xs': '10px',
		'4xs': '11px',
		'3xs': '12px',
		'2xs': '13px',
		xs: '14px',
		sm: '15px',
		normal: '16px',
		larger: '17px',
		lg: '18px',
		xl: '20px',
		'2xl': '22px',
		'3xl': '24px',
		'4xl': '26px',
		'5xl': '28px',
		heading: '32px'
	},
	fontWeight: {
		light: '300',
		normal: 'normal',
		medium: '500',
		semibold: '600',
		bolder: 'bolder',
		bold: 'bold',
		extrabold: '800',
		black: '900',
		extrablack: '950',
	},
	letterSpacing: {
		ultratight: '-0.05em',
		tighter: '-0.03em',
		tight: '-0.015em',
		none: '0',
	},
	lineHeight: {
		1: '1',
		'2xs': '1.25',
		xs: '1.5',
		sm: '1.75',
		normal: '2',
		lg: '2.125',
		xl: '2.25',
	},
	boxShadow: {
		border: '0 0 0 1px rgb(var(--kt-border-color)) inset',
		'border-y': '0 1px rgb(var(--kt-border-color)) inset, 0 -1px rgb(var(--kt-border-color)) inset',
		'border-x': '1px 0 rgb(var(--kt-border-color)) inset, 1px 0 rgb(var(--kt-border-color)) inset',
		'border-o': '0 0 0 1px rgb(var(--kt-border-color))',
		sm: '0 2px 4px rgb(var(--kt-secondary) / 0.15)',
		'sm-bold': '0 0 0 1px rgb(var(--kt-secondary) / 0.1), 0 2px 4px rgb(var(--kt-secondary) / 0.08)',
		DEFAULT: '0 2px 6px rgb(var(--kt-secondary) / 0.1)',
		none: 'none',
		dropdown: `0 4px 16px ${rgba(colors.secondary, 0.18)}, 0 0 0 1px ${rgba(colors.secondary, 0.05)}`,
		'dropdown-reverse': `0 0 20px ${rgba(colors.secondary, 0.12)}, 0 0 0 1px ${rgba(colors.secondary, 0.08)}`,
	},
	backdropBlur: {
		DEFAULT: '8px'
	},
	zIndex: {
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		10: 10,
		20: 20,
		30: 30,
		40: 40,
		50: 50,
		99: 99,
		100: 100,
		999: 999,
		1000: 1000,
		9999: 9999,
		10000: 10000,
		99999: 99999,
		100000: 100000
	},
	extend: {
		borderColor: {
			DEFAULT: 'rgb(var(--kt-border-color))'
		},
		width: {
			'1/8': '12.5%',
			'2/8': '25%',
			'3/8': '37.5%',
			'4/8': '50%',
			'5/8': '62.5%',
			'6/8': '75%',
			'7/8': '87.5%',
		}
	},
};
export const plugins = [
	function ({ addVariant }) {
		addVariant('child', '& > *');
	},
	function ({ matchVariant }) {
		matchVariant(
			'is',
			(value) => {
				return `&.${value}`;
			}
		);
	},
	function ({ matchVariant }) {
		matchVariant(
			'not',
			(value) => {
				return `&:not(.${value})`;
			}
		);
	},
	function ({ matchUtilities }) {
		matchUtilities(
			{
				'text-shadow': (value) => ({
					textShadow: `${value} var(--tw-shadow-color)`,
				}),
			},
		);
	},
	function ({ matchUtilities }) {
		matchUtilities(
			{
				'bg-gradient': (value) => ({
					backgroundImage: `linear-gradient(${value}, var(--tw-gradient-stops))`,
				}),
			},
		);
	},
	function ({ matchUtilities }) {
		matchUtilities(
			{
				'bg-radial-gradient': (value) => ({
					backgroundImage: `radial-gradient(${value.replace(/_/g, ' ')}, var(--tw-gradient-stops))`,
				}),
			},
		);
	},
	function ({ matchUtilities }) {
		matchUtilities(
			{
				'max-cw': (value) => ({
					maxWidth: `calc(100% - ${value})`,
				}),
			},
		);
	},
	function ({ matchUtilities }) {
		matchUtilities(
			{
				cw: (value) => ({
					width: `calc(100% - ${value})`,
				}),
			},
		);
	},
];