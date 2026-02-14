import Image from "next/image";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Work from "./components/Work";
import Ourclients from "./components/Ourclients";
import Testimonails from "./components/Testimonails";
import People from "./components/People";
import Footerbottom from "./components/Footerbottom";
import Contact from "./components/Contact";
import Footerlogo from "./components/Footerlogo";

export default function Home() {
  return (
   <>
    <Banner />
     <Banner2 />
     <Work />
     <Ourclients />
     <Testimonails />
     <People/>
     <Footerbottom />
     <Contact/>
     <Footerlogo/>
   </>
  );
}
