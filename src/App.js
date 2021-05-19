import './App.css';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core";
import ROUTES, {RenderRoutes} from "./helpers/routes";

function App() {
  let theme = createMuiTheme({
    palette:{
      primary:{
        main:"#DE632C"
      }
    }
  })
  theme = responsiveFontSizes(theme);
  theme.typography.h1 = {
    fontSize:'3.4em',
    [theme.breakpoints.up('md')]: {
      fontSize: '10rem',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <RenderRoutes routes={ROUTES}/>
    {/*<div className={"main-body"}>*/}
    {/*  <LateralBar/>*/}
    {/*  <div className={"main-content"}>*/}
    {/*    <Main/>*/}
    {/*  </div>*/}
    {/*</div>*/}

    </ThemeProvider>
  );
}

export default App;
