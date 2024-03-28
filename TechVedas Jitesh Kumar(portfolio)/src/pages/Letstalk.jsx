import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mbr86hb",
        "template_zln000t",
        form.current,
        "nxcnqB_CSi2A-UEL1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent, I will get back to you shortly", result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <div className="home-container">
      <h1 className="  flex justify-center text-white font-extrabold text-[5rem] ">Let's Get in touch</h1>
      <div className="flex w-full justify-center items-center ">
      
      <StyledContactForm className=" text-white">
      <form className="text-white border-white" ref={form} onSubmit={sendEmail}>
        <label className="text-white">Name</label>
        <input type="text" className="text-black" name="user_name" />
        <label>Email</label>
        <input type="email" className="text-black" name="user_email" />
        <label>Have an Idea or message?</label>
        <textarea className="text-black" name="message" />
        <input type="submit"  value="Send" />
      </form>
    </StyledContactForm>
    </div>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: green;
      color: white;
      border: none;
    }
  }
`;