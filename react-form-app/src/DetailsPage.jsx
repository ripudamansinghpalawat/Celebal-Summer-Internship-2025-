import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    // If no data, redirect to form
    navigate("/");
    return null;
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Submitted Details</h2>
      <p><b>First Name:</b> {data.firstName}</p>
      <p><b>Last Name:</b> {data.lastName}</p>
      <p><b>Username:</b> {data.username}</p>
      <p><b>Email:</b> {data.email}</p>
      <p><b>Phone Number:</b> {data.countryCode} {data.phoneNumber}</p>
      <p><b>Country:</b> {data.country}</p>
      <p><b>City:</b> {data.city}</p>
      <p><b>PAN No.:</b> {data.pan}</p>
      <p><b>Aadhar No.:</b> {data.aadhar}</p>
    </div>
  );
}

export default DetailsPage;
