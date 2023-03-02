import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Portfolio from "../Portfolio";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function PortfolioPage() {
  pageTitle("Portfolio");
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: "Wasoko Road Advertsing",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/wasokob.jpg",
      category: "branding",
    },
    {
      title: "Wasoko Printing",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/wasokopr.png",
      category: "branding",
    },
    {
      title: "Wasoko Office branding",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/officerb.jpg",
      category: "web_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/tshirt.jpg",
      category: "mobile_apps",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/waterbt.jpg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/portfolio_9.jpeg",
      category: "web_design",
    },
    {
      title: "Logo Design",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/LogoDesign.jpeg",
      category: "logo_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/portfolio_4.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/portfolio_5.jpeg",
      category: "logo_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio",
      src: "/images/portfolio_6.jpeg",
      category: "web_design",
    },
  ];
  const categoryMenu = [
    {
      title: "Branding and Identity",
      category: "branding",
    },
    {
      title: "Digital Marketing",
      category: "digital",
    },
    {
      title: "Website Designing",
      category: "website",
    },
    {
      title: "Public Relations",
      category: "public",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Work"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading
            subtitle="Take a look at some of the exciting work we've done over the years"
            title="Our Portfolio"
          />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
              } ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Cta
          title="Let’s create something amazing"
          btnText="Get Started"
          btnLink="/contact"
          bgSrc="/images/cta_bg_4.jpeg"
        />
      </Div>
    </>
  );
}
