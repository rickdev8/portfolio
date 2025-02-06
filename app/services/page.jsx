"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: "01",
    title: "Desenvolvedor Web",
    description: "Sou desenvolvedor web, especializado na criação de aplicações escaláveis e eficientes, utilizando tecnologias como React, Node.js e JavaScript para entregar soluções de alto desempenho.",
    href: ""
  },
  {
    num: "02",
    title: "Front End",
    description: "Posso atuar como desenvolvedor web front-end, criando interfaces responsivas e interativas com HTML, CSS, React e JavaScript, sempre buscando otimizar a experiência do usuário e a performance das aplicações.",
    href: ""
  },
  {
    num: "03",
    title: "Back End",
    description: "Apesar de pouca familiaridade, posso atuar no back-end, utilizando Node.js, Express e bancos de dados como MongoDB para construir APIs eficientes e escaláveis, sempre garantindo a performance e segurança das aplicações.",
    href: ""
  },
  {
    num: "04",
    title: "Full Stack",
    description: "Também posso atuar como desenvolvedor web full stack, combinando tecnologias como React, JavaScript, Node.js e MongoDB para criar aplicações completas, escaláveis e de alto desempenho, focando tanto na experiência do usuário quanto na eficiência do servidor.",
    href: ""
  }
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px] pl-8'
        >
          {services.map((service) => ( 
            <div
              key={service.title} 
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center pr-8">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                {service.title}
              </h2>

              <p className='text-white/60'>{service.description}</p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;