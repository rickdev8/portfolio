import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor de Software</span>
            <h1 className="h1 mb-8">Olá sou<br /><span className="text-accent">Rick Abade</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Sou desenvolvedor web full stack, trabalho usando tecnologias como React, Node.js e JavaScript. Meu foco é criar soluções eficientes, escaláveis e de alta qualidade, sempre visando uma experiência de usuário excepcional.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6"> {/* Centering button container */}
              <Button variant="outline" size="lg" className="uppercase flex justify-center items-center mb-8 gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl-mb-0">
                <div className="mb-8 xl:mb-0 ">
                  <Social containerStyles="flex gap-6" iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
