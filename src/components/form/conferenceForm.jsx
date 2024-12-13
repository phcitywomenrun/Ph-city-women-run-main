import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./save.css";
import Image from "./8cab461438963ef8edc175f263fda5fb.jpg";

const ConferenceForm = ({ isOpenConferenceform, closeConferenceform }) => {
  if (!isOpenConferenceform) return null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    altPhoneNumber: "",
    contactAddress: "",
    email: "",
    companyName: "",
    volunteerExperience: "",
    nextOfKinFirstName: "",
    nextOfKinLastName: "",
    shirtSize: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div
      className="overlay1  relative flex flex-col justify-end items-end bg-cover px-[15px] sm:px-[20px] silver:px-[200px] py-[20px] h-auto w-full  overflow-hidden"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundColor: "#000000CC",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="overlay"
    >
      <AiOutlineClose
        onClick={closeConferenceform}
        size={30}
        className=" absolute top-5 right-10 text-[#FFFFFF] cursor-pointer"
      />
      <div className="flex justify-center items-center py-[70px]  my-0 mx-auto  w-full h-auto">
        <div className="form-container !pt-[40px] silver:!px-[50px]">
          <div className="flex justify-between items-center w-full  ">
            <div className="flex flex-col justify-center items-center w-full">
              <h2 className=" sm:text-[40px] leading-[52px] text-[#FFFFFF] !font-[176]">
                Conference Registration Form
              </h2>
              <p className="text-[16px] text-[#101828] ">
                Register to Participate
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <form className="flex gap-[24px] flex-col" onSubmit={handleSubmit}>
              <div className="flex gap-[10px] flex-col justify-center items-center w-full">
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      First name <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label>
                      Last name <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      gender <em style={{ color: "red" }}>*</em>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label>
                      Date of Birth <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="date-input"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Phone Number <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label>
                      Alternate Phone Number <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="tel"
                      name="altPhoneNumber"
                      placeholder="Alternate Phone Number"
                      value={formData.altPhoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Email Adresss <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label>
                      Organisation/Company Name{" "}
                      <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="companyName"
                      name="name"
                      placeholder="Organisation/Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Contact Address <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="contactAddress"
                      placeholder="Contact Address"
                      value={formData.contactAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label>
                      How did you hear about us
                      <em style={{ color: "red" }}></em>
                    </label>
                    <select
                      name="shirtSize"
                      value={formData.shirtSize}
                      onChange={handleChange}
                     
                    >
                      <option value="">Select </option>
                      <option value="Social Media">Social Media</option>
                      <option value="A Friend">A Friend</option>
                      <option value="Work Colleague">Work Colleague</option>
                      <option value="Email Newsletter">Email Newsletter</option>
                      <option value="WhatsApp group">WhatsApp group</option>
                      <option value="Others">Others (specify)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-[9px] justify-center items-start">
                <input
                  className="!w-[16px] !h-[16px] rounded-sm"
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <label className="!font-normal text-[14px]">
                  Indemnity: I hereby confirm that I am registering for PH City
                  Women Run and certify that I am aware of the potential hazards
                  associated with this event. I affirm that I am in good
                  physical condition to participate as a volunteer in said
                  event. I shall not hold the organisers, its agents, and
                  sponsors liable for any accident, injury, death, loss of
                  property caused before, during, and after the race and
                  conference. I certify that all the above particulars provided
                  are correct and accurate. I, the undersigned, have read and
                  understood and agree to abide by the rules and regulations of
                  the Run, and grant unrestricted permission for the utilization
                  of my likeness, encompassing photographs and video.
                </label>
              </div>
              <button type="submit" className="submit-button">
                Save Your Spot
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceForm;
