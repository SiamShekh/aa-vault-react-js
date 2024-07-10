const Introduction_Hero = () => {

    return (
        <div className="max-w-[1150px] mx-auto flex justify-between lg:h-[85vh] md:flex-row flex-col-reverse bg-black px-5">

            <div className="lg:my-auto m-auto flex-1">
                <div className="border-2 bg-[#00FF0A0D] border-[#00FF94] rounded-full md:m-0 mx-auto px-7 py-2 relative w-fit">
                    <p className="w-fit h-fit m-auto text-[#00FF94] font-roboto">WELCOME TO AAVAULT</p>
                </div>
                <h1 className="text-transparent bg-gradient-to-r from-[#9BFFD5] to-[#FFFFFF] tracking-wider bg-clip-text lg:leading-[70px] lg:text-6xl text-4xl font-bold my-5 font-roboto">EMPOWERING YOUR FUTURE WITH 
                    <span className=" custom-text lg:tracking-[10.479px] bg-gradient-to-r from-[#00FF85] to-[#42FF00] bg-clip-text ">
                        {" INNOVATION"}
                    </span>
                </h1>
                <div className="border-2 bg-[#00FF0A0D] border-[#00FF94] rounded-full lg:pl-5 overflow-hidden pr-2 py-1 relative w-fit flex justify-between items-center md:m-0 mx-auto">
                    <input placeholder="Enter Your Email" className="text-[#FFFFFF80] font-roboto font-medium ml-3 text-xs bg-transparent h-fit w-fit my-auto outline-none" />

                    <p className="bg-gradient-to-r from-[#00FF0A] cursor-pointer to-[#00FFD1] text-black  rounded-full px-6 py-3 font-roboto font-bold">WAITLIST</p>
                </div>
            </div>

            <div className="my-auto flex-1 flex  flex-col items-center lg:justify-end lg:items-end ">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex  flex-col justify-end items-end size-[200px] lg:size-[380px]" viewBox="0 0 376 372" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M174.692 11.0767C177.124 -3.69225 198.36 -3.6922 200.793 11.0767L206.806 47.5867L243.316 53.6005C258.085 56.0331 258.085 77.2687 243.316 79.7014L206.806 85.7151L200.793 122.225C198.36 136.994 177.124 136.994 174.692 122.225L168.678 85.7151L132.168 79.7014C117.399 77.2687 117.399 56.0331 132.168 53.6005L168.678 47.5867L174.692 11.0767ZM196.442 11.7932C194.821 1.94727 180.664 1.94729 179.042 11.7932L172.514 51.423L132.884 57.9506C123.038 59.5724 123.038 73.7294 132.884 75.3512L172.514 81.8788L179.042 121.509C180.664 131.355 194.821 131.355 196.442 121.509L202.97 81.8788L242.6 75.3512C252.446 73.7294 252.446 59.5724 242.6 57.9506L202.97 51.423L196.442 11.7932Z" fill="url(#paint0_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M174.692 249.15C177.124 234.381 198.36 234.381 200.793 249.15L206.806 285.66L243.316 291.673C258.085 294.106 258.085 315.342 243.316 317.774L206.806 323.788L200.793 360.298C198.36 375.067 177.124 375.067 174.692 360.298L168.678 323.788L132.168 317.774C117.399 315.342 117.399 294.106 132.168 291.673L168.678 285.66L174.692 249.15ZM196.442 249.866C194.821 240.02 180.664 240.02 179.042 249.866L172.514 289.496L132.884 296.024C123.038 297.645 123.038 311.802 132.884 313.424L172.514 319.952L179.042 359.582C180.664 369.428 194.821 369.428 196.442 359.582L202.97 319.952L242.6 313.424C252.446 311.802 252.446 297.645 242.6 296.024L202.97 289.496L196.442 249.866Z" fill="url(#paint1_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M296.299 130.113C298.731 115.344 319.967 115.344 322.4 130.113L328.413 166.623L364.923 172.637C379.692 175.07 379.692 196.305 364.923 198.738L328.413 204.752L322.4 241.262C319.967 256.031 298.731 256.031 296.299 241.262L290.285 204.752L253.775 198.738C239.006 196.305 239.006 175.07 253.775 172.637L290.285 166.623L296.299 130.113ZM318.049 130.83C316.428 120.984 302.271 120.984 300.649 130.83L294.121 170.46L254.491 176.987C244.645 178.609 244.645 192.766 254.491 194.388L294.121 200.915L300.649 240.545C302.271 250.391 316.428 250.391 318.049 240.545L324.577 200.915L364.207 194.388C374.053 192.766 374.053 178.609 364.207 176.987L324.577 170.46L318.049 130.83Z" fill="url(#paint2_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M296.299 249.15C298.731 234.381 319.967 234.381 322.4 249.15L328.413 285.66L364.923 291.673C379.692 294.106 379.692 315.342 364.923 317.774L328.413 323.788L322.4 360.298C319.967 375.067 298.731 375.067 296.299 360.298L290.285 323.788L253.775 317.774C239.006 315.342 239.006 294.106 253.775 291.673L290.285 285.66L296.299 249.15ZM318.049 249.866C316.428 240.02 302.271 240.02 300.649 249.866L294.121 289.496L254.491 296.024C244.645 297.645 244.645 311.802 254.491 313.424L294.121 319.952L300.649 359.582C302.271 369.428 316.428 369.428 318.049 359.582L324.577 319.952L364.207 313.424C374.053 311.802 374.053 297.645 364.207 296.024L324.577 289.496L318.049 249.866Z" fill="url(#paint3_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M296.299 11.0767C298.731 -3.69225 319.967 -3.6922 322.4 11.0767L328.413 47.5867L364.923 53.6005C379.692 56.0331 379.692 77.2687 364.923 79.7014L328.413 85.7151L322.4 122.225C319.967 136.994 298.731 136.994 296.299 122.225L290.285 85.7151L253.775 79.7014C239.006 77.2687 239.006 56.0331 253.775 53.6005L290.285 47.5867L296.299 11.0767ZM318.049 11.7932C316.428 1.94727 302.271 1.94729 300.649 11.7932L294.121 51.423L254.491 57.9506C244.645 59.5724 244.645 73.7294 254.491 75.3512L294.121 81.8788L300.649 121.509C302.271 131.355 316.428 131.355 318.049 121.509L324.577 81.8788L364.207 75.3512C374.053 73.7294 374.053 59.5724 364.207 57.9506L324.577 51.423L318.049 11.7932Z" fill="url(#paint4_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.6005 11.0767C56.0331 -3.69225 77.2687 -3.6922 79.7014 11.0767L85.7151 47.5867L122.225 53.6005C136.994 56.0331 136.994 77.2687 122.225 79.7014L85.7151 85.7151L79.7014 122.225C77.2687 136.994 56.0331 136.994 53.6005 122.225L47.5867 85.7151L11.0767 79.7014C-3.69225 77.2687 -3.6922 56.0331 11.0767 53.6005L47.5867 47.5867L53.6005 11.0767ZM75.3512 11.7932C73.7294 1.94727 59.5724 1.94729 57.9506 11.7932L51.423 51.423L11.7932 57.9506C1.94727 59.5724 1.94729 73.7294 11.7932 75.3512L51.423 81.8788L57.9506 121.509C59.5724 131.355 73.7294 131.355 75.3512 121.509L81.8789 81.8788L121.509 75.3512C131.355 73.7294 131.355 59.5724 121.509 57.9506L81.8789 51.423L75.3512 11.7932Z" fill="url(#paint5_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.6005 249.15C56.0331 234.381 77.2687 234.381 79.7014 249.15L85.7151 285.66L122.225 291.673C136.994 294.106 136.994 315.342 122.225 317.774L85.7151 323.788L79.7014 360.298C77.2687 375.067 56.0331 375.067 53.6005 360.298L47.5867 323.788L11.0767 317.774C-3.69225 315.342 -3.6922 294.106 11.0767 291.673L47.5867 285.66L53.6005 249.15ZM75.3512 249.866C73.7294 240.02 59.5724 240.02 57.9506 249.866L51.423 289.496L11.7932 296.024C1.94727 297.645 1.94729 311.802 11.7932 313.424L51.423 319.952L57.9506 359.582C59.5724 369.428 73.7294 369.428 75.3512 359.582L81.8789 319.952L121.509 313.424C131.355 311.802 131.355 297.645 121.509 296.024L81.8789 289.496L75.3512 249.866Z" fill="url(#paint6_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.6005 130.113C56.0331 115.344 77.2687 115.344 79.7014 130.113L85.7151 166.623L122.225 172.637C136.994 175.07 136.994 196.305 122.225 198.738L85.7151 204.752L79.7014 241.262C77.2687 256.031 56.0331 256.031 53.6005 241.262L47.5867 204.752L11.0767 198.738C-3.69225 196.305 -3.6922 175.07 11.0767 172.637L47.5867 166.623L53.6005 130.113ZM75.3512 130.83C73.7294 120.984 59.5724 120.984 57.9506 130.83L51.423 170.46L11.7932 176.987C1.94727 178.609 1.94729 192.766 11.7932 194.388L51.423 200.915L57.9506 240.545C59.5724 250.391 73.7294 250.391 75.3512 240.545L81.8789 200.915L121.509 194.388C131.355 192.766 131.355 178.609 121.509 176.987L81.8789 170.46L75.3512 130.83Z" fill="url(#paint7_linear_1235_624)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M187.742 80.5724L183.048 109.068C176.752 147.297 146.789 177.26 108.56 183.557L80.0644 188.25L108.559 192.944C146.789 199.241 176.752 229.204 183.048 267.433L187.742 295.928L192.436 267.433C198.733 229.204 228.696 199.241 266.925 192.944L295.42 188.25L266.925 183.557C228.696 177.26 198.733 147.297 192.436 109.068L187.742 80.5724ZM178.698 108.351L185.567 66.6508H189.917L196.786 108.351C202.776 144.715 231.277 173.217 267.641 179.206L309.341 186.075V190.425L267.641 197.294C231.277 203.284 202.776 231.785 196.786 268.149L189.917 309.849H185.567L178.698 268.149C172.709 231.785 144.207 203.284 107.843 197.294L66.1428 190.425V186.075L107.843 179.206C144.207 173.217 172.709 144.715 178.698 108.351Z" fill="url(#paint8_linear_1235_624)" />
                    <defs>
                        <linearGradient id="paint0_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_1235_624" x1="51.3425" y1="-2.38029e-06" x2="324.658" y2="371.375" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00FF85" />
                            <stop offset="1" stopColor="#00FFF0" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="border-0 border-l-4 border-[#00FF9499] h-fit w-fit my-5 lg:mt-10">
                    <p className="font-roboto text-white text-xs lg:text-xl pl-5 w-fit font-normal opacity-85">AAVAULT aims to revolutionize the decentralized exchange DEX landscape by providing a multi-block chain terminal shield integrals loftier exchanges and blockchain networks </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction_Hero;