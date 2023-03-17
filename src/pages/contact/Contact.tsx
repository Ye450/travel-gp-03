// import Input from "../../contact/index";

import React, { useState } from "react";
import Message from "../../components/msg";
import Email from "../../components/email";
import Input from "../../components/userinput";
import ListMsg, { item } from "../../components/listmsg";

export default function Contact() {
  const [lists, setLists] = useState<Array<item>>([
    { name: "john", email: "ea@gmail", msg: "dfe" }

  ]);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const sendLists = () => {
    if (username === "" && email === "" && msg === "") {
      alert("type your msg!");
    }

    else {
      console.log(...lists);

      setLists([...lists, { name: username, email: email, msg: msg }])

    }
  };
  return (

    <div id="contact">
      <div className="l-wrap-outer">
        <div className="l-wrap-inner">
          <div className="content">
            <div className="content-title">
              <h3>SEND ME A MESSAGE</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod incididunt ut labore
              </p>
              <hr />
            </div>
            <div className="contact-form">
              <Input
                label={"Name"}
                value={username}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => {
                  setUsername(e.target.value);
                }}
                placeholder={"Enter Your Name"}
              />
              <Email
                label={"Email"}
                placeholder={"Enter Your Email"}
                value={email}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => {
                  setEmail(e.target.value);
                }}
              />
              <Message
                label={"Message"}
                placeholder={"Enter Your Message"}
                value={msg}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => {
                  setMsg(e.target.value);
                }}
              />

              <button onClick={sendLists} className="send-btn">
                Send
              </button>
            </div>
            <div className="msgLists">
              {lists.map((item, index) => {
                return <ListMsg key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





