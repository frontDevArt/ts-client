import './Attention.scss';


const Attention = () => {
  const handleRoute = () => {
    localStorage.removeItem('count');
    window.location.href = '/Signin';
  }
  return (
    <div className='attentiion'>
      <span className="attentiion__title">ATTENTION</span>
      <span className='attentiion__description'>&nbsp; If you are experiencing log in issues, please use the <span onClick={handleRoute} >new login page</span> to login to Truckstop.com. </span>
    </div>
  );
};

export default Attention;
