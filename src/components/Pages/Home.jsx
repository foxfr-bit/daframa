import React, { useEffect } from "react";
import FunFact from "../FunFact";
import Hero2 from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import IconBox from "../IconBox";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
// import TeamSlider from "../Slider/TeamSlider";
// import PricingTableList from "../PricingTable/PricingTableList";
import { pageTitle } from "../../helper";
import ServiceList from "../ServiceList";

export default function Home() {
  pageTitle("Home");

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Instagram",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: "Happy Clients",
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
      {/* Start Hero Section */}
      <Hero2
        title="Creativity In <br/>Our Blood Line"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/slider_5.jpeg"
      />
      {/* End Hero Section */}
      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Our team of experienced professionals is dedicated to delivering creative and innovative advertising solutions that will make your brand stand out."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}
      {/* Start Service Section */}
      <Spacing lg="145" md="60" />
      <Div className="container">
        <h1 className="cs-page_title cs-font_50 cs-white_color text-center">
          Our Service
        </h1>
        <SectionHeading
          title=""
          subtitle="We offer a wide range of advertising services to help you reach your target audience and achieve your marketing objectives."
          variant="cs-style1 text-center"
          btnText="See All Services"
          btnLink="/service"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Service Section */}
      {/* Work process Section*/}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Working process"
          subtitle="Dafrakafama"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/research.svg"
              title="Researching"
              subtitle="The research department collects important data that the agency uses to produce effective campaigns. This department studies demographics, societal trends and other relevant information."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/planning.png"
              title="Planning & Organizing"
              subtitle="Defining the scope and goals of your project as well as create and stick with a timeline. When developing a timeline, it is important to keep track of deadlines, milestones, and foreseeable risks associated with your project. "
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/budget.svg"
              title="Presenting & Budgeting"
              subtitle="Establishing a budget needs to be done carefully and thoughtfully. During this step, it is important to track all expenses, figure out sources of funding, and look into potential grants. "
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      {/* Work process Section End */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Branding - Advertising - Photographic"
            variant="cs-style1 text-center"
            btnText="See All works"
            btnLink="/portfolio"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}
      {/* Start Pricing  Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div> */}
      {/* End Pricing Section */}
      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}
      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}
      {/* Start MovingText Section */}
      <Spacing lg="125" md="80" />
      <MovingText text="Our Esteemed Clients" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}
      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Automate your marketing tasks and gain more clients for your Business."
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_4.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
