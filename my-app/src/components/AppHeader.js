import {NavLink} from 'react-router-dom'; 


const AppHeader = () => {
    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        end  to='/'>HomePage</NavLink></li>
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        to='/login'>LoginPage</NavLink></li>
                    <li><NavLink className={'navLink'} style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        to='/register'>RegisterPAge</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;