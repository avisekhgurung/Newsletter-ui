import { Fragment } from "react";
import { listData } from "../../constants";
import List from "../../components/List";
import SubscribeForm from "../../components/SubscribeForm";
import signUpImageMobile from "../../assets/images/sign-up-image-desktop.svg"

const SignUp = () => {
  return (
    <Fragment>
      <div className="sign-up-container">
        <div className="sign-up">
          <div className="sign-up-content">
            <h1 className="mb-2 heading">Stay updated!</h1>
            <p className="mb-2 text">
              Join 60,000+ product managers receiving monthly updates on.
            </p>
            {listData?.map((list) => (
              <List key={list?.id} image={list?.icon} text={list?.text} />
            ))}
            <SubscribeForm />
          </div>
          <div className="sign-up-image"></div>
          <div className="sign-up-image-mobile">
            <img src={signUpImageMobile} alt="sign-up-image-mobile" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
