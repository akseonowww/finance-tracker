import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { red } from "@mui/material/colors";
import shadows from "@mui/material/styles/shadows";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { PaletteOptions, ThemeOptions, colors } from "@mui/material";
import { blue, green, orange, grey } from "./colors";

const palette: PaletteOptions = {
   common: {
      black: grey[900],
   },
   primary: {
      main: blue.main,
      light: blue.light,
   },
   success: {
      main: green.main,
      light: green.light,
   },
   warning: {
      main: orange.main,
      light: orange.light,
   },
   grey,
   text: {
      primary: grey[900],
      secondary: grey[500],
   },
   background: {
      paper: grey[50],
      default: grey[100],
   },
};

export const theme: ThemeOptions = {
   // Палитра
   palette,
   // Типография
   typography: {
      fontFamily: '"Inter", "Arial", sans-serif',
      // Заголовки
      headline: {
         fontWeight: 600,
         fontSize: "28px",
         lineHeight: "36px",
      },
      headlineMini: {
         fontWeight: 600,
         fontSize: "20px",
      },
      title: {
         fontWeight: 600,
         fontSize: "18px",
      },

      // Обычный текст
      body: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 400,
         fontSize: "16px",
         lineHeight: "16px",
      },
      bodyMedium: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 500,
         fontSize: "16px",
      },
      bodyBold: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 600,
         fontSize: "16px",
      },
      // Мелкий
      footnote: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 400,
         fontSize: "14px",
         margin: "0 !important",
      },
      footnoteMedium: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 500,
         fontSize: "14px",
         margin: "0 !important",
      },
      footnoteBold: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 600,
         fontSize: "14px",
         lineHeight: "17px",
         margin: "0 !important",
      },
      // Подпись
      caption: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 400,
         fontSize: "12px",
      },
      captionMedium: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 500,
         fontSize: "12px",
      },
      captionBold: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontWeight: 600,
         fontSize: "12px",
      },
      // Кнопка
      button: {
         fontFamily: '"Inter", "Arial", sans-serif',

         fontSize: "16px",
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
   // Shape
   shape: {
      borderRadius: 16,
   },
   // Компонент
   components: {
      // Базовые стили
      MuiCssBaseline: {
         styleOverrides: `
				 @font-face {
					font-family: 'Inter, Arial, sans-serif';
					font-style: normal;
					font-display: swap;
					font-weight: 400;
					unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
				 }
			  `,
      },
      // Типогрфия
      MuiTypography: {
         defaultProps: {
            variantMapping: {
               headline: "h1",
               headlineMini: "h2",
               title: "h3",
               body: "span",
               bodyMedium: "span",
               bodyBold: "span",
               footnote: "span",
               footnoteMedium: "span",
               footnoteBold: "span",
               caption: "span",
               captionMedium: "span",
               captionBold: "span",
            },
         },
      },

      // Кнопка
      MuiButton: {
         defaultProps: {
            style: {
               textTransform: "none",
               fontWeight: "600",
               height: "40px",
               borderRadius: "12px",
               fontSize: "16px",
               padding: "0 12px",
					boxShadow: 'none'
            },
         },
      },
      // Select
      MuiSelect: {
         defaultProps: {
            style: {
               borderRadius: "16px",
               height: "72px",
               padding: "14px 18px",
            },
            SelectDisplayProps: {
               style: {
                  // background: 'green',
                  padding: 0,
               },
            },
            // arrow
         },
      },
      MuiMenuItem: {
         defaultProps: {
            style: {
               // background: 'red'
            },
         },
      },

      // Container
      MuiContainer: {
         defaultProps: {
            style: {
               // padding: '12px 16px',
               minHeight: "100vh",
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
            },
         },
      },
      MuiPaper: {
         variants: [
            {
               props: { variant: "big" },
               style: {
                  padding: "16px 18px 6px",
                  boxShadow:
                     " 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
                  borderRadius: "22px",
               },
            },
            {
               props: { variant: "min" },
               style: {
                  padding: "16px 0 4px",
                  boxShadow:
                     " 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
                  borderRadius: "16px",
               },
            },
         ],
      },

      MuiTextField: {
         defaultProps: {
            style: {
               border: "none",
            },
            InputLabelProps: {
               style: {
                  border: "none",
               },
            },
            InputProps: {
               style: {
                  color: "red",
                  background: palette.grey?.[100],
                  borderRadius: "16px",
                  // padding: '10px 12px'
               },
            },
         },
      },
      // Дата
      MuiInputBase: {
         defaultProps: {
            style: {
               // background: 'red',
               // color: 'red',
               background: palette.grey?.[100],
               borderRadius: "16px",
            },
         },
      },
   },
};