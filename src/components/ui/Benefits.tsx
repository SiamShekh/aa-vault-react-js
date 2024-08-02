import star_fireoval from "../../assets/images/star_fireoval.svg";

const Benefits = () => {
    return (
        <div className="max-w-[1150px] mx-auto min-h-screen p-5 lg:p-0">
            <p className="uppercase font-roboto text-transparent bg-gradient-to-r from-[#05FF00B2] to-[#00FFB2CC] bg-clip-text text-center text-xl">Benefits</p>
            <p className="text-5xl mt-5 font-roboto text-transparent bg-gradient-to-r from-[#FFF] to-[#C4FFC376] uppercase font-bold bg-clip-text text-center "><span className="block">Discover the</span> <span className="font-thin">adventures</span> of AAVAULT</p>

            <div className="benefits_border mt-5">
                <div className="grid lg:grid-cols-3 gap-5">
                    <div className="">
                        <div className="bg-gradient-to-l from-[#96FFAD80] to-[#fff0] p-[2px]">
                            <div className="bg-[#0D170E] p-5">
                                <p className="bg-gradient-to-r from-[#B0FFD9] to-[#FFFFFF] bg-clip-text font-roboto text-xl text-transparent">Secure and transparent transactions</p>

                                <img src={star_fireoval} alt="star" className="mx-auto my-10" />
                            </div>
                        </div>
                        <p className="text-xl bg-gradient-to-r from-[#B0FFD999] to-[#FFFFFF99] bg-clip-text text-transparent p-5">AALAULT Aims to revolutionize the decentralized exchange FDEX or landscapes by liverising.</p>
                    </div>
                    <div className="">
                        <div className="bg-gradient-to-br from-[#96FFAD80] to-[#fff0] p-[2px]">
                            <div className="bg-[#0D170E] p-5">
                                <p className="bg-gradient-to-r from-[#B0FFD9] to-[#FFFFFF] bg-clip-text font-roboto text-xl text-transparent">Secure and transparent transactions</p>

                                <img src={star_fireoval} alt="star" className="mx-auto my-10" />
                            </div>
                        </div>
                        <p className="text-xl bg-gradient-to-r from-[#B0FFD999] to-[#FFFFFF99] bg-clip-text text-transparent p-5">AALAULT Aims to revolutionize the decentralized exchange FDEX or landscapes by liverising.</p>
                    </div>
                    <div className="">
                        <div className="bg-gradient-to-r from-[#96FFAD80] to-[#fff0] p-[2px]">
                            <div className="bg-[#0D170E] p-5">
                                <p className="bg-gradient-to-r from-[#B0FFD9] to-[#FFFFFF] bg-clip-text font-roboto text-xl text-transparent">Secure and transparent transactions</p>

                                <img src={star_fireoval} alt="star" className="mx-auto my-10" />
                            </div>
                        </div>
                        <p className="text-xl bg-gradient-to-r from-[#B0FFD999] to-[#FFFFFF99] bg-clip-text text-transparent p-5">AALAULT Aims to revolutionize the decentralized exchange FDEX or landscapes by liverising.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Benefits;