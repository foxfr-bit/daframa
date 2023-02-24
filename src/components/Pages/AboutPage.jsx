import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import FunFact from "../FunFact";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TeamSlider from "../Slider/TeamSlider";
import Spacing from "../Spacing";
import Accordion from "../Accordion";

export default function AboutPage() {
  pageTitle("About");

  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "100",
    },
    {
      title: "Project Completed",
      factNumber: "50",
    },
    {
      title: "Team Members",
      factNumber: "20",
    },
    {
      title: "Digital products",
      factNumber: "10",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="Dafrakafama"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Dafrakafama is a versatile creative digital transformation
                company that deals with all advertising platforms above and
                below the line Dafra’s has it all when comes to solving variety
                of commercial needs concerning Strategy, retails, events, media
                production, and design.
              </p>

              <p className="cs-m0 mt-4 !important">
                At DAFRAKAFAMA, we are passionate about helping businesses
                succeed. Our team of experts has years of experience in the
                advertising industry, and we are dedicated to delivering
                exceptional results for our clients. We pride ourselves on our
                creativity, professionalism, and attention to detail. We believe
                that our success is measured by the success of our clients.
              </p>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about-df.jpg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/studio.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="Our team of experienced professionals is dedicated to delivering creative and innovative advertising solutions that will make your brand stand out."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/prof.jpg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced people with us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Choosing the right advertising agency can make all the
                difference in the success of your business. Here are some
                reasons why you should choose Dafrakafama.
              </p>
              <Spacing lg="30" md="15" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
              <Div>
                <Accordion />
              </Div>
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="We are the muldisplinary team with the background in art media and design"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss make <br />something <i>cool</i> together"
          subtitle="Contact us today to learn more about how we can help you grow your business through effective advertising strategies"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_4.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
