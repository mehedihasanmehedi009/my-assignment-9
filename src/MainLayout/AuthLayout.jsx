import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <main>
        <Outlet>
            
        </Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
