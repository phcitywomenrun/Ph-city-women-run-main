import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./save.css";
import Image from "./7c709d8cb79c47c5101047070cd2dbd9.jpg";

const SaveUrPotForm = ({ isOpen, closeOverlay }) => {
  if (!isOpen) return null;

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
        onClick={closeOverlay}
        size={30}
        className=" absolute top-5 right-10 text-[#FFFFFF] cursor-pointer"
      />
      <div className="flex justify-center items-center py-[70px]  my-0 mx-auto  w-full h-auto ">
        <div className="form-container !pt-[40px] silver:!px-[50px]">
          <div className="flex justify-between items-center w-full  ">
            <div className="flex flex-col justify-center items-center w-full">
              <h2 className=" sm:text-[40px] leading-[52px] text-[#FFFFFF] !font-[176]">
                The Run Registration Form
              </h2>
              <p className="text-[16px] text-[#101828] ">Register to Run</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <form
              className="flex gap-[20px] flex-col"
              action="https://forms.zohopublic.com/phcitywomenrunphcityw1/form/THERUNNINGEVENTSREGISTRATIONFORM/formperma/KtoqI_6vnk68oXQKHoHlAnE4Y5iNKrllHlPsQ4YxxKA/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              {/* <h2>THE RUNNING EVENTS REGISTRATION FORM</h2> */}
              <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                <div className="w-full">
                  <label>
                    Select Run Category <em style={{ color: "red" }}>*</em>
                  </label>
                  <select name="Dropdown">
                    <option value="-Select-" selected>
                      Select -
                    </option>
                    <option value="5km Run">5km Run</option>
                    <option value="10km Run">10km Run</option>
                  </select>
                </div>
                <div className="w-full">
                  <label>
                    Date of Birth <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    name="Date"
                    maxLength="25"
                    placeholder="01-Dec-2024"
                  />
                </div>
              </div>
              <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                <div className="w-full">
                  <label>
                    First Name <em style={{ color: "red" }}>*</em>
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
                    Last Name <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_Last"
                    placeholder="Last Name"
                  />
                </div>
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
                <div className=" w-full">
                  <label>
                    Phone Number <em style={{ color: "red" }}>*</em>
                  </label>
                  <div className="flex gap-2 w-full">
                    <input
                      className="max-w-[60px]"
                      type="text"
                      name="PhoneNumber_countrycodeval"
                      maxLength="10"
                      id="international_PhoneNumber_countrycodeval"
                      placeholder="Code"
                    />
                    <input
                      type="text"
                      name="PhoneNumber_countrycode"
                      maxLength="20"
                      id="international_PhoneNumber_countrycode"
                      placeholder="Number"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label>
                  Home Address <em style={{ color: "red" }}>*</em>
                </label>
                <input
                  type="text"
                  maxLength="255"
                  name="Address_AddressLine1"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                <div className="w-full">
                  <label>
                    Next Of Kin First Name <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    name="SingleLine"
                    maxLength="255"
                    placeholder="Next Of Kin First Name"
                  />
                </div>

                <div className="w-full">
                  <label>
                    Next of Kin Phone <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    name="PhoneNumber1_countrycode"
                    maxLength="20"
                    id="international_PhoneNumber1_countrycode"
                    placeholder="Next of Kin Phone"
                  />
                </div>
              </div>

              <div className="flex gap-[9px] justify-center items-start">
                <input
                  className="!w-[16px] !h-[16px] rounded-sm"
                  type="checkbox"
                  id="Checkbox_1"
                  name="Checkbox"
                  value="Agree"
                />
                <label className="!font-normal text-[14px]">
                  Indemnity: I hereby confirm that I am registering for PH City
                  Women Run and certify that I am aware of the potential hazards
                  associated with this event. I affirm that I am in good
                  physical condition and have received adequate training to
                  partake in said event. I shall not hold the organisers, its
                  agents, and sponsors liable for any accident, injury, death,
                  loss of property caused before, during, and after the race. I
                  certify that all the above particulars provided are correct
                  and accurate. I, the undersigned, have read and understood and
                  agree to abide by the rules and regulations of the Run, and
                  grant unrestricted permission for the utilization of my
                  likeness, encompassing photographs and video.
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

export default SaveUrPotForm;
