import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Carrousel } from "../components/Carrousel";
import { database } from "../firebaseConnection";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function Home() {
  const [cakes, setCakes] = useState([
    {
      id: "1",
      name: "Bolo de Chocolate",
      description:
        "Bolo com massa artesanal de menteiga com chocolate 50% cacau e chocolate nobre",
      forUntil: "4 a 5",
    },
    {
      id: "2",
      name: "Bolo de nutella",
      description:
        "Bolo com massa artesanal de menteiga com nutella 50% cacau e chocolate nobre",
      forUntil: "3 a 6",
    },
    {
      id: "3",
      name: "Bolo de morango",
      description:
        "Bolo com massa artesanal de menteiga com morango 50% cacau e chocolate nobre",
      forUntil: "6 a 8",
    },
    {
      id: "4",
      name: "Bolo de Avelã",
      description:
        "Bolo com massa artesanal de menteiga com Avelã 50% cacau e chocolate nobre",
      forUntil: "9 a 12",
    },
    {
      id: "5",
      name: "Bolo de Maracujá",
      description:
        "Bolo com massa artesanal de menteiga com Maracujá 50% cacau e chocolate nobre",
      forUntil: "15 a 20",
    },
    {
      id: "6",
      name: "Bolo de Cholate com Morango",
      description:
        "Bolo com massa artesanal de menteiga com Cholate com Morango 50% cacau e chocolate nobre",
      forUntil: "15 a 20",
    },
    {
      id: "7",
      name: "Bolo de Cenoura com Nutella",
      description:
        "Bolo com massa artesanal de menteiga com Cenoura com nutella 50% cacau e chocolate nobre",
      forUntil: "15 a 20",
    },
    {
      id: "8",
      name: "Bolo de Nutella com Ninho",
      description:
        "Bolo com massa artesanal de menteiga com Nutella com Ninho 50% cacau e chocolate nobre",
      forUntil: "15 a 20",
    },
  ]);
  const navigate = useNavigate();

  // async function getCakesDb() {
  //   const dataRef = doc(database, "cakes", "FDcS69JWG6RoPYx9GnE5");
  //   await getDoc(dataRef).then((snapshot) => {
  //     // setCakes(snapshot.data()!.name);
  //   });
  // }

  // useEffect(() => {
  //   getCakesDb();
  // }, []);
  function handleNextMenuUser() {
    navigate("/menu");
  }
  return (
    <div>
      <Header onNext={handleNextMenuUser} />
      <div className=" w-full justify-center items-center flex mt-[90px]  h-40 flex-col">
        <section className="items-center text-center absolute">
          <h1 className="font-poppins font-regular text-primary text-2xl">
            Nira Cakes
          </h1>
          <h2 className="font-poppins font-light text-base">
            Sua festa começa aqui.
          </h2>
          <span className="font-poppins font-light text-sm italic">
            Adoçando & Eternizando momentos❤️
          </span>
        </section>
      </div>
      <div className=" w-full border   shadow-2xl" />
      <div className="mt-8 justify-center items-center flex flex-col">
        <h1 className="font-poppins font-bold text-secondary text-2xl italic ">
          Nossos Exclusivos
        </h1>
      </div>
      <div className="flex scroll-m-1">
        <Carrousel data={cakes} />
      </div>
      <div className=" w-full border mt-8  shadow-2xl" />
    </div>
  );
}
