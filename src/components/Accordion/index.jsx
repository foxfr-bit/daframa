import React from "react";
import { useState } from "react";
import Div from "../Div";

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const accordionData = [
    {
      question: "Experience:",
      answer:
        "Our team of advertising experts has years of experience in the industry. We have worked with businesses of all sizes and industries, and we know what it takes to create effective advertising campaigns that deliver results.",
    },
    {
      question: "Customization:",
      answer:
        "We understand that every business is unique, which is why we do not believe in a one size fits all approach to advertising. We take the time to understand your business, your goals, and your target audience, and we create custom advertising plans tailored to your needs.",
    },
    {
      question: "Innovation:",
      answer:
        "We are constantly exploring new advertising strategies and technologies to stay ahead of the curve. We use cutting-edge tools and techniques to create advertising campaigns that are not only effective but also creative and memorable.",
    },
    {
      question: "Transparency:",
      answer:
        "We believe in transparency and accountability, which is why we provide detailed reports on the success of your advertising campaigns. You can trust us to be honest and upfront about the results of your campaigns, and we will work with you to make any necessary adjustments to improve your ROI.",
    },
    {
      question: "Customer Service:",
      answer:
        "We are dedicated to providing exceptional customer service. We are always available to answer your questions and address your concerns, and we work closely with you throughout the entire advertising process to ensure that you are completely satisfied with the results.",
    },
  ];
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
