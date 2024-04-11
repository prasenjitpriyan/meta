import React from "react";
import { validateEmail } from "../utils";

const PasswordErrorMessage = () => {
  return (
    <p className="text-red-600">Password should have at least 8 characters</p>
  );
};

const SignUp = () => {
  const options = [
    { label: "User", value: "user" },
    { label: "Store", value: "store" },
    { label: "Admin", value: "admin" },
  ];

  const [value, setValue] = React.useState("user");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = () => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="p-10 border-2">
      <h1 className="text-white font-semibold text-xl pb-2">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="grid grid-row-8 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">
              First name <sup>*</sup>
            </label>
            <input
              className="w-[50%] pt-1 pb-1 rounded shadow-md border-red-600 border-2"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName">Last name</label>
            <input
              className="w-[50%] pt-1 pb-1 rounded shadow-md border-red-600 border-2"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              className="w-[50%] pt-1 pb-1 rounded shadow-md border-red-600 border-2"
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              className="w-[50%] pt-1 pb-1 rounded shadow-md border-red-600 border-2"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : (
              <p className="text-red-300">Hidden</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              className="w-[50%] pt-1 pb-1 rounded shadow-md border-red-600 border-2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-red-600 text-white w-[50%] pt-1 pb-1 rounded"
              disabled={!getIsFormValid()}
            >
              Create Account
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
