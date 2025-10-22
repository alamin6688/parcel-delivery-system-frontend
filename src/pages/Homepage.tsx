import HeroSection from "@/components/modules/HomePage/HeroSection";
import PricingPageDemo from "@/components/Sections/PricingPageDemo";
// import RealTimeTracking from "@/components/Sections/RealTimeTracking";

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            {/* <RealTimeTracking/> */}
            <PricingPageDemo/>
        </div>
    );
};

export default Homepage;