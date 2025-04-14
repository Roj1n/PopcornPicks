import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center max-lg:flex-col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100"
            >
              <h3 className="h3 mb-7 text-pink-300">PopcornPicks</h3>

              <p className="body-1 mb-8 max-w-md">
                Try it now for free on iOS, Android, PC, Web whatever your
                flavor, we've got you covered.
              </p>

              {/* Download Links */}
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon, name }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15, // staggered
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="size-20 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-all duration-500 hover:scale-105"
                    >
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Laptop Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10 max-md:hidden"
            >
              <div className="object-contain download_preview-before download_preview-after rounded-40 relative w-[720px] border-2 border-s5 p-4">
                <div className="relative rounded-3xl bg-s1 px-4 pb-4 pt-12">
                  <span className="download_preview-dot left-4 bg-p2" />
                  <span className="download_preview-dot left-8 bg-s3" />
                  <span className="download_preview-dot left-12 bg-p1/15" />

                  <img
                    src="/images/popcorn-screen.png"
                    alt="screen"
                    className="rounded-xl w-full h-[420px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Logos */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-20 flex justify-center max-lg:hidden"
          >
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-8">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </motion.ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
