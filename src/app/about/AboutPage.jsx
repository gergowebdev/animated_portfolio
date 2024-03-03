"use-client";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div className="">
                {/*Text Container*/}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    {/*Biography Container*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis distinctio cum perferendis at qui
                            ipsa voluptas omnis maxime molestiae! Officiis.
                        </p>
                        {/*Quote*/}
                        <span className="italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </span>
                        {/* Signature*/}
                        <div className="self-end">
                            <svg
                                width="1012"
                                height="306"
                                viewBox="0 0 1012 306"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M181 140C185.532 140 190.437 140.539 194.889 139.556C206.694 136.947 212.609 123.456 211.944 112.167C211.472 104.127 203.91 99.2929 197.667 95.6111C182.549 86.6955 167.442 90.4978 151.444 94.7778C130.052 100.501 106.233 104.05 86.3333 114C78.9493 117.692 73.6555 125.395 70.6111 132.889C64.6779 147.494 75.6021 165.676 84.6667 176.667C91.9696 185.521 101.645 192.959 111 199.556C124.637 209.171 146.952 210.282 162.889 210.889C172.73 211.264 186.683 210.463 191.389 199.944C193.708 194.761 199.762 183.795 198.778 178C198.102 174.02 194.511 171.941 190.889 172C186.988 172.064 183.159 172.683 179.278 173C174.728 173.371 161.796 172.081 165.667 174.5C169.642 176.984 180.047 174.975 184.444 174.778C196.163 174.251 207.819 174 219.556 174C242.037 174 264.519 174 287 174"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M216 191C220.441 191 227 187.735 227 182.5C227 179.283 217.033 181.311 215.444 182.611C211.904 185.508 206.453 189.957 212.222 194.444C225.841 205.036 246.648 204.336 263 202"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M248 187C250.597 187.26 255.352 190.833 255.944 193.5C256.382 195.471 254.573 200.983 256 199.556C257.481 198.075 256.568 195 259.5 195C264.287 195 269.669 192.856 274 191"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M268 195C269.071 204.642 298.026 203.039 297.833 200.056C297.634 196.96 295.91 186.036 291.5 185.056C288.042 184.287 281.983 187.508 279 189"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M296 204C296 210.814 294.924 217.599 295 224.556C295.043 228.536 295.577 232.568 296.5 236.444C296.854 237.932 298.623 240.558 295.944 239.889C291.435 238.761 287.115 235.88 282.444 234.667C270.139 231.47 256.407 233 243.833 233C222.463 233 202.008 235.843 180.778 238.333C159.119 240.874 135.899 241.57 115 248"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M305 203C315.504 205.78 326.178 207.505 337.222 205.556C344.272 204.311 353.583 202.116 358 196C362.835 189.306 358.733 181.099 352.389 177.111C345.815 172.979 337.283 174 329.889 174C320.41 174 311.457 175.32 302.667 179C293.195 182.965 291.575 189.958 297 199"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M310 150C310 155.781 318.401 167.384 319 156C319.073 154.604 320.728 149.412 321 153.222C321.528 160.609 334.117 165.091 339.611 166.722C371.391 176.157 404.427 154.867 432 142"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M552 143C563.255 137.372 576.985 139.785 588.222 133C594.619 129.138 599.46 117.529 594.111 110.889C582.5 96.4749 560.03 94.4562 543.167 94.2778C526.299 94.0993 505.489 94.2793 491.222 104.778C481.432 111.982 468.943 122.457 463.667 133.556C459.984 141.302 460 148.688 460 157C460 174.113 466.966 192.034 480.833 202.611C496.563 214.608 513.717 220.236 533.222 222.778C552.197 225.25 578.013 228.699 595.889 219.222C608.877 212.337 601.901 186.221 588.111 184.778C577.811 183.7 568.286 185.393 558.111 187C552.76 187.845 547.346 188.512 541.944 188.944C539.104 189.172 542.585 189.01 543.222 189C551.838 188.859 560.196 187 568.889 187C581.091 187 592.935 186.856 605 185"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M607 185C609.313 185 610.14 186.085 611.778 187.722C616.579 192.523 622.296 194.402 628.778 196C635.96 197.771 643.628 199.312 649 192.778C650.414 191.058 653.373 182.266 651.778 189C650.235 195.513 648.81 201.351 648.222 208.111C647.323 218.449 649.534 226.995 651.556 237C653.338 245.825 652.959 245.771 644.333 246.222C576.454 249.771 506.518 255.521 441 274"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M660 193C662.139 193 668.203 194.038 669.778 192.778C671.879 191.097 671.175 187.42 668.944 186.444C664.461 184.483 663.895 184.021 660.222 187.778C654.804 193.319 648.604 198.611 654 206.556C658.651 213.403 670.783 216.109 678.389 216.833C687.965 217.745 696.096 214.74 705 212"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M681 192C681 194.185 681 196.37 681 198.556C681 200.505 680.943 196.073 681.222 195.444C682.494 192.584 684.94 191.048 687.222 189.222C689.446 187.443 701.727 188.899 702.778 191C704.077 193.598 704.04 195.463 706.222 198C712.901 205.766 721.179 197.789 728 194"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M733 192C733 197.034 732.174 199.872 737.5 201.056C741.953 202.045 745 202.802 745 196.778C745 189.119 736.382 195.958 734.556 199.444C727.125 213.631 746.078 216 756 216"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M769 196C769 202.183 771.061 202.616 775.222 206.778C778.596 210.152 779.328 218.075 776.944 222.444C773.798 228.213 769.405 227.281 763.944 228.556C749.669 231.887 733.836 233.538 719.222 233.944C710.116 234.197 700.997 233.893 691.889 234C679.738 234.143 669.352 237.027 658 241"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M767 197C770.934 193.066 785.617 189.075 779 199"
                                    stroke="black"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                        {/* Scroll SVG*/}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="https://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.626 16.9"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </svg>
                    </div>
                    {/* Skills Container*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">SKILLS</h1>
                        {/*Skill List*/}
                        <div className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                HTML5
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CSS3
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SASS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                TypeScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Agile(Scrum)
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                AWS
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Git
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                GitHub
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MySQL
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Express
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MongoDB
                            </div>
                        </div>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="https://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.626 16.9"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </svg>
                    </div>
                    <div className="">EXPERIENCE</div>
                </div>
                {/*SVG Container*/}
                <div className="hidden"></div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
