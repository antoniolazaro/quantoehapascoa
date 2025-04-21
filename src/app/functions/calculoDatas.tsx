export function calcularPascoa(ano) {
  const a = ano % 19;
  const b = Math.floor(ano / 100);
  const c = ano % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31) - 1;
  const dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(ano, mes, dia);
}

export function deslocarDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() + dias);
  return novaData;
}

export function formatarDistanciaDaPascoa(dias) {
  if (dias === 0) return "No dia da Páscoa";
  const plural = Math.abs(dias) > 1 ? "dias" : "dia";
  return dias < 0
    ? `${Math.abs(dias)} ${plural} antes da Páscoa`
    : `${dias} ${plural} após a Páscoa`;
}

export const feriadosMoveis = [
  {
    nome: "Carnaval (terça-feira)",
    deslocamento: -47,
    explicacao:
      "Marca o início das celebrações antes da Quaresma, que começa na Quarta-feira de Cinzas.",
  },
  {
    nome: "Quarta-feira de Cinzas",
    deslocamento: -46,
    explicacao:
      "Início da Quaresma, 40 dias antes da Páscoa (sem contar os domingos).",
  },
  {
    nome: "Domingo de Ramos",
    deslocamento: -7,
    explicacao:
      "Início da Semana Santa, celebra a entrada triunfal de Jesus em Jerusalém.",
  },
  {
    nome: "Sexta-feira Santa",
    deslocamento: -2,
    explicacao: "Comemoração da crucificação de Jesus Cristo.",
  },
  {
    nome: "Ascensão",
    deslocamento: 39,
    explicacao:
      "Celebra a ascensão de Jesus ao céu, no 40º dia contado a partir da Páscoa (incluindo o domingo de Páscoa).",
  },
  {
    nome: "Pentecostes",
    deslocamento: 49,
    explicacao:
      "Comemora a vinda do Espírito Santo, no 50º dia contado a partir da Páscoa (incluindo o domingo de Páscoa).",
  },
  {
    nome: "Corpus Christi",
    deslocamento: 60,
    explicacao:
      "Celebra a presença de Cristo na Eucaristia, 60 dias após a Páscoa.",
  },
];
