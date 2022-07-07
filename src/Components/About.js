import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
export default function AboutUS(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btnText, setBtnText] = useState("Enable dark mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable light mode");
    }
  };
  return (
    <>
      <div className="container">
        <div className="accordian my-5">
          <Accordion
            className="my-accordian"
            defaultActiveKey="0"
            flush
            // style={myStyle}
            style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} 
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header >
                Accordion Item #2
              </Accordion.Header>
              <Accordion.Body >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <div className="container">
          <button
            type="button"
            className="btn btn-outline-success my-3"
            onClick={toggleStyle}
          >
            {btnText}
          </button>
        </div> */}
      </div>
    </>
  );
}
