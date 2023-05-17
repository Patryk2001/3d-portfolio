import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Wstęp</p>
        <h2 className={styles.sectionHeadText}>O mnie.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] leading-[30px]'>
      Cześć! Jestem Patryk, osobą o dużym zacięciu twórczym i dużych aspiracjach. Posiadam wszechstronną wiedzę na temat systemów i stron internetowych, grafiki komputerowej oraz marketingu. Moje umiejętności programistyczne obejmują JavaScript, PHP, HTML, CSS i Node.js, co czyni mnie wykwalifikowanym specjalistą w tej dziedzinie. Szybko się uczę oraz doskonale współpracuję z klientami, aby tworzyć efektywne, skalowalne i intuicyjne rozwiązania, które rozwiązują realne problemy świata.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");