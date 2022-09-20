import {NavLink, useNavigate} from 'react-router-dom'; 

import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../redux/actions';

const AppHeader = () => {
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAuth = () => {
      if (user) {
        dispatch(logoutInitiate());
      }
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    };


    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        end  to='/'>HomePage</NavLink></li>
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        end  to='addContact'>Add Contact</NavLink></li>
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        to='/register'>RegisterPage</NavLink></li>
                    
                    {user ? (
                        <p style={{ cursor: "pointer" }} className={'navLink'} onClick={handleAuth}>
                            Sign Out
                        </p>
                    ) : (
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        to='/login'>LoginPage</NavLink></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;