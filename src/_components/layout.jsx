import Navbar from "./navbar";

const MainLayout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <section> 
        {children}
      </section>
    </section>
  );
};

export default MainLayout;
