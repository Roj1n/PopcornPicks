import { Element } from "react-scroll";
import { motion } from "framer-motion";

import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container px-13/20 lg:w-4/5 max-md:w-full items-center">
          <div className="relative flex md:flex-wrap flex-nowrap rounded-3xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(
              ({ id, icon, caption, title, text, button }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="relative z-2 md:px-16 px-10 md:pb-10 pb-5 flex-100 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                >
                  <div className="w-full flex justify-start items-start">
                    <div className="-ml-2 mb-12 flex items-center justify-center flex-col">
                      <div className="w-0.5 h-16 bg-s2" />
                      <img
                        src={icon}
                        className="size-22 object-contain rounded-full shadow-lg border-2 border-s2"
                        alt={title}
                      />
                    </div>
                  </div>

                  <p className="caption mb-5 max-md:mb-6">{caption}</p>
                  <h2 className="max-w-400 mb-7 h4 text-p4 max-md:mb-6 max-md:h5">
                    {title}
                  </h2>
                  <p className="mb-11 body-1-2 max-md:mb-8 max-md:body-3">
                    {text}
                  </p>
                  <Button icon={button.icon}>{button.title}</Button>
                </motion.div>
              ),
            )}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s2 mix-blend max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="relative pt-16 px-4 pb-14"
                >
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
