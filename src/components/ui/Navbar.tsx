const Navbar = () => {
    return (
        
        <div className="navbar mx-auto max-w-[1150px] h-[15vh]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="text-white opacity-60 text-xl text-center cursor-pointer">About us</li>
                        <li className="text-white opacity-60 text-xl text-center cursor-pointer">Benefits</li>
                        <li className="text-white opacity-60 text-xl text-center cursor-pointer">Tokenomics</li>
                        <li className="text-white opacity-60 text-xl text-center cursor-pointer">Roadmap</li>
                        <li className="text-white opacity-60 text-xl text-center cursor-pointer">Team</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center w-fit h-fit gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-7" viewBox="0 0 39 39" fill="none">
                        <path d="M21.7203 1.0438C22.7176 -0.703736 25.3807 -0.0503338 25.4559 1.96036L25.772 10.4083C25.8123 11.4869 26.7012 12.3389 27.7805 12.3335L36.2343 12.2913C38.2464 12.2812 39.0121 14.9142 37.3084 15.9847L30.1502 20.4824C29.2363 21.0567 28.9429 22.2525 29.4873 23.1845L33.7507 30.4846C34.7655 32.2221 32.8681 34.2017 31.0892 33.2614L23.615 29.3112C22.6607 28.8068 21.4784 29.1506 20.9434 30.0881L16.7531 37.4304C15.7558 39.1779 13.0927 38.5245 13.0175 36.5138L12.7014 28.0658C12.6611 26.9872 11.7722 26.1352 10.6928 26.1406L2.23905 26.1829C0.226971 26.1929 -0.538705 23.5599 1.165 22.4894L8.32314 17.9918C9.23706 17.4175 9.53046 16.2217 8.98612 15.2897L4.72264 7.98959C3.70789 6.25211 5.60529 4.27252 7.38422 5.21272L14.8584 9.16301C15.8127 9.66737 16.995 9.32355 17.53 8.38612L21.7203 1.0438Z" fill="url(#paint0_linear_1214_566)" />
                        <defs>
                            <linearGradient id="paint0_linear_1214_566" x1="-5.04317" y1="13.2799" x2="43.5165" y2="25.1943" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00FF85" />
                                <stop offset="1" stopColor="#006C39" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="text-transparent bg-gradient-to-r from-[#00FF85] to-[#006C39] bg-clip-text font-roboto font-bold text-2xl">AAVAULT</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <li className="text-white opacity-60 text-xl text-center font-roboto cursor-pointer">About us</li>
                    <li className="text-white opacity-60 text-xl text-center font-roboto cursor-pointer">Benefits</li>
                    <li className="text-white opacity-60 text-xl text-center font-roboto cursor-pointer">Tokenomics</li>
                    <li className="text-white opacity-60 text-xl text-center font-roboto cursor-pointer">Roadmap</li>
                    <li className="text-white opacity-60 text-xl text-center font-roboto cursor-pointer">Team</li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="rounded-full border-2 hidden lg:flex border-[#00FF85] px-7 font-bold text-xl font-roboto text-white py-3 bg-[#00FF8533]">
                    <p className="w-fit h-fit">JOIN WAITLIST</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;