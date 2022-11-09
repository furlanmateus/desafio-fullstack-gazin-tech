import { ThemeProvider, createTheme } from '@mui/material/styles';

export const AppThemeProvider = ({ children }) => {
  const mode = 'dark';
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#8E94F2',
      },
      secondary: {
        main: '#DAB6FC',
      },
      grey: {
        50: mode === 'dark' ? 'rgb(70, 70, 70)' : 'rgb(246, 243, 243)',
        100: mode === 'dark' ? 'rgb(90, 90, 90)' : 'rgb(230, 227, 226)',
        200: mode === 'dark' ? 'rgb(110, 110, 110)' : 'rgb(210, 210, 210)',
        300: mode === 'dark' ? 'rgb(133, 133, 133)' : 'rgb(190, 190, 190)',
        400: mode === 'dark' ? 'rgb(155, 155, 155)' : 'rgb(155, 155, 155)',
        500: mode === 'dark' ? 'rgb(189, 189, 189)' : 'rgb(133, 134, 138)',
        600: mode === 'dark' ? 'rgb(224, 224, 224)' : 'rgb(99, 101, 106)',
      },

      background: {
        light: '#FCFBFA',
        paper: mode === 'dark' ? '#1F1F1F' : '#FCFBFA',
        default: mode === 'dark' ? '#1F1F1F' : '#FCFBFA',
        opposite: mode === 'dark' ? '#FCFBFA' : '#1F1F1F',
      },
    },

    text: {
      primary: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
      disabled: '#C3C1BD',
      secondary: '#999999',
    },

    typography: {
      fontFamily: 'Poppins, sans-serif',
      fontstyle: 'normal',
      h1: {
        fontSize: '82px',
        fontWeight: '400',
        color: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
        lineHeight: '85px',
        '@media (max-width: 1280px)': {
          fontSize: '50px',
          lineHeight: '55px',
        },
        '@media (max-width: 825px)': {
          fontSize: '35px',
          lineHeight: '38px',
        },
        '@media (max-width: 500px)': {
          fontSize: '28px',
          lineHeight: '30px',
        },
      },
      h2: {
        fontSize: '30px',
        fontWeight: '600',
        color: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
        lineHeight: '33px',
      },
      h3: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#ABA8AA',
        lineHeight: '25px',
      },
      h4: {
        fontSize: '18px',
        fontWeight: '500',
        color: mode === 'dark' ? '#FCFBFA' : '#5C5C5C',
        lineHeight: '23px',
      },
      h5: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#ABA8AA',
        lineHeight: '20px',
      },

      body1: {
        fontSize: '16px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '19px',
      },
      body2: {
        fontSize: '15px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '20px',
      },
      body3: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '15px',
      },

      body1Medium: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#5C5C5C',
        lineHeight: '18px',
      },
      body1Big: {
        display: 'block',
        fontSize: '22px',
        fontWeight: '400',
        color: '#ABA8AA',
        lineHeight: '25px',
        '@media (max-width: 1280px)': {
          fontSize: '18px',
          lineHeight: '22px',
        },
        '@media (max-width: 825px)': {
          fontSize: '16px',
          lineHeight: '20px',
        },
      },
      body1SemiBold: {
        display: 'block',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        fontWeight: '500',
        color: mode === 'dark' ? '#FCFBFA' : '#000',
        lineHeight: '22px',
      },
      textDefault: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        color: mode === 'dark' ? '#FCFBFA' : '#000',
        lineHeight: '24px',
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: '#ABA8AA',
            cursor: 'pointer',
            textDecoration: 'none',
            lineHeight: '24px',
            '&:hover': {
              color: mode === 'dark' ? 'rgb(224, 224, 224)' : 'rgb(99, 101, 106)',
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            aspectRatio: '1/1',
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};
