"use client"

import CountUp from "react-countup"

const stats = [
    {
        num:2,
        text: "Anos codando"

    },
    {
        num:9,
        text: "Projetos completados"

    },
    {
        num:6,
        text: "Tecnologias usadas"

    },
    {
        num:180,
        text: "Códigos commitados"

    },
    
]

const Stats = () => {
    return <section className="pt-4 pb-12 xl:pt-8 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 pl-8 max-w-[100vw] mx-auto xl:max-w-none">
                {stats.map((stat, index) =>{
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                    <p className={`${stat.text.length < 15 ? "max-w-[150px]" : "max-w-[150px]"} leading-snug text-white/89`}>{stat.text}</p>
                    </div>
                })}

            </div>
        </div>
    </section>

    
}

export default Stats