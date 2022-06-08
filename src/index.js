import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page from './Components/Page/Page';
import Home from './PageRoutes/Home';
import Post from './Components/Post/Post';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from './Redux/store'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index 
            element={
              <Page title="Home">
                <Home />
              </Page>
            }
          />
          <Route path="posts/:id" element={<Post/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
