import { socials } from "../constants/index.jsx";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-s1 border-t border-s3">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex w-full flex-wrap max-md:flex-col items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-p5 opacity-80 text-center flex-1 max-md:order-3">
            © {new Date().getFullYear()}, Rojin Shafiei. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-8 max-md:order-2">
            <a
              href="#"
              className="relative text-sm text-p5 transition-all duration-300 hover:text-p1"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="relative text-sm text-p5 transition-all duration-300 hover:text-p1"
            >
              Terms of Use
            </a>
          </div>

          {/* Social Icons */}
          <ul className="flex gap-4 max-md:order-1">
            {socials.map(({ id, url, icon, title }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-s3 bg-s2 transition-all duration-300 hover:border-p1 hover:bg-p1/10"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="size-5 object-contain"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
