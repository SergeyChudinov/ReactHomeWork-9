import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/actions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }

    return (
        <div>
            <h1 className='h1'>Home Page</h1>
            <form className="form">
                <button onClick={handleAuth}>Log Out</button>
            </form>
        </div>
    );
};

export default HomePage;