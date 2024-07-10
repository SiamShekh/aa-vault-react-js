import Introduction_Hero from "../ui/Introduction_Hero";
import Navbar from "../ui/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-black h-[200vh]">
            <div className="absolute bg-[#14FF001A] w-[100vw] h-[200vh] -left-[40vw] -top-[20vh] blur-3xl"></div>
            <Navbar />
            <Introduction_Hero />
        </div>
    );
};

export default MainLayout;