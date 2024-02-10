import { PaletteOptions, ThemeOptions } from "@mui/material";
import { blue, grey } from "./colors";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const palette: PaletteOptions = {
   common: {
      black: grey[900],
   },
   primary: {
      main: blue.main,
      light: blue.light,
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
         fontFamily: '"Inter", "Arial", sans-serif',
         fontWeight: 600,
         fontSize: "28px",
         lineHeight: "36px",
      },
      headlineMini: {
         fontFamily: '"Inter", "Arial", sans-serif',
         fontWeight: 600,
         fontSize: "20px",
      },
      title: {
         fontFamily: '"Inter", "Arial", sans-serif',
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

      // Button
      MuiButton: {
         defaultProps: {
            style: {
               textTransform: "none",
               fontWeight: "600",
               height: "40px",
               borderRadius: "12px",
               fontSize: "16px",
               padding: "0 12px",
               boxShadow: "none",
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
      // MuiList: {
      //    defaultProps: {
      //       style: {
      //          background: 'green',
      //          borderRadius: 'none'
      //       }
      //    }
      // },
      MuiMenuItem: {
         defaultProps: {
            style: {
               background: "red",
            },
         },
      },
      // Input
      MuiTextField: {
         defaultProps: {
            style: {
               border: "none",
               background: "none",
            },
            InputLabelProps: {
               style: {
                  border: "none",
               },
            },
            InputProps: {
               style: {
                  // color: "red",
                  background: palette.grey?.[100],
                  borderRadius: "16px",
                  // padding: '10px 12px'
               },
            },
         },
      },
      MuiOutlinedInput: {
         defaultProps: {
            style: {
               background: palette.grey?.[100],
               border: "none !important",
               borderWidth: "0",
               outline: "none",
            },
            notched: false,
         },
      },
      // Date
      MuiInputBase: {
         defaultProps: {
            style: {
               // background: 'red',
               // color: 'red',
               // background: palette.grey?.[100],
               borderRadius: "16px",
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
      // Paper
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
   },
};
