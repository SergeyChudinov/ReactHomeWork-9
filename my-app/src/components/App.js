import { Routes, Route} from 'react-router-dom';

import AppHeader from './AppHeader';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPAge from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

import './app.scss';

function App() {
  return (
    <>
      <AppHeader/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPAge/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
    
  );
}

export default App;
