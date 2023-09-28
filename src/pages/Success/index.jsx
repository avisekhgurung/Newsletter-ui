import { Fragment } from "react";
import checkIcon from "../../assets/images/check.svg";
import { useLocation, useNavigate} from "react-router-dom";
import styles from "./Success.module.css";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={styles.successBox}>
        <div>
        <img
          className={`${styles.successCheck} mb-1`}
          src={checkIcon}
          alt="check"
        />
        <h1 className="heading mb-1">Thanks for Subscribing!</h1>
        <p className={`${styles.successText} mb-1`}>
          {`A confirmation email has been sent to `}
          <strong style={{ fontWeight: "bold" }}>{location?.state}</strong>
          {`. Please open it and click the button inside to confirm your subscription.`}
        </p>
        </div>
        <div>
        <button onClick={()=>navigate('/')} className={`${styles.successButton} mb-1`}>
          Dismiss message
        </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Success;
