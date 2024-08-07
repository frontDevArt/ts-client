import NewForm from "../NewForm/NewForm";
import "./Left.scss";

const Left = ({ handleChange,
  error,
  firstStepStatus,
  handleSubmitFirstStep, tryCount, form }) => {
  return (
    <div className="left">
      <div className="left__new-form-wrapper">
        <NewForm
          handleChange={handleChange}
          error={error}
          firstStepStatus={firstStepStatus}
          handleSubmitFirstStep={handleSubmitFirstStep}
          tryCount={tryCount}
          form={form}
        />
      </div>
      <footer className="left__footer-wrapper">
        <a rel="noreferrer" target="_blank" href="https://truckstop.com/terms-conditions/">Terms &amp; Conditions </a> | 
        <a rel="noreferrer" target="_blank" href="https://truckstop.com/privacy-policy/"> Privacy Policy </a> | 
        <span> © 2024 Truckstop. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default Left