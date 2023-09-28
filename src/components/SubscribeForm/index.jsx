import styles from "./SubscribeForm.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SubscribeForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => navigate('/success', {state: data.email});
  return (
    <div className={`${styles.formContainer} mb-2`}>
      <div className="label">
        <h6 className={`${styles.formHeading}  mb-1`}>Email address</h6>
        {errors?.email && <p className="error">{errors.email.message}</p>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={`${styles.formInput} ${
            errors.email ? styles.formInputError : ""
          }`}
          type="text"
          placeholder="email@Company.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
        />
        <button
         className={styles.formButton} 
         type="submit"
         >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
