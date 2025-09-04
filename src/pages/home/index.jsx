import MainLayout from "../../_components/layout";
import PortofolioPage from "./_components/portofolioProject";
import Statistic from "./_components/statistic";
import TechStack from "./_components/techStack";

const HomePage = () => {
  return (
    <MainLayout>
      <PortofolioPage />
      <TechStack/>
      <Statistic/>
    </MainLayout>
  );
};

export default HomePage;
