import {createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';

interface Props{
  children: JSX.Element
}

export enum ThemePallet{
  BG = '#101010',
  PAPER= '#1f1f1f',
  PRIMARY= '#989898',
  GLOBAL_FONT= 'Roboto',
  FONT_SIZE= '16'
}

var theme = createTheme({

  palette: {
    mode: 'dark',
    background:{
      default: ThemePallet.BG,
      paper: ThemePallet.PAPER,
    },
    primary: {
      main: ThemePallet.PRIMARY
    }
  },
  typography: {
    fontFamily: ThemePallet.GLOBAL_FONT,
  },
  components:{
    MuiCard:{
      defaultProps:{
        style:{
          backgroundColor:ThemePallet.BG,
          
        }
      }
    },
    MuiDialog:{
        defaultProps:{
          PaperProps:{
            style:{
              backgroundColor:ThemePallet.BG,
              color: ThemePallet.PRIMARY,
            }
          }
        }
    }
  }

})

theme = responsiveFontSizes(theme);
const ThemeConfig :React.FC<Props> = ({children}) =>{
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}

export {ThemeConfig};