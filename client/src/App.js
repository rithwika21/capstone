import MainComponent from "./components/MainComponent";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./styles/index.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b85d6',
      dark: '#0b85d6',
      light: '#f7c267',
    },
  },
});


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <MainComponent />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
