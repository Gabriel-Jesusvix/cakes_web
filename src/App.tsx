import { Header } from "./components/Header";
import { useEffect } from "react";
import { Carrousel } from "./components/Carrousel";

export default function App() {
  // useEffect(() => {
  //   alert(
  //     "Seja bem vindo! Site em criação, entre em contato com (27)9.9589-9522"
  //   );
  // });
  return (
    <div className="">
      <Header />
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
      <div>
        <Carrousel />
      </div>
    </div>
  );
}
