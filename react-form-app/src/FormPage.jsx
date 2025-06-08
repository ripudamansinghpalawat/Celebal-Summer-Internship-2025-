import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = {
  India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
};

function FormPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    countryCode: "+91",
    phoneNumber: "",
    country: "",
    city: "",
    pan: "",
    aadhar: "",
  });

  const [errors, setErrors] = useState({});

  // Validation rules
  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{7,15}$/.test(form.phoneNumber))
      newErrors.phoneNumber = "Phone number is invalid";

    if (!form.country) newErrors.country = "Country is required";
    if (!form.city) newErrors.city = "City is required";

    if (!form.pan.trim()) newErrors.pan = "PAN No. is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan))
      newErrors.pan = "PAN No. is invalid";

    if (!form.aadhar.trim()) newErrors.aadhar = "Aadhar No. is required";
    else if (!/^\d{12}$/.test(form.aadhar))
      newErrors.aadhar = "Aadhar No. must be 12 digits";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/details", { state: { ...form } });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Registration Form</h2>

      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
      </label>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </label>

      <label>
        Password:
        <input
          type={form.showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            name="showPassword"
            checked={form.showPassword}
            onChange={handleChange}
            id="showPwd"
          />
          <label htmlFor="showPwd">Show Password</label>
        </div>
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </label>

      <label>
        Phone Number:
        <div style={{ display: "flex", gap: "5px" }}>
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            style={{ width: "80px" }}
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+61">+61</option>
          </select>
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Number"
            style={{ flex: 1 }}
          />
        </div>
        {errors.phoneNumber && (
          <div style={{ color: "red" }}>{errors.phoneNumber}</div>
        )}
      </label>

      <label>
        Country:
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {Object.keys(countries).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.country && <div style={{ color: "red" }}>{errors.country}</div>}
      </label>

      <label>
        City:
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          disabled={!form.country}
        >
          <option value="">Select City</option>
          {form.country &&
            countries[form.country].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
        {errors.city && <div style={{ color: "red" }}>{errors.city}</div>}
      </label>

      <label>
        PAN No.:
        <input
          type="text"
          name="pan"
          value={form.pan}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              pan: e.target.value.toUpperCase(),
            }))
          }
          maxLength={10}
        />
        {errors.pan && <div style={{ color: "red" }}>{errors.pan}</div>}
      </label>

      <label>
        Aadhar No.:
        <input
          type="text"
          name="aadhar"
          value={form.aadhar}
          onChange={handleChange}
          maxLength={12}
        />
        {errors.aadhar && <div style={{ color: "red" }}>{errors.aadhar}</div>}
      </label>

      <button
        type="submit"
        disabled={Object.keys(errors).length > 0}
        style={{ marginTop: "10px" }}
      >
        Submit
      </button>
    </form>
  );
}

export default FormPage;
