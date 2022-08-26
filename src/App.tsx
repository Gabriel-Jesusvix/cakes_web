import { Header } from "./components/Header";
import backgroundTransparent from "./assets/images/background.jpeg";

export default function App() {
  return (
    <div className="flex w-full min-h-full">
      <Header />
      <div className=" w-full justify-center items-center flex mt-36  h-72">
        <img
          src={backgroundTransparent}
          alt="background-transparent"
          className=" flex opacity-20 h-full w-full "
        />
        <section className="items-center text-center absolute">
          <h1 className="font-poppins font-bold text-primary text-4xl">
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
