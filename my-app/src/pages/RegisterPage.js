import {useState, useEffect} from 'react';

import {useNavigate} from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';

import {registerInitiate} from "../redux/actions";

function RegisterPAge() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [displayName, setDisplayName] = useState('');
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
      if(password !== passwordConfirm) {
          return;
      }
      dispatch(registerInitiate(email, password, displayName))
  }

    return (
      <div>
        
        <h1 className='h1'>Register</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Ваша имя</label>
          <input className='input' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
          <label htmlFor="email">Ваша почта</label>
          <input className='input' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="email">Пароль</label>
          <input type='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="email">Подтвердите пароль</label>
          <input type='password' className='input' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
          <button>SIGN UP</button>
        </form>

      </div>
    );
  }
  
  export default RegisterPAge;