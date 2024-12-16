import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./save.css";
import Image from "./8cab461438963ef8edc175f263fda5fb.jpg";

const ConferenceForm = ({ isOpenConferenceform, closeConferenceform }) => {
  if (!isOpenConferenceform) return null;
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
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
        className="close-button absolute top-5 right-10 text-[#FFFFFF] cursor-pointer"
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
            <form
              className="flex gap-[24px] flex-col"
              action="https://forms.zohopublic.com/phcitywomenrunphcityw1/form/ConferenceRegistrationForm/formperma/aI2ZEu6ptyVjO_SYoTyHKY5dhVCl0Ud8sWtYkoDr2N8/htmlRecords/submit"
              name="form"
              id="form"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
            >
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              {/* <h2>Conference Registration Form</h2>
              <p></p> */}

              {/* Name Fields */}
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
                {/* Gender Dropdown */}
                <div className="w-full">
                  <label>
                    Gender <em style={{ color: "red" }}>*</em>
                  </label>
                  <select name="Dropdown">
                    <option value="-Select-">-Select-</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {/* Date of Birth */}
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
              {/* Phone Fields */}
              <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                {/*  Phone Number */}
                <div className="w-full">
                  <label>
                    Phone Number <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    name="PhoneNumber_countrycode"
                    maxLength="20"
                    placeholder="Phone Number"
                    id="international_PhoneNumber_countrycode"
                  />
                </div>
                {/* Alternate Phone Number */}
                <div className="w-full">
                  <label>Alternate Phone Number</label>
                  <input
                    type="text"
                    name="PhoneNumber1_countrycode"
                    maxLength="20"
                    placeholder="Alternate Phone Number"
                    id="international_PhoneNumber1_countrycode"
                  />
                </div>
              </div>

              {/* Email Address & Organisation/Company Name Fields */}
              <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                {/* Email Address */}
                <div className="w-full">
                  <label>
                    Email Address <em style={{ color: "red" }}>*</em>
                  </label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Email"
                    placeholder="Email Address"
                  />
                </div>
                {/* Organisation/Company Name */}
                <div className="w-full">
                  <label>Organisation/Company Name</label>
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_Middle"
                    fieldType={7}
                    placeholder="Organisation/Company Name"
                  />
                </div>
              </div>

              {/* Address Fields */}
              <div>
                <label>
                  Contact Address
                  <input
                    type="text"
                    maxLength="255"
                    name="Address_AddressLine1"
                    placeholder="Street Address"
                  />
                </label>
                <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                  <div className="flex flex-col at500:flex-row justify-center items-center at500:space-x-3 w-full">
                    <div className="w-full">
                      <input
                        type="text"
                        maxLength="255"
                        name="Address_City"
                        placeholder="City"
                      />
                    </div>
                    <div className="w-full">
                      <select name="Address_Country">
                        <option value="-Select-">Country</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Antigua and Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Botswana</option>
                        <option>Brazil</option>
                        <option>Brunei</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape Verde</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Costa Rica</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Greece</option>
                        <option>Grenada</option>
                        <option>Guatemala</option>
                        <option>Guinea</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Laos</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macau</option>
                        <option>Macedonia</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mexico</option>
                        <option>Moldova</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montenegro</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Nigeria</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Panama</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Qatar</option>
                        <option>Romania</option>
                        <option>Russia</option>
                        <option>Rwanda</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Korea</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syria</option>
                        <option>Taiwan</option>
                        <option>Tajikistan</option>
                        <option>Tanzania</option>
                        <option>Thailand</option>
                        <option>Togo</option>
                        <option>Tonga</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Vatican City</option>
                        <option>Venezuela</option>
                        <option>Vietnam</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      maxLength="255"
                      name="Address_Region"
                      placeholder="State/Region/Province"
                    />
                  </div>
                </div>
              </div>

              {/* Referral Source Dropdown */}
              <div>
                <label>
                  How did you hear about us <em style={{ color: "red" }}>*</em>
                </label>
                <select name="Dropdown1">
                  <option value="-Select-">-Select-</option>
                  <option value="Social Media">Social Media</option>
                  <option value="A Friend">A Friend</option>
                  <option value="A Work Colleague">A Work Colleague</option>
                  <option value="Email Newsletter">Email Newsletter</option>
                  <option value="WhatsApp group">WhatsApp group</option>
                </select>
              </div>
              <div className="flex gap-[10px] flex-col justify-center items-start w-full my-[20px]">
                <label className="!font-normal text-[14px]">
                  Indemnity: I, the undersigned, grant unrestricted permission
                  for the utilization of my likeness, encompassing photographs
                  and video.
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

export default ConferenceForm;
