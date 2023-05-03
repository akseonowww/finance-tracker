import '@mui/x-date-pickers/themeAugmentation';
import { blue, red } from '@mui/material/colors';
import shadows from '@mui/material/styles/shadows';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		headline: React.CSSProperties;
		headlineMini: React.CSSProperties;
		title: React.CSSProperties;
		body: React.CSSProperties;
		bodyMedium: React.CSSProperties;
		bodyBold: React.CSSProperties;
		footnote: React.CSSProperties;
		footnoteMedium: React.CSSProperties;
		footnoteBold: React.CSSProperties;
		caption: React.CSSProperties;
		captionMedium: React.CSSProperties;
		captionBold: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		headline: React.CSSProperties;
		headlineMini: React.CSSProperties;
		title: React.CSSProperties;
		body: React.CSSProperties;
		bodyMedium: React.CSSProperties;
		bodyBold: React.CSSProperties;
		footnote: React.CSSProperties;
		footnoteMedium: React.CSSProperties;
		footnoteBold: React.CSSProperties;
		caption: React.CSSProperties;
		captionMedium: React.CSSProperties;
		captionBold: React.CSSProperties;
	}

	interface PaperVariants {
		big: React.CSSProperties;
		min: React.CSSProperties;
	}

	interface PaperVariantsOptions {
		big: React.CSSProperties;
		min: React.CSSProperties;
	}

	interface SelectVariants {
		big: React.CSSProperties;
	}

	interface SelectVariantsOptions {
		big: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		headline: true;
		headlineMini: true;
		title: true;
		body: true;
		bodyMedium: true;
		bodyBold: true;
		footnote: true;
		footnoteMedium: true;
		footnoteBold: true;
		caption: true;
		captionMedium: true;
		captionBold: true;

		h1: false;
		h2: false;
		h3: false;
		h4: false;
		h5: false;
		h6: false;
		subtitle1: false;
		subtitle2: false;
		body1: false;
		body2: false;
	}
}

declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		big: true;
		min: true;
	}
}

declare module '@mui/material/Select' {
	interface SelectPropsVariantOverrides {
		big: true;
	}
}

export const ThemeFT = {
	typography: {
		fontFamily: 'Inter, Arial, sans-serif !important',
		headline: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 600,
			fontSize: '28px',
			lineHeight: '36px',
		},
		headlineMini: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 600,
			fontSize: '20px',
		},
		title: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 600,
			fontSize: '18px',
		},
		body: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 400,
			fontSize: '16px',
		},
		bodyMedium: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 500,
			fontSize: '16px',
		},
		bodyBold: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 600,
			fontSize: '16px',
		},
		footnote: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 400,
			fontSize: '14px',
			margin: '0 !important',
		},
		footnoteMedium: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 500,
			fontSize: '14px',
			margin: '0 !important',
		},
		footnoteBold: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 400,
			fontSize: '14px',
			margin: '0 !important',
		},
		caption: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 400,
			fontSize: '12px',
		},
		captionMedium: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 500,
			fontSize: '12px',
		},
		captionBold: {
			fontFamily: 'Inter, Arial, sans-serif',
			fontWeight: 600,
			fontSize: '12px',
		},
		button: {
			fontSize: '16px',
		},
		h1: undefined,
		h2: undefined,
		h3: undefined,
		h4: undefined,
		h5: undefined,
		h6: undefined,
		subtitle1: undefined,
		subtitle2: undefined,
		body1: undefined,
		body2: undefined,
	},
	palette: {
		primary: {
			main: '#0190F8',
		},
		text: {
			primary: '#232A2F',
		},
		background: {
			paper: '#F6F8F9',
			default: 'red',
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					headline: 'h1',
					headlineMini: 'h2',
					title: 'h3',
					body: 'p',
					bodyMedium: 'p',
					bodyBold: 'p',
					footnote: 'span',
					footnoteMedium: 'span',
					footnoteBold: 'span',
					caption: 'small',
					captionMedium: 'small',
					captionBold: 'small',
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						textTransform: 'none',
						border: `2px dashed ${blue[500]}`,
					},
				},
				{
					props: { variant: 'dashed', color: 'secondary' },
					style: {
						border: `4px dashed ${red[500]}`,
					},
				},
			],
		},
		MuiInput: {
			variants: [
				{
					props: { variant: 'default' },
					style: {
						padding: '16px 18px 6px',
						boxShadow: shadows[15],
						borderRadius: '22px',
					},
				},
			],
		},
		MuiPaper: {
			variants: [
				{
					props: { variant: 'big' },
					style: {
						padding: '16px 18px 6px',
						boxShadow:
							' 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)',
						borderRadius: '22px',
					},
				},
				{
					props: { variant: 'min' },
					style: {
						border: `4px dashed ${red[500]}`,
					},
				},
			],
		},
		MuiSelect: {
			variants: [
				{
					props: { variant: 'big' },
					style: {
						border: `4px dashed ${red[500]}`,
					},
				},
			],
		},
		MuiDatePicker: {
			styleOverrides: {
				root: {
					backgroundColor: 'red',
				},
			},
		},
	},
};
