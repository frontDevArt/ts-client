import IMG from './new-logo.png';
import './NewLogo.scss';

const NewLogo = () => {
  return (
    <img className='new-logo' src={IMG} alt="logo" />
  );
};

export default NewLogo;