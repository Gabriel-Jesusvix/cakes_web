import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="flex w-full ">
      <Header />
      <div className=" w-full justify-center items-center flex mt-36  h-72">
        <section className="items-center text-center">
          <h1 className="font-poppins font-semibold text-primary text-4xl">
            Nira Cakes
          </h1>
          <h2 className="font-poppins font-normal text-2xl ">
            Sua festa começa aqui.
          </h2>
          <span className="font-poppins font-normal text-sm italic">
            Adoçando & Eternizando momentos❤️
          </span>
        </section>
      </div>
    </div>
  );
}
