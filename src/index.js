import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from './app/store.js';
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { SamplePage } from './pages/SamplePage/SamplePage.js';
import { LoginForm } from './components/LoginForm/LoginForm';
import { UserList } from './pages/UserList/UserList';
import { MainPage } from './pages/MainPage/MainPage';
import { selectLogin } from './features/loginer/loginerSlice';

function App() {
  const isLogined = useSelector(selectLogin);
  let userListPage;
  if (isLogined) {
    userListPage = <UserList /> ; 
  } else {
    userListPage = <SamplePage />
  }
  
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <LoginForm />
          <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='/userlist' element={userListPage} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)