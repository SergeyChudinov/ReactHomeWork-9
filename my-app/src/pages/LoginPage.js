import {useState, useEffect} from 'react';

import {Link, useNavigate} from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';

import {loginInitiate} from "../redux/actions";


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
        navigate('/');
    }
  }, [user, navigate])

  const handleSubmit = (e) => {
      e.preventDefault();

      if(!email || !password) {
          return;
      }
      dispatch(loginInitiate(email,password))
  }

    return (
      <div>
        <h1 className='h1'>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Ваша почта</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/><br></br>
          <label htmlFor="password">Пароль</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/><br></br>
          <button>SIGN IN</button>
        </form>
      </div>
    );
  }
  
  export default LoginPage;