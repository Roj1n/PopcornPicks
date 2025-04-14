import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section className="min-h-screen bg-s1 relative">
      <Element name="pricing">
        <div className="container relative">
          {/* Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/bg-outlines.svg"
              alt="outline"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Heading */}
          <div className="relative z-10 text-center py-16 max-md:py-10">
            <h3 className="h3 max-lg:h4 max-md:h5 text-p4 mx-auto max-w-lg">
              Choose your path to better movie nights
            </h3>

            <div className="mt-6 flex justify-center">
              <div className="flex z-4 w-[360px] max-md:w-[280px] items-center rounded-3xl border-[2.5px] border-s4/25 bg-s1/50 p-1 backdrop-blur-[6px]">
                <button
                  className={clsx("pricing-head_btn", monthly && "text-p4")}
                  onClick={() => setMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={clsx("pricing-head_btn", !monthly && "text-p4")}
                  onClick={() => setMonthly(false)}
                >
                  Annual
                </button>
                <div
                  className={clsx(
                    "g4 rounded-14 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] shadow-400 transition-transform duration-500",
                    !monthly && "translate-x-full",
                  )}
                />
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <motion.div
            className="relative z-10 flex flex-wrap justify-center gap-6 px-2 -mt-4 max-xl:overflow-auto max-xl:pt-6"
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={clsx(
                  "relative flex flex-col items-center border-2 bg-white/5 backdrop-blur-md p-6 rounded-3xl shadow-md transition-all duration-300 xl:w-[300px] max-md:min-w-[280px]",
                  index === 1 && "scale-105 z-20 top-0 h-full g5",
                )}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index === 1 ? 0.5 : 0.3,
                }}
              >
                {/* Logo */}
                <div
                  className={clsx(
                    "z-10 mb-5",
                    index === 1 ? "mt-[-40px]" : "mt-[-30px]",
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-cover drop-shadow-2xl",
                      index === 1 ? "w-24 h-24" : "w-16 h-16",
                    )}
                  />
                </div>

                {/* Title & Price */}
                <div className="text-center z-10">
                  <div
                    className={clsx(
                      "uppercase font-semibold px-4 py-1.5 rounded-full text-sm mb-5",
                      index === 1
                        ? "border-pink-300 text-pink-300 border-2"
                        : "border-blue-300 text-blue-300 border",
                    )}
                  >
                    {plan.title}
                  </div>

                  <div className="flex justify-center items-baseline mb-4 text-p4 text-5xl font-bold">
                    <span
                      className={index === 1 ? "text-green-300" : "text-p4"}
                    >
                      ${" "}
                    </span>
                    <CountUp
                      start={plan.priceMonthly}
                      end={monthly ? plan.priceMonthly : plan.priceYearly}
                      duration={0.4}
                      useEasing={false}
                      preserveValue
                      className="text-[55px] mt-2.5"
                    />
                    <span className="ml-1 text-sm uppercase text-p4">/mo</span>
                  </div>

                  <p
                    className={clsx(
                      "text-sm text-p4 border-b border-s-amber-200 pb-4 mb-12",
                      index === 1 && "text-yellow-200",
                    )}
                  >
                    {plan.caption}
                  </p>
                </div>

                {/* Features */}
                <ul className="w-full space-y-3 text-sm text-p4 z-10 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <img
                        src="/images/check.png"
                        alt="check"
                        className="w-6 h-6"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="z-10 mb-3 w-full flex justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {/* Extra text for middle plan */}
                {index === 1 && (
                  <p className="text-xs text-center text-p3 mt-2 tracking-wide">
                    — Limited time offer —
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
