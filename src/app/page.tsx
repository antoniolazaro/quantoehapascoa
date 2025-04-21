"use client";
import React, { useState, useEffect } from "react";
import {
  calcularPascoa,
  deslocarDias,
  feriadosMoveis,
  formatarDistanciaDaPascoa,
} from "@/app/functions/calculoDatas";
import ExplicacaoPascoa from "@/app/components/ExplicacaoPascoa";

export default function App() {
  const [ano, setAno] = useState(new Date().getFullYear());
  const [pascoa, setPascoa] = useState(calcularPascoa(ano));

  useEffect(() => {
    setPascoa(calcularPascoa(ano));
  }, [ano]);

  const datas = feriadosMoveis.map((feriado) => ({
    ...feriado,
    data: deslocarDias(pascoa, feriado.deslocamento),
  }));

  return (
    <div className="container-principal">
      <h1>Datas baseadas na Páscoa</h1>

      <input
        type="number"
        placeholder="Digite o ano"
        value={ano}
        onChange={(e) => setAno(parseInt(e.target.value))}
      />

      <ExplicacaoPascoa />

      <div className="banner">
        <h2>Páscoa</h2>
        <p>
          <strong>Data:</strong> {pascoa.toLocaleDateString()}
        </p>
      </div>

      <div className="container-cards">
        {datas.map((feriado) => (
          <div className="card" key={feriado.nome}>
            <h3>{feriado.nome}</h3>
            <p>
              <strong>Quando em relação à Páscoa:</strong>{" "}
              {formatarDistanciaDaPascoa(feriado.deslocamento)}
            </p>
            <p>
              <strong>Data:</strong> {feriado.data.toLocaleDateString()}
            </p>
            <p>
              <strong>Explicação: </strong> {feriado.explicacao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
