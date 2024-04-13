import Footer from "./src/components/Footer"
import Header from "./src/components/Header"
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./src/pages/Home";
import NewFeatured from "./src/pages/NewFeatured";
import Perfumes from "./src/pages/Perfumes";
import Colognes from "./src/pages/Colognes";
import Sale from "./src/pages/Sale";
import PrivacyPolicy from "./src/pages/Privacy";


const Layout = () => {
    const location = useLocation();
    console.log('====location', location.pathname);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/new-featured" element={<NewFeatured />} />
                <Route path="/" element={<Home />} />
                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/colognes" element={<Colognes />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            {location.pathname === '/new-featured' ? undefined : <Footer />}
        </>
    )
}
export default Layout