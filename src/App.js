import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";

import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";

import ServiceDetailsPage from "./components/Pages/ServiceDetailsPage";
import ServicesPage from "./components/Pages/ServicesPage";
import TeamPage from "./components/Pages/TeamPage";
import PortfolioPage from "./components/Pages/PortfolioPage";

import PhotographyAgencyHome from "./components/Pages/PhotographyAgencyHome";

import Layout from "./components/Layout";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="photography-agency"
						element={<PhotographyAgencyHome />}
					/>

					<Route path="about" element={<AboutPage />} />
					<Route path="service" element={<ServicesPage />} />
					<Route
						path="service/:serviceDetailsId"
						element={<ServiceDetailsPage />}
					/>
					<Route path="portfolio" element={<PortfolioPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="team" element={<TeamPage />} />
				</Route>

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
