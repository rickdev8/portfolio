"use client"

import { Button } from "@/components/ui/button";
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Telefone",
        description: "(74) 9979-2305"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "rique88858@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Bahia, Barra do Mendes",
        description: "Rua cantinho do céu / N32"
    }
];

const Contact = () => {
    const [status, setStatus] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [message, setMessage] = useState("");
    const [servico, setServico] = useState("");


    const handleNomeChange = (e) => setNome(e.target.value);
    const handleSobrenomeChange = (e) => setSobrenome(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleTelefoneChange = (e) => setTelefone(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);


    const handleSelectChange = (value) => {
        setServico(value);
    };


    const onSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            message:message,
            servico: servico
        }
        try {
            const response = await axios.post('http://localhost:3001/send', dados);
    
            setStatus('Email enviado com sucesso!');
          } catch (error) {
            // Caso ocorra um erro no envio
            setStatus('Erro ao enviar o email.');
          }
        };
    
    

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="p-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        {/* Formulário com onSubmit para capturar o envio */}
                        <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
                            <p>Me envie uma mensagem ou entre em contato comigo, basta preencher o formulário abaixo.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    value={nome}
                                    onChange={handleNomeChange}
                                    type="text"
                                    placeholder="Nome"
                                />
                                <Input
                                    value={sobrenome}
                                    onChange={handleSobrenomeChange}
                                    type="text"
                                    placeholder="Sobrenome"
                                />
                                <Input
                                    value={email}
                                    onChange={handleEmailChange}
                                    type="email"
                                    placeholder="Email"
                                />
                                <Input
                                    value={telefone}
                                    onChange={handleTelefoneChange}
                                    type="phone"
                                    placeholder="Telefone"
                                />
                            </div>
                            {/* Select controlado com useState */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione seu serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione seu serviço</SelectLabel>
                                        <SelectItem value="Full Stack">Desenvolvedor Full Stack</SelectItem>
                                        <SelectItem value="Front End">Desenvolvedor Front End</SelectItem>
                                        <SelectItem value="Back End">Desenvolvedor Back End</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                value={message}
                                onChange={handleMessageChange}
                                className="h-[200px]"
                                placeholder="Digite seu texto aqui."
                            />
                            <Button size="md" className="max-w-40 p-3">Enviar</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
