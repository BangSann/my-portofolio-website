import MainLayout from "../../_components/layout";
import ContactPage from "./_components/contact";
import PortofolioPage from "./_components/portofolioProject";
import TechStack from "./_components/techStack";

const HomePage = () => {
  return (
    <MainLayout>
      <PortofolioPage />
      <TechStack />
      <ContactPage/>
    </MainLayout>
  );
};

export default HomePage;
