import React from "react";
import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";
import { motion } from "framer-motion";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <motion.div
          className="testimonials_head-res relative z-2 mr-20 flex-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <p className="caption text-purple-300 mb-5 max-md:mb-2.5">
            Wall of Love
          </p>
          <h3 className="h3 max-md:h5 text-p4">Words from Our Fans</h3>
        </motion.div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
