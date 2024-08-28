import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Tomás Barreiro",
    nickname: "Barra",
    description:
      "Le apasionan los videojuegos y el mundo online. Actualmente edita videos y aspira a convertirse en un destacado youtuber/streamer.",
    image: "/tomas.png",
    quote: "A veces menos es más.",
    instagram: "tomasbarraah",
  },
  {
    name: "Matteo Fiore",
    nickname: "Baljit",
    description:
      "Estudiante de diseño en la UBA. Le encanta jugar videojuegos, tomar mate y socializar; es el más sociable del grupo.",
    image: "/matteo.png",
    quote: "Esta es una frase de prueba.",
    instagram: "matteo_fiore",
  },
  {
    name: "Juan Lehue",
    nickname: "Juan",
    description:
      "Es el más en forma del grupo. Estudia en La Plata y es el más cercano a ser una buena persona; siempre sabe escuchar.",
    image: "/juan.png",
    quote: "Esta es una frase de prueba.",
    instagram: "juan_fitness",
  },
  {
    name: "Agustín Arias",
    nickname: "Astnai",
    description:
      "Ingeniero de software, con una pasión por pensar en grande. Su trabajo duro le lleva a disfrutar de cada aspecto de su vida.",
    image: "/agustin.png",
    quote: "Esta es una frase de prueba.",
    instagram: "agustnarias",
  },
];

export default function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <Card className="w-full max-w-5xl mx-auto overflow-hidden">
        <div className="relative">
          <img
            src="/gptBanner.jpg"
            alt="GPT Team"
            className="w-full h-60 object-cover"
          />
        </div>
        <CardHeader className="text-center py-4">
          <CardTitle className="text-4xl font-black">GPT</CardTitle>
          <CardDescription className="text-lg">Grupo Para Todo</CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border shadow-sm relative overflow-hidden"
              >
                <a
                  href={`https://www.instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1 right-1 p-1 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors z-10"
                  aria-label={`Instagram de ${member.name}`}
                >
                  <Instagram size={24} />
                </a>
                <CardHeader className="flex flex-row items-center space-x-2 py-2 px-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-sm">
                      &quot;{member.nickname}&quot;
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="py-2 px-3">
                  <p className="text-sm mb-2 leading-snug line-clamp-3">
                    {member.description}
                  </p>
                  <blockquote className="border-l-2 border-primary pl-2 py-1 italic text-muted-foreground rounded-r-md">
                    <p className="text-xs line-clamp-2">&quot;{member.quote}&quot;</p>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
