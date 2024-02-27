import NewCheckbox from "../NewCheckbox/NewCheckbox";
import NewInput from "../NewInput/NewInput";
import NewLogo from "../NewLogo/NewLogo";
import "./NewForm.scss";

const NewForm = () => {
  return (
    <div className='new-form'>
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
            <NewInput error=" Please enter a valid email" onChange={() => (e) => { console.log(e) }} label="Your Email" name="email" />
          </div>
          <div className="new-form__new-input-wrapper">
            <NewInput onChange={() => (e) => {console.log(e)}} label="Password" name="password" type="password" />
          </div>
          <div className="new-form__new-checkbox-wrapper">
            <NewCheckbox />
          </div>
          <div className="new-form__actions-wrapper">
            <button className="new-form__button">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewForm