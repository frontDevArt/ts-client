import "./NewCheckbox.scss";

const checkIcon = (
  <svg viewBox="0 0 24 24" className="new-checkbox__checkmark">
    <path d="M1.73,12.91 8.1,19.28 22.79,4.59" fill="none" className="new-checkbox__checkmark-path"></path>
  </svg>
);

const NewCheckbox = () => {
  return (
    <>
      <div className="new-checkbox">
        <input id="remember" className="new-checkbox__native-control " type="checkbox" value="" />
        <div className="new-checkbox__background">
          {checkIcon}
        </div>
        <div className="new-checkbox__ripple" />
      </div>
      <label className="new-checkbox-label" htmlFor="remember">
        Trust this device for 30 days.
      </label>
    </>
  )
}

export default NewCheckbox;