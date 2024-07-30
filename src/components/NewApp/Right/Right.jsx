import './Right.scss'

const Right = () => {
  return (
    <div className='right'>
      <h2 className='right__title'>We're focused on removing fraud from our platform.</h2>
      <div className='right__divider' />
      <p className="right__subheading">How it works</p>
      <p className="right__tsx-body-1">When you attempt to log in to your account from a new or unrecognized device, you will be asked to verify your identity.</p>
      <ul className='right__list'>
        <li>Push notification on your mobile device</li>
        <li>Security code via an authentication app</li>
        <li>Biometric input such as your face or fingerprint</li>
      </ul>
      <a className="right__link" target="_blank" rel="noopener noreferrer" href="https://truckstop.com/contact-us/">Need more help? Get support.</a>
      <div className='right__divider' />
      <p className="right__subheading">What customers are saying</p>
      <div className="right__card">
        <p className="right__quote">“Working with Truckstop.com, you get to know people from the CEO all  the way to IT. They’ve tailored their tools to work with us so they don’t have just one way of doing things.”</p>
      </div>
      <div className="flex">
        <p className="right__quote-attribution">Zachary Green, Ryder</p>
        <img alt="Person Icon" src="/img/icon_account.svg" />
      </div>
    </div>
  )
}

export default Right