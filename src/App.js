import './App.css';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core";
import ROUTES, {RenderRoutes} from "./helpers/routes";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import RootReducer from "./redux/reducers/rootReducer";
import thunk from 'redux-thunk';

function App() {
  let theme = createMuiTheme({
    palette:{
      primary:{
        main:"#DE632C"
      },
      success:{
        main:"#1CC389"
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
  const store = createStore(RootReducer ,applyMiddleware(thunk));

  return (
    <Provider store={store}>

    <ThemeProvider theme={theme}>

      <RenderRoutes routes={ROUTES}/>
    {/*<div className={"main-body"}>*/}
    {/*  <LateralBar/>*/}
    {/*  <div className={"main-content"}>*/}
    {/*    <Main/>*/}
    {/*  </div>*/}
    {/*</div>*/}
    </ThemeProvider>
</Provider>

  );
}

export default App;
