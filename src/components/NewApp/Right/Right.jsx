import './Right.scss'

const Right = () => {
  return (
    <div className='right'>
      <h2 className='right__title'>WE’RE MAKING IMPROVEMENTS TO OUR SECURITY.</h2>
      <p className="right__text right__text--bold">Your account is about to get more secure.</p>
      <p className="right__text">To help keep your account safe, we are requiring Multi-Factor Authentication (MFA).</p>
      <p className="right__text">When you attempt to log into your account from a new or unrecognized device, you will be asked to verify your identity. You can choose your preferred verification method, including a:</p>
      <ul className='right__list'>
        <li className='right__list-item'>Push notification on your mobile device</li>
        <li className='right__list-item'>Security code via an authentication app</li>
        <li className='right__list-item'>Biometric input such as your face or fingerprint</li>
      </ul>
      <a className="right__link" target="_blank" href="https://truckstop.com/contact-us/">Need more help? Get support.</a>
    </div>
  )
}

export default Right