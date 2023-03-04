import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Card from "../Card";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import PricingTableList from "../PricingTable/PricingTableList";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
// import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import { Link } from "react-router-dom";

const industries = [
	{
		title: "Fintech",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
		link: "#",
	},
	{
		title: "Crypto & NFT",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
		link: "#",
	},
	{
		title: "Advertising",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
		link: "#",
	},
	{
		title: "Retail",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
		link: "#",
	},
	{
		title: "Finance",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
		link: "#",
	},
	{
		title: "Fashion",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
		link: "#",
	},
	{
		title: "Sports",
		description:
			"Amet, aliquam eu at egestas. Dolor ante pellentesque tellus mollis. Viverra nam pellentesque nulla vitae, cras risus volutpat tempor. Vestibulum urna, arcu proin.",
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
						<Div className="col-xl-8">
							<Div className="row">
								<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
								<Div className="col-lg-3 col-sm-6">
									<Card
										title="UI/UX design"
										link="/service/ui-ux-design"
										src="/images/service_1.jpeg"
										alt="Service"
									/>
									<Spacing lg="0" md="30" />
								</Div>
								<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
								<Div className="col-lg-3 col-sm-6">
									<Card
										title="React.js Development"
										link="/service/reactjs-development"
										src="/images/service_2.jpeg"
										alt="Service"
									/>
									<Spacing lg="0" md="30" />
								</Div>

								<Div className="col-lg-3 col-sm-6">
									<Card
										title="Digital Marketing"
										link="/service/digital-marketing"
										src="/images/service_3.jpeg"
										alt="Service"
									/>
									<Spacing lg="0" md="30" />
								</Div>
								<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
								<Div className="col-lg-3 col-sm-6">
									<Card
										title="Technology"
										link="/service/technology"
										src="/images/service_4.jpeg"
										alt="Service"
									/>
									<Spacing lg="0" md="30" />
								</Div>
								<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
								<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
								<Div className="col-lg-3 col-sm-6">
									<Card
										title="Consultancy"
										link="/service/consultancy"
										src="/images/service_5.jpeg"
										alt="Service"
									/>
									<Spacing lg="0" md="30" />
								</Div>
								<Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
								<Div className="col-lg-3 col-sm-6">
									<Card
										title="Creative Design"
										link="/service/creative-design"
										src="/images/service_6.jpeg"
										alt="Service"
									/>
									<Spacing lg="0" md="30" />
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			<Spacing lg="150" md="80" />
			<Div className="container">
				<Div className="row industry">
					<Div>
						<Div className="sticky">
							<SectionHeading
								title="Industries"
								subtitle="We work across industries"
							/>
						</Div>
					</Div>
					<Div className="row">
						{industries.map((industry, index) => (
							<Div
								className={`cs-hover_tab ${
									active === index ? "active" : ""
								}`}
								key={index}
								onMouseEnter={() => handelActive(index)}
							>
								<Link
									to={industry.link}
									className="cs-iconbox cs-style3"
								>
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
											<h2 className="cs-iconbox_title">
												{industry.title}
											</h2>
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
