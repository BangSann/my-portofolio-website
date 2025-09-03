import MainLayout from "../../_components/layout";
import PortofolioPage from "./_components/portofolioProject";
import TechStack from "./_components/techStack";

const HomePage = () => {
  return (
    <MainLayout>
      <PortofolioPage />
      <TechStack/>
    </MainLayout>
  );
};

export default HomePage;
