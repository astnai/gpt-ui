"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Twitter, ChevronDown, ChevronUp } from "lucide-react";

const teamMembers = [
  {
    name: "Tomás Barreiro",
    nickname: "Barra",
    description:
      "Le apasionan los videojuegos y el mundo online. Actualmente edita videos y aspira a convertirse en un destacado youtuber/streamer. Es el más joven del grupo, pero no por ello menos importante, ya que es el que se encarga de la parte de marketing del grupo, y es el que se encarga de que todo funcione como una máquina.",
    image: "/tomas.png",
    quote: "Esta es una frase de prueba.",
    instagram: "tomasbarraah",
    twitter: "tomasbarraah",
  },
  {
    name: "Matteo Fiore",
    nickname: "Baljit",
    description:
      "Estudiante de diseño en la UBA. Le encanta jugar videojuegos, tomar mate y socializar; es el más sociable del grupo.",
    image: "/matteo.png",
    quote: "Esta es una frase de prueba.",
    instagram: "matteo_fiore",
    twitter: "matteo_fiore",
  },
  {
    name: "Juan Lehue",
    nickname: "Juan",
    description:
      "Es el más en forma del grupo. Estudia en La Plata y es el más cercano a ser una buena persona; siempre sabe escuchar.",
    image: "/juan.png",
    quote: "Esta es una frase de prueba.",
    instagram: "juan_fitness",
    twitter: "juan_fitness",
  },
  {
    name: "Agustín Arias",
    nickname: "Astnai",
    description:
      "Ingeniero de software, con una pasión por pensar en grande. Su trabajo duro le lleva a disfrutar de cada aspecto de su vida.",
    image: "/agustin.png",
    quote: "Esta es una frase de prueba.",
    instagram: "agustnarias",
    twitter: "agustnarias",
  },
];

interface TeamMember {
  name: string;
  nickname: string;
  description: string;
  image: string;
  quote: string;
  instagram: string;
  twitter: string;
}

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-white">
      <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src="/gptBanner.jpg"
            alt="GPT Team Banner"
            className="w-full h-56 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-black mb-1">GPT</h1>
              <p className="text-lg font-light">Grupo Para Todo</p>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-300">
        <CardHeader className="relative pb-0 pt-3 px-3">
          <Avatar className="w-16 h-16 mx-auto mb-2">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>{member.name[0]}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg text-center mb-1">
            {member.name}
          </CardTitle>
          <CardDescription className="text-xs text-center">
            &quot;{member.nickname}&quot;
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2 px-3 flex-grow">
          <p
            className={`text-xs mb-2 leading-relaxed ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {member.description}
          </p>
          <blockquote className="border-l-2 border-primary pl-2 py-1 italic text-muted-foreground">
            <p className="text-xs">&quot;{member.quote}&quot;</p>
          </blockquote>
          <div className="flex justify-center mt-2 space-x-3">
            <a
              href={`https://twitter.com/${member.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors"
              aria-label={`Twitter de ${member.name}`}
            >
              <Twitter size={16} />
            </a>
            <a
              href={`https://www.instagram.com/${member.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors"
              aria-label={`Instagram de ${member.name}`}
            >
              <Instagram size={16} />
            </a>
          </div>
        </CardContent>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-1 text-xs text-primary hover:bg-primary-foreground transition-colors flex items-center justify-center"
          aria-label={isExpanded ? "Ver menos" : "Ver más"}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </Card>
    </motion.div>
  );
}
