import type { NextPage } from "next";
// components
import Header from "../components/template/Header";
import Sidebar from "../components/template/Sidebar";
import Body from "../components/template/Body";
import Footer from "../components/template/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Body>
        <div>바디</div>
      </Body>
      <Footer />
    </>
  );
};

export default Home;
