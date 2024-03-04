
import React, { useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import ReCAPTCHA from "react-google-recaptcha";
import Lottie from "react-lottie";
import animationData from "./Animation.json";


import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";

import contactsGreen from "../../assets/contactsGreen.svg";

import "./Contacts.css";
import emailjs from "emailjs-com";
// import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from "../../../../SECURE.JS";

  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid white`,
      backgroundColor: "#152b61",

      color: `white`,

      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid #32CD30`,
      },
    },
    message: {
      border: `4px solid white`,
      backgroundColor: "#152b61",
      color: `white`,
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid #32CD30`,
      },
    },
    label: {
      backgroundColor: "#152b61",
      color: `#32CD30`,
      fontWeight: 600,
      fontSize: "1rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "flex",
      alignItems: "flex-start",
      width: "fit-content",
      justifyContent: "center",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",

      backgroundColor: "#10265ddc",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
      color: `white`,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        border: `4px solid #f2f2f2`,
        backgroundColor: "#f2f2f2",
        color: `white`,
      },
    },
    freecodecamp: {
      "&:hover": {
        color: "black !important",
      },
    },
    detailsIcon: {
      border: `4px solid #10265ddc`,
      backgroundColor: "#10265ddc",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
      color: `white`,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",

        border: `4px solid #32CD30`,
        backgroundColor: "#32CD30",
        color: `white`,
      },
    },
    submitBtn: {
      border: `4px solid green`,
      backgroundColor: "#10265ddc",
      padding: "0 1rem",
      color: `white`,
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",

        backgroundColor: "#32CD30",
        color: `white`,
      },
    },
  }));

  const Contact = () => {
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [captchaCompleted, setCaptchaCompleted] = useState(false);

  
    const handleClose = (reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };
  
    const handleContactForm = (e) => {
      e.preventDefault();

      // Check if captcha is completed
      if (!captchaCompleted) {
          setErrMsg("Please complete the captcha");
          setOpen(true);
          return;
      }

      if (name && email && message) {
          if (isEmail(email)) {
              const templateParams = {
                  from_name: name,
                  from_email: email,
                  message: message,
                  to_email: "tshepisomotshele@gmail.com",
              };

              emailjs
                  .send(
                      import.meta.env.VITE_EMAILJS_SERVICE_ID,
                      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                      templateParams,
                      import.meta.env.VITE_EMAILJS_USER_ID
                  )
                  .then(
                      (response) => {
                          console.log("Email sent successfully!", response);
                          setSuccess(true);
                          setErrMsg("");
                          setName("");
                          setEmail("");
                          setMessage("");
                          setOpen(false);
                      },
                      (error) => {
                          console.error("Failed to send email:", error);
                          setErrMsg("Failed to send email");
                          setOpen(true);
                      }
                  );
          } else {
              setErrMsg("Invalid email");
              setOpen(true);
          }
      } else {
          setErrMsg("Enter all the fields");
          setOpen(true);
      }
  };

  React.useEffect(() => {
      let timer;
      if (success) {
          timer = setTimeout(() => {
              setSuccess(false);
          }, 5000);
      }
      return () => clearTimeout(timer);
  }, [success]);

  const onChange = () => {
      // Update captcha completion status
      setCaptchaCompleted(true);
  };

  return (
      <>
          <div className="contact">
              <h1
                  style={{
                      marginTop: "1rem",
                      fontFamily: "Fira Code",
                      position: "static",
                  }}
              >
                  Do you have a <span style={{ color: "#32CD30" }}>Question</span> on your
                  mind??
              </h1>
              <p style={{ textAlign: "center" }}>
                  Or just want to discuss a project?
              </p>
          </div>

          <div className="contacts" id="contacts">
            <h1
                      style={{
                          marginTop: "3rem",
                          fontFamily: "Fira Code",
                          fontSize: "5rem",
                          fontWeight: "bold",
                      }}
                  >
                      <span style={{ color: "#32CD30" }}>Reach</span> Me!
                  </h1>
              <div className="contacts--container">
                
                  
                  <div className="contacts-animation">
                <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={400}
            width={400}
          />
                </div>

                  <div className="contacts-form">
                      <form onSubmit={handleContactForm}>
                          <div className="input-container">
                              <label htmlFor="Name" className={classes.label}>
                                  Name
                              </label>
                              <input
                                  placeholder="your name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  type="text"
                                  name="name"
                                  className={`form-input ${classes.input}`}
                              />
                          </div>
                          <div className="input-container">
                              <label htmlFor="email" className={classes.label}>
                                  Email
                              </label>
                              <input
                                  placeholder="your email address"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="email"
                                  name="Email"
                                  className={`form-input ${classes.input}`}
                              />
                          </div>
                          <div className="input-container">
                              <label htmlFor="message" className={classes.label}>
                                  Message
                              </label>
                              <textarea
                                  placeholder="Type your message...."
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  type="text"
                                  name="Message"
                                  className={`form-message ${classes.message}`}
                              />
                          </div>
                          <ReCAPTCHA
                              sitekey="6LfdXXkpAAAAAJMeiLwPbQUtpcstujf9XE4J8ePL"
                              onChange={onChange}
                          />

                          <div className="submit-btn">
                              <button
                                  type="submit"
                                  className={classes.submitBtn}
                              >
                                  <p style={{ alignSelf: "end" }}>
                                      {!success ? "Send" : "Sent"}
                                  </p>
                                  <div className="submit-icon">
                                      {!success ? (
                                          <>
                                              <AiOutlineSend className="send-icon" />
                                          </>
                                      ) : (
                                          <>
                                              <AiOutlineCheckCircle className="success-icon" />
                                          </>
                                      )}
                                  </div>
                              </button>
                          </div>
                      </form>
                      <Snackbar
                          anchorOrigin={{
                              vertical: "top",
                              horizontal: "center",
                          }}
                          open={open}
                          autoHideDuration={4000}
                          onClose={handleClose}
                      >
                          <SnackbarContent
                              action={
                                  <React.Fragment>
                                      <IconButton
                                          size="small"
                                          aria-label="close"
                                          color="inherit"
                                          onClick={handleClose}
                                      >
                                          <CloseIcon fontSize="small" />
                                      </IconButton>
                                  </React.Fragment>
                              }
                              style={{
                                  backgroundColor: errMsg
                                      ? "#ff0000"
                                      : success
                                          ? "#32CD32"
                                          : "#FFA500",
                                  color: "white",
                              }}
                              message={
                                  errMsg ||
                                  (success
                                      ? "Message sent successfully!"
                                      : "Warning message here")
                              }
                          />
                      </Snackbar>
                  </div>
                  
              </div>
              <img
                  src={contactsGreen}
                  alt="contacts"
                  className="contacts--img"
              />
          </div>
      </>
  );
};

export default Contact;