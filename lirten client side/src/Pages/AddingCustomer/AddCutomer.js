import React from "react";
import classes from "./AddCustomer.module.css";
import backButton from "../../Pics/back.png";
import ImgInfo from "../../Pics/imgInfo.png";
import btnVictor from "../../Pics/button.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import { axiosInstance } from "../../Network/config";

const AddCutomer = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
  });
  const [formValuesErr, setFormValuesErr] = useState({
    firstNameErr: null,
    lastNameErr: null,
    emailErr: null,
    countryErr: null,
    cityErr: null,
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/customers");
  };

  const handleFormChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFormValues({ ...formValues, firstName: e.target.value });
        setFormValuesErr({
          ...formValuesErr,
          firstNameErr:
            e.target.value.length === 0 ? "*Some fields are required !" : null,
        });
        break;

      case "lastName":
        setFormValues({ ...formValues, lastName: e.target.value });
        setFormValuesErr({
          ...formValuesErr,
          lastNameErr:
            e.target.value.length === 0 ? "*Some fields are required !" : null,
        });
        break;

      case "email":
        setFormValues({ ...formValues, email: e.target.value });
        setFormValuesErr({
          ...formValuesErr,
          emailErr:
            e.target.value.length === 0 ? "*Some fields are required !" : null,
        });
        break;

      case "country":
        setFormValues({ ...formValues, country: e.target.value });
        setFormValuesErr({
          ...formValuesErr,
          countryErr:
            e.target.value.length === 0 ? "*Some fields are required !" : null,
        });
        break;

      case "city":
        setFormValues({ ...formValues, city: e.target.value });
        setFormValuesErr({
          ...formValuesErr,
          cityErr:
            e.target.value.length === 0 ? "*Some fields are required !" : null,
        });
        break;

      default:
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formValuesErr.firstNameErr &&
      !formValuesErr.lastNameErr &&
      !formValuesErr.emailErr &&
      !formValuesErr.countryErr &&
      !formValuesErr.cityErr
    ) {
      const customer = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        country: formValues.country,
        city: formValues.city,
      };
      axiosInstance
        .post("/createcustomer", customer)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      navigate("/customers");
    }
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <Sidebar />
        <div className={classes.rightContainer}>
          <div className={classes.headerContainer}></div>
          <img
            onClick={handleClick}
            className={classes.backBtn}
            src={backButton}
            alt="back button "
          />
          <p className={classes.customersInfo}>Customer Information</p>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={classes.containerInfo}
        >
          <img className={classes.imgInfo} src={ImgInfo} alt="info" />

          <div className={classes.firstNameContainer}>
            <label className={classes.label}>First Name: </label>
            <input
              className={classes.inputStyling}
              name="firstName"
              type="text"
              placeholder=""
              autoComplete="off"
              onChange={(e) => handleFormChange(e)}
              value={formValues.firstName}
            />
          </div>

          <div className={classes.lastNameContainer}>
            <label className={classes.label}>Last Name: </label>
            <input
              className={classes.inputStyling}
              name="lastName"
              type="text"
              placeholder=""
              autoComplete="off"
              onChange={(e) => handleFormChange(e)}
              value={formValues.lastName}
            />
          </div>

          <div className={classes.emailContainer}>
            <label className={classes.label}>Email: </label>
            <input
              className={classes.inputStyling}
              name="email"
              type="text"
              placeholder="adadasaj@gmail.com"
              autoComplete="off"
              onChange={(e) => handleFormChange(e)}
              value={formValues.email}
            />
          </div>

          <div className={classes.CountryContainer}>
            <label className={classes.label}>Country: </label>
            <select
              className={classes.inputStyling}
              name="country"
              onChange={(e) => handleFormChange(e)}
              value={formValues.country}
            >
              <option value={""}></option>
              <option value="Egypt">Egypt</option>
            </select>
          </div>

          <div className={classes.StateContainer}>
            <label className={classes.label}>State: </label>
            <select
              className={classes.inputStyling}
              name="city"
              onChange={(e) => handleFormChange(e)}
              value={formValues.city}
            >
              <option value={""}></option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Giza">Giza</option>
              <option value="Benisuef">Benisuef</option>
              <option value="Luxor">Luxor</option>
              <option value="Menia">Menia</option>
              <option value="Aswan">Aswan</option>
              <option value="Qena">Qena</option>
            </select>
          </div>
          <div className={classes.btn}>
            <button
              style={{
                background: "#54B7B7",
                fontFamily: "Rubik",
                border: "none",
                width: "114px",
                height: "34px",
              }}
              type="submit"
              className="btn btn-primary"
              disabled={
                formValuesErr.firstNameErr ||
                formValuesErr.lastNameErr ||
                formValuesErr.emailErr ||
                formValuesErr.countryErr ||
                formValuesErr.cityErr
              }
            >
              <img
                className={classes.btnVictor}
                src={btnVictor}
                alt="victor button"
              />
              Proceed
            </button>
          </div>

          {formValuesErr.firstNameErr ? (
            <div className={classes.errMessage}>
              {formValuesErr.firstNameErr}
            </div>
          ) : null}

          {formValuesErr.lastNameErr ? (
            <div className={classes.errMessage}>
              {formValuesErr.lastNameErr}
            </div>
          ) : null}
          {formValuesErr.emailErr ? (
            <div className={classes.errMessage}>{formValuesErr.emailErr}</div>
          ) : null}
          {formValuesErr.countryErr ? (
            <div className={classes.errMessage}>{formValuesErr.countryErr}</div>
          ) : null}
          {formValuesErr.cityErr ? (
            <div className={classes.errMessage}>{formValuesErr.cityErr}</div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default AddCutomer;
