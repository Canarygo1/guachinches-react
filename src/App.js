import './App.css';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core";
import BusinessApp from "./pages/businessApp";

function App() {
  let theme = createMuiTheme({
    palette:{
      primary:{
        main:"#DE632C"
      }
    }
  })
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>

      <BusinessApp>
      </BusinessApp>
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
