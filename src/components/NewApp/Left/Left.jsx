import NewForm from "../NewForm/NewForm";
import "./Left.scss";

const Left = () => {
  return (
    <div className="left">
      <div className="left__new-form-wrapper">
        <NewForm />
      </div>
    </div>
  )
}

export default Left