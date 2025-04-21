"use client";
import { FaCalendarAlt, FaGlobe, FaMoon, FaBookOpen } from "react-icons/fa";

export default function ExplicacaoPascoa() {
  const blocos = [
    {
      titulo: "🪐 Como se define a data da Páscoa?",
      icone: <FaCalendarAlt className="text-blue-600 text-2xl" />,
      texto:
        "A Páscoa é uma data móvel: ela não cai sempre no mesmo dia do calendário.",
    },
    {
      titulo: "🌗 Qual é a regra?",
      icone: <FaMoon className="text-purple-600 text-2xl" />,
      texto:
        "A Páscoa acontece no primeiro domingo após a primeira lua cheia que ocorre depois do equinócio de outono no hemisfério sul.",
    },
    {
      titulo: "🌍 O que é o equinócio de outono?",
      icone: <FaGlobe className="text-green-600 text-2xl" />,
      texto:
        "O equinócio marca o momento em que o dia e a noite têm a mesma duração, por volta de 20 ou 21 de março. É quando o Sol cruza o equador celeste, iniciando o outono no hemisfério sul.",
    },
    {
      titulo: "📜 Por que essa regra?",
      icone: <FaBookOpen className="text-yellow-600 text-2xl" />,
      texto:
        "Essa tradição vem desde o Concílio de Niceia, no ano 325, quando a Igreja unificou a data da Páscoa com base nos ciclos lunares e solares, respeitando tradições judaicas e cristãs. O Concílio I de Niceia é o primeiro Concílio Ecumênico, que significa universal, já que dele participaram bispos de todas as regiões onde em que havia cristãos. Teve lugar quando a Igreja já tinha conseguido a paz estável e dispunha de liberdade para reunir-se abertamente. Aconteceu do 20 de maio ao 25 de julho de 325.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blocos.map((bloco, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-blue-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold">{bloco.titulo}</h3>
            </div>
            <p className="text-gray-700">{bloco.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
