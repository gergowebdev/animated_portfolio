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
                    <div className="flex flex-col gap-12 justify-center">
                        <h1>BIOGRAPHY</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Veritatis distinctio cum perferendis at qui
                            ipsa voluptas omnis maxime molestiae! Officiis.
                        </p>
                        <span></span>
                    </div>
                    <div className="">SKILLS</div>
                    <div className="">EXPERIENCE</div>
                </div>
                {/*SVG Container*/}
                <div className="hidden"></div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
