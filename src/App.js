import styles from './App.module.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';


const App = () => {

  const location = useLocation();
  let pathnameClass = location.pathname.replace('/', '');
  pathnameClass = (pathnameClass.includes('/')) ? pathnameClass.replace(/\//g, '-') : pathnameClass;
  pathnameClass = (pathnameClass === "") ? "home" : pathnameClass;
  
  return (
    <div className={`${styles.app} ${pathnameClass}`}>
      <Header>
      </Header>
      <div className={`${styles.container} body`}>
        <Outlet />
      </div>
      <Footer>
        <nav>

        </nav>
      </Footer>
    </div>
  );
}

export default App;