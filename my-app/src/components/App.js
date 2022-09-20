import { Routes, Route} from 'react-router-dom';

import AppHeader from './AppHeader';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPAge from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';

import AddContactPage from "../pages/AddContactPage";
import ProtectedRoutes from './ProtectedRoutes';
import View from "./View";

import { useSelector } from "react-redux";

import './app.scss';

function App() {
  const user = useSelector(state => state.currentUser);
  return (
    <>
      <AppHeader/>
      <Routes>
        <Route
          path={"/"}
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path={"/addContact"}
          element={
            <ProtectedRoutes>
              <AddContactPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path={"/update/:id"}
          element={
            <ProtectedRoutes>
              <AddContactPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path={"/view/:id"}
          element={
            <ProtectedRoutes>
              <View />
            </ProtectedRoutes>
          }
        />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPAge/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
    
  );
}

export default App;


