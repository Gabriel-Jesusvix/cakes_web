import { useState } from "react";
import { CardMenu } from "../components/CardMenu";
import { Header } from "../components/Header";

export function Menu() {
  const [infoCakes, setInfoCakes] = useState([
    {
      id: "1",
      name: "Bolo de Cenoura",
      description:
        " Massa fofinha, aerada e de cor vibrante coroada de uma irresistível  cobertura de chocolate – às vezes crocante e firme; noutras, cremosae brilhante.",
    },
    {
      id: "2",
      name: "Bolo de Ninho",
      description:
        " Massa fofinha, aerada e de cor vibrante coroada de uma irresistível  cobertura de chocolate – às vezes crocante e firme; noutras, cremosae brilhante.",
    },
    {
      id: "3",
      name: "Bolo de Chocolate com Morango",
      description:
        " Massa fofinha, aerada e de cor vibrante coroada de uma irresistível  cobertura de chocolate – às vezes crocante e firme; noutras, cremosae brilhante.",
    },
    {
      id: "4",
      name: "Bolo de laranja",
      description:
        " Massa fofinha, aerada e de cor vibrante coroada de uma irresistível  cobertura de chocolate – às vezes crocante e firme; noutras, cremosae brilhante.",
    },
    {
      id: "5",
      name: "Bolo de maracujá",
      description:
        " Massa fofinha, aerada e de cor vibrante coroada de uma irresistível  cobertura de chocolate – às vezes crocante e firme; noutras, cremosae brilhante.",
    },
  ]);
  return (
    <div>
      <Header hidden />
      <section className="text-center m-10">
        <h1 className="font-poppins font-regular text-primary text-2xl">
          Nira Cakes
        </h1>
        <h2 className="font-poppins font-light text-base">
          Sua festa começa aqui.
        </h2>
        <span className="font-poppins font-light text-sm italic">
          Adoçando & Eternizando momentos❤️
        </span>

        <h2 className="mt-16 text-2xl text-secondary font-medium">Menu</h2>
      </section>
      <div className="px-6 desktop:flex  desktop:items-center desktop:justify-center desktop:flex-col">
        {infoCakes.map((infoCakes) => {
          return (
            <CardMenu
              id={infoCakes.id}
              name={infoCakes.name}
              description={infoCakes.description}
            />
          );
        })}
      </div>
    </div>
  );
}
