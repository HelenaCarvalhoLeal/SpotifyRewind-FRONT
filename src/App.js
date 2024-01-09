import { Home } from './pages/home';
import { User } from './pages/user';

function App() {
  const urlParams = window.localStorage.getItem("code");
  if (urlParams != null) {
    window.localStorage.removeItem("code");
    return (
      User(urlParams)
    );
  } else {
    return (
      Home()
    );
  }
}

export default App;