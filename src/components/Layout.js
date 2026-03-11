import FAQSection from "./FAQSection";
import Footer from "./Footer";
import Herosection from "./Herosection";
import Nav from "./Nav";
import Ourservices from "./Ourservices";
import Project from "./Projects";
import Result from "./Result";
import Second from "./Second";

export default function Layout(){
    return(
        <div className="w-full overflow-x-clip bg-white ">
         <Nav/>
            <Herosection/>
            <Second/>
            <Ourservices/>
            <Result/>
            <Project/>
            <FAQSection/>
            <Footer/>
        </div>
    )
}