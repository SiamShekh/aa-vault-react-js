import { useLocation } from "react-router-dom";
import About_us from "../ui/About_us";
import Benefits from "../ui/Benefits";
import Introduction_Hero from "../ui/Introduction_Hero";
import Navbar from "../ui/Navbar";
import Roadmap from "../ui/Roadmap";
import Tokanamics from "../ui/Tokanamics";
import { useEffect } from "react";

const MainLayout = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className="bg-black min-h-[500vh]">
            <div className="absolute bg-[#14FF001A] w-[100vw] h-[200vh] -left-[40vw] -top-[20vh] blur-3xl"></div>
            <div className="absolute bg-[#14FF001A] w-[70vw] -right-0 h-[100vh] top-[100vh] blur-3xl"></div>
            <div className="absolute bg-[#14FF001A] w-[70vw] -left-0 h-[100vh] top-[300vh] rounded-full blur-3xl"></div>
            <div className="absolute bg-[#14FF001A] w-[70vw] -right-0 h-[100vh] top-[400vh] rounded-full blur-3xl"></div>
            <Navbar />
            <section id="intro">
                <Introduction_Hero />
            </section>
            <section id="about">
                <About_us />
            </section>
            <section id="benefits">
                <Benefits />
            </section>
            <section id="tokenamic">
                <Tokanamics />
            </section>
            <section id="road-map">
                <Roadmap />
            </section>
        </div>
    );
};

export default MainLayout;