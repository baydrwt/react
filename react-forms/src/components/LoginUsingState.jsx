import Input from "../components/Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const { value: emailValue, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, hasError: emailHasError } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const { value: passwordValue, handleInputBlur: handlepasswordBlur, handleInputChange: handlepasswordChange, hasError: passwordHasError } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input id="email" type="email" name="email" onBlur={handleEmailBlur} onChange={handleEmailChange} value={emailValue} error={emailHasError && "Please enter a valid email"} />

        <Input id="password" type="password" name="password" onBlur={handlepasswordBlur} onChange={handlepasswordChange} value={passwordValue} error={passwordHasError && "Please enter a valid password"} />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
