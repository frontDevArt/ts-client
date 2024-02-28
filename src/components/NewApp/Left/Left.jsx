import NewForm from "../NewForm/NewForm";
import "./Left.scss";

const Left = () => {
  return (
    <div className="left">
      <div className="left__new-form-wrapper">
        <NewForm />
      </div>
      <footer className="left__footer-wrapper">
        <a rel="noreferrer" target="_blank" href="https://truckstop.com/terms-conditions/">Terms &amp; Conditions </a> | 
        <a rel="noreferrer" target="_blank" href="https://truckstop.com/privacy-policy/"> Privacy Policy </a> | 
        <span> © 2023 Truckstop. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default Left