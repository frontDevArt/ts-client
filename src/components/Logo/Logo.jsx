import IMG from './logo.png';
import './Logo.scss';

const Logo = () => {
  return (
    <img className='logo' src={IMG} alt="logo" />
  );
};

export default Logo;