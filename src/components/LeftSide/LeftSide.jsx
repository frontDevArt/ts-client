import Attention from '../Attention/Attention';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';
import './LeftSide.scss';

const LeftSide = ({ withooutQuery }) => {

  const handleRoute = (route) => window.location.href = route;

  return (
    <div className='left-side'>
      {!withooutQuery && <div className="left-side__attention-wrapper">
        <Attention />
      </div>}
      <div className="left-side__main">
        <div className="left-side__logo-wrapper">
          <Logo />
        </div>
        <div className="left-side__login-form-wrapper">
          <LoginForm />
        </div>
        <div className="left-side__buttons-wrapper">
          <div className="left-side__button-wrapper">
            <button onClick={() => handleRoute('https://truckstop.my.site.com/SignInForgotPassword')} className='left-side__button button button--blue'>Forgot Password?</button>
          </div>
          <div className="left-side__button-wrapper">
            <button onClick={() => handleRoute('https://truckstop.com/contact-us/')} className='left-side__button button button--blue'>Trouble Logging In?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;