import Footer from "./footer";
import Navbar from "./navbar";

const MainLayout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <section> 
        {children}
      </section>
      <Footer />
    </section>
  );
};

export default MainLayout;
