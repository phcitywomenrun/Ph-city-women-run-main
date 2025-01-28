import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./save.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "./8cab461438963ef8edc175f263fda5fb.jpg";

const volunteerForm = ({ isOpenVolunteerform, closeVolunteerform }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  if (!isOpenVolunteerform) return null;

  return (
    <div
      className="overlay1  relative flex flex-col justify-end items-end bg-cover px-[15px] sm:px-[20px] silver:px-[200px] py-[20px] h-auto w-full  overflow-hidden"
      style={{
        // backgroundImage: `url(${Image})`,
        backgroundColor: "#000000",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="overlay"
    >
      <AiOutlineClose
        onClick={closeVolunteerform}
        size={30}
        className="close-button absolute top-5 right-10 text-[#FFFFFF] cursor-pointer"
      />
      <div className="flex justify-center items-center py-[70px]  my-0 mx-auto  w-full h-auto ">
        <div className="form-container !pt-[40px] silver:!px-[50px]">
          <div className="flex justify-between items-center w-full  ">
            <div className="flex flex-col justify-center items-center w-full">
              <h2 className=" sm:text-[30px] leading-[52px] text-[#FFFFFF] !font-[176]">
                Volunteer with us
              </h2>
              <p className="text-[16px] text-[#101828] ">
                Register to volunteer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <form
              className="flex gap-[24px] flex-col"
              action="https://forms.zohopublic.com/phcitywomenrunphcityw1/form/Volunteerform/formperma/Rws1TNTsPNozKqzH4Q87ZdIuwGh9OR1ARqSYdGcbGE0/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              {/* Hidden Fields */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <div className="flex gap-[10px] flex-col justify-center items-center w-full">
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      First name <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      maxLength="255"
                      name="Name_First"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="w-full">
                    <label>
                      Last name <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      maxLength="255"
                      name="Name_Last"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label>Other Names</label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_Middle"
                    placeholder="Other Names"
                  />
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      gender <em style={{ color: "red" }}>*</em>
                    </label>
                    <select name="Dropdown">
                      <option value="-Select-">-Select-</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label>
                      Date of Birth <em style={{ color: "red" }}>*</em>
                    </label>
                    {/* <input
                      type="text"
                      name="Date"
                      maxLength="25"
                      placeholder="01-Dec-2024"
                    /> */}
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd-MMM-yyyy"
                      placeholderText="Select Date"
                      className="border rounded p-2 !w-full !z-[99999]"
                      name="Date" // Important: Add the `name` attribute for Zoho
                    />
                  </div>
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Phone Number <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="PhoneNumber_countrycode"
                      maxLength="20"
                      id="international_PhoneNumber_countrycode"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="w-full">
                    <label>
                      Alternate Phone Number <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="PhoneNumber1_countrycode"
                      maxLength="20"
                      id="international_PhoneNumber1_countrycode"
                      placeholder="Alternate Phone Number"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label>
                    Current Contact Address <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_AddressLine1"
                    placeholder="Current Contact Address"
                  />
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Email Adresss <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      maxLength="255"
                      name="Email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="w-full">
                    <label>
                      Have you volunteered before
                      <em style={{ color: "red" }}>*</em>
                    </label>
                    <select name="Dropdown1">
                      <option value="-Select-">Select One</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Next of Kin / Guarantor
                      <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="SingleLine"
                      maxLength="255"
                      placeholder="Next of Kin Name"
                    />
                  </div>
                  <div className="w-full">
                    <label>
                      Next of Kin / Guarantor Phone Number
                      <em style={{ color: "red" }}>*</em>
                    </label>
                    <input
                      type="text"
                      name="PhoneNumber2_countrycode"
                      maxLength="20"
                      id="international_PhoneNumber2_countrycode"
                      placeholder="Next of Kin Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="w-full">
                    <label>
                      Select Shirt Size <em style={{ color: "red" }}>*</em>
                    </label>
                    <select name="Dropdown2">
                      <option value="-Select-">-Select-</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>
                  <div className="w-full"></div>
                </div>
              </div>

              <div className="flex flex-col gap-[9px] justify-center items-start">
                <label className="!font-normal text-[14px] lowercase">
                  <strong>Indemnity:</strong>{" "}
                  <span className=" capitalize">I</span> hereby confirm that I
                  am registering for
                  <strong className="uppercase"> PH City Women Run</strong> and
                  certify that I am aware of the potential hazards associated
                  with this event. I affirm that I am in good physical condition
                  to participate as a volunteer in said event. I shall not hold
                  the organisers, its agents, and sponsors liable for any
                  accident, injury, death, loss of property caused before,
                  during, and after the race and conference. I certify that all
                  the above particulars provided are correct and accurate.{" "}
                  <br />
                  <br />
                  <span className=" capitalize">I</span>, the undersigned, have
                  read and understood and agree to abide by the rules and
                  regulations of the Run, and grant unrestricted permission for
                  the utilization of my likeness, encompassing photographs and
                  video.
                </label>
                <div className="flex gap-[9px] justify-center items-start">
                  <input
                    className="!w-[16px] !h-[16px] rounded-sm"
                    type="checkbox"
                    id="Checkbox_1"
                    name="Checkbox"
                    value="I Agree"
                  />
                  <label className="!font-normal text-[14px]">I Agree</label>
                </div>
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

export default volunteerForm;
