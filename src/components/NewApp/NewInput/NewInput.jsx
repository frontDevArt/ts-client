import { useState } from 'react'
import './NewInput.scss';

const eyeSeen = (
  <svg fill="#5C656A" viewBox="8 6 24 24"><path d="M20 17.5C20.7956 17.5 21.5587 17.8161 22.1213 18.3787C22.6839 18.9413 23 19.7044 23 20.5C23 21.2956 22.6839 22.0587 22.1213 22.6213C21.5587 23.1839 20.7956 23.5 20 23.5C19.2044 23.5 18.4413 23.1839 17.8787 22.6213C17.3161 22.0587 17 21.2956 17 20.5C17 19.7044 17.3161 18.9413 17.8787 18.3787C18.4413 17.8161 19.2044 17.5 20 17.5ZM20 13C25 13 29.27 16.11 31 20.5C29.27 24.89 25 28 20 28C15 28 10.73 24.89 9 20.5C10.73 16.11 15 13 20 13ZM11.18 20.5C12.83 23.86 16.24 26 20 26C23.76 26 27.17 23.86 28.82 20.5C27.17 17.14 23.76 15 20 15C16.24 15 12.83 17.14 11.18 20.5Z"></path></svg>
);

const eyeUnseen = (
  <svg fill="#5C656A" viewBox="8 6 24 24"><path d="M10 12.27L11.28 11L28 27.72L26.73 29L23.65 25.92C22.5 26.3 21.28 26.5 20 26.5C15 26.5 10.73 23.39 9 19C9.69 17.24 10.79 15.69 12.19 14.46L10 12.27ZM20 16C20.7956 16 21.5587 16.3161 22.1213 16.8787C22.6839 17.4413 23 18.2044 23 19C23 19.35 22.94 19.69 22.83 20L19 16.17C19.31 16.06 19.65 16 20 16ZM20 11.5C25 11.5 29.27 14.61 31 19C30.18 21.08 28.79 22.88 27 24.19L25.58 22.76C26.94 21.82 28.06 20.54 28.82 19C27.17 15.64 23.76 13.5 20 13.5C18.91 13.5 17.84 13.68 16.84 14L15.3 12.47C16.74 11.85 18.33 11.5 20 11.5ZM11.18 19C12.83 22.36 16.24 24.5 20 24.5C20.69 24.5 21.37 24.43 22 24.29L19.72 22C18.29 21.85 17.15 20.71 17 19.28L13.6 15.87C12.61 16.72 11.78 17.78 11.18 19Z"></path></svg>
);

const NewInput = ({ label, name, onChange, type, error }) => {
  const [localValue, setLocalValue] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (value, name) => {
    setLocalValue(value);
    onChange(value, name)
  }


  return (
    <div className={`new-input new-input--${type || 'text'} ${error ? 'new-input--error' : ''}`}>
      <span className='new-input__label'>{label}</span>
      <input
        type={(type === 'password' ? show ? 'text' : 'password' : type) || 'text'}
        className='new-input__textarea'
        onChange={({ target }) => handleChange(target.value, target.name)}
        name={name}
        value={localValue}
      />
      {error && <span className='new-input__error'>{error}</span>}
      {type === 'password' && (
        <div onClick={() => setShow(prev => !prev)} className="new-input__icon-wrapper">
          {show ? eyeSeen : eyeUnseen}
        </div>
      )}
    </div>
  )
}

export default NewInput