import About_us from "../ui/About_us";
import Introduction_Hero from "../ui/Introduction_Hero";
import Navbar from "../ui/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-black h-[500vh]">
            <div className="absolute bg-[#14FF001A] w-[100vw] h-[200vh] -left-[40vw] -top-[20vh] blur-3xl"></div>
            <div className="absolute bg-[#14FF001A] w-[70vw] -right-0 h-[200vh] top-[100vh] blur-3xl"></div>
            <Navbar />
            <Introduction_Hero />
            <About_us/>
        </div>
    );
};

export default MainLayout;