import EventsSection from "../components/EventSection";
import UniqueFeaturesPartners from "./UniquePartners";
import StudentSupportPage from "./supportStudent";
import AwardsTestimonialsPage from "../pages/AwardTestimonial";
import ContactPage from "../pages/contactPage";
import HeroSection from "./Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 ">
      {/* Hero Section with Animated Robotics Showcase */}
     <HeroSection />
      <EventsSection />
      <UniqueFeaturesPartners />
      <StudentSupportPage />
      <AwardsTestimonialsPage />
      <ContactPage />
    </div>
  );
};

export default HomePage;
