import element from "../../assets/images/about_hero_element_images.png";

const About_us = () => {
    return (
        <div className="max-w-[1150px] mx-auto flex items-center justify-between min-h-screen relative flex-col lg:flex-row p-5">
            <div className="flex-1">
                <p className="uppercase font-roboto text-xl hidden lg:block bg-gradient-to-r from-[#05FF00] to-[#00FF85CC] bg-clip-text text-transparent ">about us</p>
                <img src={element} draggable={false} className="w-[100%] -left-[5%] m-auto relative" />
            </div>
            <div className="flex-1 relative h-full w-full">
                <p className="font-roboto text-3xl lg:text-5xl font-bold relative top-[5vh] lg:-left-[15vh] tracking-[1px] lg:leading-[50px] text-transparent  
                bg-gradient-to-r from-[#ADFFDD] to-[#FFFFFF] bg-clip-text">
                    <span className="block">WE CREATE</span>
                    <span className="block">SOLUTIONS FOR</span>
                    <span className="block">DEX
                        <span className="font-light tracking-[10px]">
                            {" EXCHANGES"}
                        </span>
                    </span>

                </p>

                <p className="my-[10vh] font-roboto lg:text-xl text-white opacity-85 lg:leading-[39px] tracking-[1px]">AAVAULT aims to revolutionize the decentralized exchange DEX landscape by providing a multi-block chain terminal shield integrals loftier exchanges and blockchain networks</p>

                <div className="rounded-full border-4 w-fit h-fit lg:flex border-[#00FF94] px-7 font-bold text-xl font-roboto text-white py-3 bg-[#00FF941A] flex justify-center items-center gap-4">
                    <p>JOIN WAITLIST</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
                        <path d="M0 11H27M27 11L15.9796 1M27 11L15.9796 20" stroke="#00FF94" strokeWidth="2" />
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default About_us;