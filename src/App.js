import './App.css';
import {createTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core";
import ROUTES, {RenderRoutes} from "./helpers/routes";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import RootReducer from "./redux/reducers/rootReducer";
import thunk from 'redux-thunk';

function App() {
  let theme = createTheme({
    palette:{
      primary:{
        main:"#DE632C"
      },
      success:{
        main:"#1CC389"
      },
      error:{
        main:"#F23E4A"
      }
    }
  })

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
