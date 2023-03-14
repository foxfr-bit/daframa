import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";

import Cta from "../Cta";
import PageHeading from "../PageHeading";
import PricingTableList from "../PricingTable/PricingTableList";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
// import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import { Link } from "react-router-dom";
import { serviceData } from "../ServiceList";

const industries = [
  {
    title: "Fintech",
    description:
      "We serve fintech companies by providing them with a comprehensive range of digital marketing services. They can help to create and implement effective digital marketing campaigns that target the right audience and drive traffic and engagement to the fintech company's website.",
    link: "#",
  },
  {
    title: "Telecommunication",
    description:
      "For the telecommunication industries, digital marketing can play a crucial role in driving new customer acquisition, promoting service subscriptions, and keeping customers engaged with new product offerings. Here are some specific ways that digital marketing can serve the telecommunication industry: SEO (Search Engine Optmization), Content Marketing, Social Media Marketing",
    link: "#",
  },
  {
    title: "Advertising Agencies",
    description:
      "We provide valuable support and collaboration opportunities for other agencies looking to expand their services and capabilities. By partnering together, both agencies can benefit from shared expertise and resources, ultimately delivering better outcomes for their client",
    link: "#",
  },
  {
    title: "Retails",
    description:
      "We provice various services to retail industries in order to increase sales and online visibility. Here are some ways a digital marketing agency serves retail industries.",
    link: "#",
  },
  {
    title: "Finance",
    description:
      "We assist finance companies in creating effective marketing strategies to improve visibility and attract new customers.",
    link: "#",
  },
  {
    title: "Fashion",
    description:
      "We serve the fashion industry in various ways such as creating a strong online presence for the brand, increasing traffic and sales, building and developing a brand image, and enhancing customer engagement.",
    link: "#",
  },
];

export default function ServicesPage() {
  pageTitle("Service");
  const [active, setActive] = useState(0);
  const handelActive = (index) => {
    setActive(index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="Services"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="services__grid">
              {serviceData.map((industry, index) => (
                <Div className={`cs-hover_tab`} key={index}>
                  <Link to={industry.link} className="cs-iconbox cs-style3">
                    <>
                      <Div className="number-list">
                        <span className="">{index + 1}</span>
                        <Div className="cs-iconbox_in">
                          <h2 className="cs-iconbox_title">{industry.title}</h2>
                          <Div className="cs-iconbox_subtitle">
                            {industry.subtitle}
                          </Div>
                        </Div>
                      </Div>
                    </>
                  </Link>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />

      {/* Industries Served Start*/}
      <Div className="container my-container">
        <Div className="row industry">
          <Div className="col-xl-4 sticky-xl-top align-self-start">
            <SectionHeading
              title="Industries"
              subtitle="We work across industries"
            />
          </Div>
          <Div className="col-xl-12 swiper-scrollbar-vertical">
            {industries.map((industry, index) => (
              <Div
                className={`cs-hover_tab ${active === index ? "active" : ""}`}
                key={index}
                onMouseEnter={() => handelActive(index)}
              >
                <Link to={industry.href} className="cs-iconbox cs-style3">
                  <>
                    <Div className="cs-image_layer cs-style1 cs-size_md">
                      {/* <Div className="cs-image_layer_in">
												<img
													src={item.imgUrl}
													alt="Thumb"
													className="w-100 cs-radius_15"
												/>
											</Div> */}
                    </Div>
                    <span className="cs-iconbox_icon cs-center">
                      <svg
                        width={30}
                        height={29}
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <Div className="cs-iconbox_in">
                      <h2 className="cs-iconbox_title">{industry.title}</h2>
                      <Div className="cs-iconbox_subtitle">
                        {industry.description}
                      </Div>
                    </Div>
                  </>
                </Link>
              </Div>
            ))}
          </Div>
        </Div>
      </Div>

      {/* Industries Served End*/}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>

      <Spacing lg="125" md="55" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_4.jpeg"
        />
      </Div>
    </>
  );
}
