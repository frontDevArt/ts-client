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
      </div>
    </div>
  )
}

export default NewForm