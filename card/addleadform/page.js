"use client";
import React, { useState } from "react";

const AddLeadForm = () => {
  const [formData, setFormData] = useState({
    Status: "Pending",
    Bank_Name: "HDFC Bank",
    Customer_Name: "",
    Father_Name: "",
    Mobile: "",
    Personal_Email: "",
    Pan_Card: "",
    Customer_Location: "",
    Company_Name: "",
    Dob: "",
    Login_Date: "",
    Gender: "",
    Religion: "",
    Income_Source: "",
    Marital_Status: "",
    Qualification: "",
    Property_Status: "",
    Aadhar_Card_No: "",
    Current_Address_Line1: "",
    Current_City: "",
    Current_Landmark: "",
    Current_State: "",
    Current_Pin: "",
    Permanent_Address_Line1: "",
    Permanent_City: "",
    Permanent_Landmark: "",
    Permanent_State: "",
    Permanent_Pin: "",
    Designation: "",
    Company_Address: "",
    Company_City: "",
    Company_State: "",
    Company_Pin: "",
    Annual_Ctc: "",
    Net_Salary: "",
    Caller_Name: "",
    TL_Name: "",
    Manager_Name: "",
    email: "",
  });
  const [sameAsCurrent, setSameAsCurrent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setSameAsCurrent((prevValue) => !prevValue);

    if (!sameAsCurrent) {
      setFormData((prevData) => ({
        ...prevData,
        Permanent_Address_Line1: formData.Current_Address_Line1,
        Permanent_City: formData.Current_City,
        Permanent_Landmark: formData.Current_Landmark,
        Permanent_State: formData.Current_State,
        Permanent_Pin: formData.Current_Pin,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        Permanent_Address_Line1: "",
        Permanent_City: "",
        Permanent_Landmark: "",
        Permanent_State: "",
        Permanent_Pin: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeEmail = localStorage.getItem("employeeEmail");
    const dataToSend = { ...formData, email: employeeEmail };

    fetch("https://api.addrupee.com/api/card_all_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);

        setFormData({
          Bank_Name: "HDFC Bank",
          Customer_Name: "",
          Father_Name: "",
          Mobile: "",
          Personal_Email: "",
          Pan_Card: "",
          Customer_Location: "",
          Company_Name: "",
          Dob: "",
          Login_Date: "",
          Gender: "",
          Religion: "",
          Income_Source: "",
          Marital_Status: "",
          Qualification: "",
          Property_Status: "",
          Aadhar_Card_No: "",
          Current_Address_Line1: "",
          Current_City: "",
          Current_Landmark: "",
          Current_State: "",
          Current_Pin: "",
          Permanent_Address_Line1: "",
          Permanent_City: "",
          Permanent_Landmark: "",
          Permanent_State: "",
          Permanent_Pin: "",
          Designation: "",
          Company_Address: "",
          Company_City: "",
          Company_State: "",
          Company_Pin: "",
          Annual_Ctc: "",
          Net_Salary: "",
          Caller_Name: "",
          TL_Name: "",
          Manager_Name: "",
        });
      })
      .catch((error) => {
        alert("Failed to submit the form");
      });
  };
  return (
    <>
      <section style={{ backgroundColor: "#E7E5E5", padding: "20px" }}>
        <div className="container">
          <h5 style={{ color: "#d90429", fontWeight: 600 }}>
            All fields are required
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-3 col-12 col-lg-6 col-md-6">
                <label htmlFor="appliedBank" className="form-label">
                  Which Bank You Want To Apply*:
                </label>
                <select
                  className="form-select"
                  name="Bank_Name"
                  value={formData.Bank_Name}
                  onChange={handleChange}
                  aria-label="Default select example"
                  required
                >
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="AXIS Bank">AXIS Bank</option>
                  <option value="AXIS Finacnce">AXIS Finacnce</option>
                  <option value="AU Small Finance Bank">
                    AU Small Finance Bank
                  </option>
                  <option value="Yes Bank">Yes Bank</option>
                  <option value="IndusInd Bank">IndusInd Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="Standard Chartered Bank">
                    Standard Chartered Bank
                  </option>
                  <option value="Bajaj">Bajaj</option>
                  <option value="Cholamandalam Investment and Finance Company">
                    Cholamandalam Investment and Finance Company
                  </option>
                  <option value="Incred Financial Services ">
                    Incred Financial Services
                  </option>
                  <option value="Finnable Credit Pvt Ltd">
                    Finnable Credit Pvt Ltd
                  </option>
                  <option value="Paysense Services">Paysense Services</option>

                  <option value="IDFC first Bank">IDFC First Bank</option>
                  <option value="Tata Capital Finance Services Pvt Ltd">
                    Tata Capital Finance Services Pvt Ltd
                  </option>

                  <option value="Aditya Birla">Aditya Birla</option>
                  <option value="Kotak Mahindra Bank">
                    Kotak Mahindra Bank
                  </option>

                  <option value="Standard Chartered Bank">
                    Standard Chartered Bank
                  </option>
                  <option value="Piramal Capital">Piramal Capital</option>
                  <option value="RBL Bank">RBL Bank</option>

                  <option value="Muthoot Finance Ltd">
                    Muthoot Finance Ltd
                  </option>
                  <option value="IndusInd Bank Limited">
                    IndusInd Bank Limited
                  </option>
                  <option value="L&T Finance Ltd">L&T Finance Limited</option>
                  <option value="Hero Finance Ltd">Hero Finance Limited</option>
                  <option value="Bajaj Finance">Bajaj Finance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3 col-12 col-lg-6 col-md-6">
                <label htmlFor="Customer_Name" className="form-label">
                  Customer Name As Per Pan Card*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Customer_Name"
                  value={formData.Customer_Name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Father_Name" className="form-label">
                  Father's Name*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Father_Name"
                  value={formData.Father_Name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Mobile" className="form-label">
                  Mobile Number*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Mobile"
                  value={formData.Mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Personal_Email" className="form-label">
                  Personal Email*:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="Personal_Email"
                  value={formData.Personal_Email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Pan_Card" className="form-label">
                  Pan Card Number*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Pan_Card"
                  value={formData.Pan_Card}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Customer_Location" className="form-label">
                  Customer Location*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Customer_Location"
                  value={formData.Customer_Location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Company_Name" className="form-label">
                  Company Name*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Company_Name"
                  value={formData.Company_Name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Dob" className="form-label">
                  Date of Birth*:
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="Dob"
                  value={formData.Dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Login_Date" className="form-label">
                  Login Date*:
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="Login_Date"
                  value={formData.Login_Date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Gender" className="form-label">
                  Gender*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Religion" className="form-label">
                  Religion:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Religion"
                  value={formData.Religion}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Income_Source" className="form-label">
                  Income Source*:
                </label>
                <select
                  className="form-select"
                  name="Income_Source"
                  value={formData.Income_Source}
                  onChange={handleChange}
                  required
                  aria-label="Default select example"
                >
                  <option value="Self">Self</option>
                  <option value="Salaried">Salaried</option>
                </select>
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Marital_Status" className="form-label">
                  Marital Status:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Marital_Status"
                  value={formData.Marital_Status}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Qualification" className="form-label">
                  Qualification:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Qualification"
                  value={formData.Qualification}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Property_Status" className="form-label">
                  Property Status:
                </label>

                <select
                  className="form-select"
                  name="Property_Status"
                  value={formData.Property_Status}
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  <option value="Own">Own</option>
                  <option value="Rented">Rented</option>
                </select>
              </div>

              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Aadhar_Card_No" className="form-label">
                  Aadhar Card Number*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Aadhar_Card_No"
                  value={formData.Aadhar_Card_No}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Current_Address_Line1" className="form-label">
                  Current Address Line 1:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Current_Address_Line1"
                  value={formData.Current_Address_Line1}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Current_City" className="form-label">
                  Current City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Current_City"
                  value={formData.Current_City}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Current_Landmark" className="form-label">
                  Current Landmark:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Current_Landmark"
                  value={formData.Current_Landmark}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Current_State" className="form-label">
                  Current State:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Current_State"
                  value={formData.Current_State}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Current_Pin" className="form-label">
                  Current Pin Code:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Current_Pin"
                  value={formData.Current_Pin}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label
              className="fw-300 my-3"
              checked={sameAsCurrent}
              onChange={handleCheckboxChange}
            >
              Same as Current Adress*
            </label>
            <input
              type="checkbox"
              className="mx-2"
              checked={sameAsCurrent}
              onChange={handleCheckboxChange}
            />

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Permanent_Address_Line1" className="form-label">
                  Permanent Address Line 1:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Permanent_Address_Line1"
                  value={formData.Permanent_Address_Line1}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Permanent_City" className="form-label">
                  Permanent City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Permanent_City"
                  value={formData.Permanent_City}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Permanent_Landmark" className="form-label">
                  Permanent Landmark:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Permanent_Landmark"
                  value={formData.Permanent_Landmark}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Permanent_State" className="form-label">
                  Permanent State:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Permanent_State"
                  value={formData.Permanent_State}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Permanent_Pin" className="form-label">
                  Permanent Pin Code:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Permanent_Pin"
                  value={formData.Permanent_Pin}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Designation" className="form-label">
                  Designation*:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Designation"
                  value={formData.Designation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Company_Address" className="form-label">
                  Company Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Company_Address"
                  value={formData.Company_Address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Company_City" className="form-label">
                  Company City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Company_City"
                  value={formData.Company_City}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Company_State" className="form-label">
                  Company State:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Company_State"
                  value={formData.Company_State}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Company_Pin" className="form-label">
                  Company Pin Code:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Company_Pin"
                  value={formData.Company_Pin}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Annual_Ctc" className="form-label">
                  Annual CTC:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Annual_Ctc"
                  value={formData.Annual_Ctc}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Net_Salary" className="form-label">
                  Net Salary:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Net_Salary"
                  value={formData.Net_Salary}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Caller_Name" className="form-label">
                  Caller Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Caller_Name"
                  value={formData.Caller_Name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="TL_Name" className="form-label">
                  TL Name:
                </label>
                <select
                  type="text"
                  className="form-control"
                  name="TL_Name"
                  onChange={handleChange}
                  required
                >
                  <option selected disabled>
                    Select TL Name
                  </option>
                  <option value="CHAHAT SHARMA">CHAHAT SHARMA</option>
                  <option value="PRADEEP NAWHAL">PRADEEP NAWHAL</option>
                  <option value="RAJENDRA SINGH">RAJENDRA SINGH</option>
                  <option value="HIMANSHU GUJJAR">HIMANSHU GUJJAR</option>
                  <option value="FAIZAN KHAN">FAIZAN KHAN</option>
                  <option value="DEEPAK KUMAR">DEEPAK KUMAR</option>
                  <option value="BHAGWAN SINGH">BHAGWAN SINGH</option>
                  <option value="SACHIN KUMAR">SACHIN KUMAR</option>
                  <option value="AKASH BHARDWAJ">AKASH BHARDWAJ</option>
                </select>
              </div>
              <div className="mb-3 col-12 col-lg-4 col-md-6">
                <label htmlFor="Manager_Name" className="form-label">
                  Manager Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Manager_Name"
                  value={formData.Manager_Name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddLeadForm;
