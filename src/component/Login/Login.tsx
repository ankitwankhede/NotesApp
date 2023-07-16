import ASYNC_KEYS from "../../constant/constant";
import { useState } from "react";
import styles from "./Login.module.css";

export function Login() {
  type FormData = {
    username: string;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  function onSubmitHandler(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(JSON.stringify(formData));
    localStorage.setItem(ASYNC_KEYS.LOGIN_CRED, JSON.stringify(formData));
    console.log("--- " + localStorage.getItem(ASYNC_KEYS.LOGIN_CRED));
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmitHandler} className={styles.formStyle}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={onChangeHandler}
          name="username"
        />
        <label htmlFor="pwd">Password</label>
        <input
          id="pwd"
          type="text"
          value={formData.password}
          onChange={onChangeHandler}
          name="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
