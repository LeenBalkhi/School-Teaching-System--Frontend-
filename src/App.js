import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import routes from './routes';
import create from 'zustand'

export const url="http://localhost:4430/";
 


function App() {
  
  const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.accessToken){
      console.log(user.accessToken);

    }
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}
export const useStore = create(set => ({
  isLogedin: false,
  login: () => set({ isLogedin: true }),
  logout: () => set({ isLogedin: false })
}));

export default App;
