import React from "react";
import Div from "../Div";
import "./logolist.scss";

export default function LogoList() {
  const partnerLogos = [
    {
      src: "/images/wasoko.png",
      alt: "Partner",
    },
    {
      src: "/images/KLK.png",
      alt: "Partner",
    },
    {
      src: "/images/Matdeus.png",
      alt: "Partner",
    },
    {
      src: "/images/HS.png",
      alt: "Partner",
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
