import React from 'react'
import NewLogo from '../NewApp/NewLogo/NewLogo'
import NewInput from '../NewApp/NewInput/NewInput'
import './Verification.scss'

const isValidInput = (value) => {
  return value.trim() && value.length === 6 && typeof Number(value) === 'number' && !(isNaN(Number(value)));
}

const Verification = ({ value, handleChange, secondStepStatus, handleSubmitSecondStep, isCompleate, name }) => {
  return (
    <div className='verification'>
      <div className="verification__container">
        <div className="verification__inner">

          <div className="verification__logo">
            <NewLogo />
          </div>
          <div className="verification__texts">
            <span className='verification__auth'>{isCompleate ? '2 step phone number validation. Step 2/2' : '2 step phone number validation. Step 1/2'}</span>
            <span className='verification__message-sent'>{`Message sent to (+1*******)`}</span>
            <span className='verification__pastcode'>Enter the passcode you received.</span>
          </div>
          <div className="verification__input-wrapper">
            <NewInput onChange={handleChange} name={name} />
          </div>
          <div className="verification__button-wrapper">
            <button onClick={handleSubmitSecondStep} disabled={!isValidInput(value) || secondStepStatus}>LOGIN</button>
          </div>
          <span className='verification__resend-code'>Resend passcode</span>
        </div>
      </div>
    </div>
  )
}

export default Verification