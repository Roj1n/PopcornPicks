import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-44 pb-40 max-lg:pt-40 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <motion.div
          className="container flex lg:flex-row-reverse max-md:flex-row sm:flex-50 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative z-2 ml-0 max-w-512 max-lg:max-w-420 left-3">
            <div className="caption small-2 uppercase text-p3">
              Welcome to PopcornPicks
            </div>
            <h1
              className="mb-6 h1 bg-gradient-to-r from-yellow-100 to-pink-700 bg-clip-text text-transparent
             uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Find Your Next Obsession
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              No more endless scrolling — PopcornPicks delivers movie magic made
              just for you.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="relative z:1 -top-32 lg:left-[calc(0%-100px)] md:left-[0%] md:-top-1/4 w-[600px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="w-full h-auto max-lg:w-[400px] max-md:w-[300px]"
              alt="hero"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 0%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle at center, black 0%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }}
            />
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Hero;
