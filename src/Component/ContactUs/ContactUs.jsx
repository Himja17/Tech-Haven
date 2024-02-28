import "./ContactUs.scss";
import { useState } from "react";
import emailJs from "@emailjs/browser";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";

function ContactUS() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    console.log(PUBLIC_KEY);
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tech Haven",
      message: message,
      companyName: companyName,
      phoneNumber: phoneNumber,
    };
    console.log(templateParams);
    emailJs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        alert("Email Sent Successfully!");
        setName("");
        setEmail("");
        setCompanyName("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error Sending Email:", error);
        alert("Something went Wrong!");
      });
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <MdLocationOn className="icons" />
              <div className="topic">Address</div>
              <div className="text-one">Kitchener, ON</div>
            </div>
            <div className="phone details">
              <MdLocalPhone className="icons" />
              <div className="topic">Phone</div>
              <div className="text-one">+1 (289) 659-8987</div>
            </div>
            <div className="email details">
              <MdEmail className="icons" />
              <div className="topic">Email</div>
              <div className="text-one">support@tech-haven.ca</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Contact Us Today!</div>
            <p className="form-para">
              Need a hand? Reach out and let our tech-savvy team turn your IT
              headaches into solutions!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-main">
                <div className="input-box sub-left">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="input-box sub-right">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="input-box message-box">
                <textarea
                  value={message}
                  placeholder="Enter Your Message Here"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Email</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
