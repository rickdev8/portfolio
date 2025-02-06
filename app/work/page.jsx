'use client'

import { motion } from "framer-motion"
import { React, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "Full Stack",
        title: "Project 1",
        description: `Este projeto é um sistema de controle financeiro que permite aos usuários gerenciar suas transações, visualizar gráficos financeiros e manter o controle de receitas e despesas. Utiliza Express, Prisma e MongoDB no backend, com frontend em HTML, CSS e JavaScript.`,
        stack: [{ name: "Javascript, " }, { name: "Html," }, { name: "Css," }, { name: "NodeJs," }, { name: "Mongodb," }, { name: "Prisma" }],
        image: '/assets/work/thumb1.png',
        live: "https://finan-as-final.vercel.app",
        github: "https://github.com/rickdev8/finan-as"
    },
    {
        num: "02",
        category: "frontend",
        title: "Project 1",
        description: `Desenvolvi um site para um hospital utilizando React, com o objetivo de oferecer uma experiência de usuário intuitiva e eficiente. O site conta com funcionalidades como agendamento de consultas e informações sobre médicos e especialidades, tudo com um design responsivo e moderno.`,
        stack: [
            { name: "React" }, { name: "Javascript" }, { name: "Html" }, { name: "Css" },
        ],
        image: '/assets/work/thumb2.png',
        live: "https://sitehospital.vercel.app",
        github: "https://github.com/rickdev8/sitehospital"
    },
    {
        num: "03",
        category: "frontend",
        title: "Project 1",
        description: `Este projeto é uma tela de login desenvolvida com HTML, CSS e JavaScript. A interface permite que os usuários insiram suas credenciais e acessem o sistema de forma simples e intuitiva, com validação de dados no frontend.`,
        stack: [
            { name: "Javascript" }, { name: "Html" }, { name: "Css" },
        ],
        image: '/assets/work/thumb3.png',
        live: "https://rickdev8.github.io/Tela-login/",
        github: "https://github.com/rickdev8/Tela-login"
    }
]

const Work = () => {
    const handleSlideChange = (swiper) =>{
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])
    }
    const [project, setProject] = useState(projects[0])

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"} }} 
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto p-4">
                <div className="flex flex-col xl:flex-row xl:gap-[60px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            

                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-cold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-[18px] text-accent">{item.name}</li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) =>{
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="absolute top-0 bottom-0 w-full bg-black/10 x-10"></div>
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill className="object-cover" alt="" />
                                    </div>
                                </div>
                                </SwiperSlide>

                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 mt-4 right-0 bottom-[calc(50%_-_22px)]  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                            w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
