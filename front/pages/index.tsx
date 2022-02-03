import type { NextPage } from "next";
// components
import Header from "../components/template/Header";
import Sidebar from "../components/template/Sidebar";
import Body from "../components/template/Body";
import Main from "../components/main/Main";
import Footer from "../components/template/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Body>
        <Main />
      </Body>
      <Footer />
    </>
  );
};

export default Home;
