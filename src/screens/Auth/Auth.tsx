import logo from "../../assets/images/logo.png";
import { Input } from "../../components/Input";

export function Auth() {
  return (
    <div>
      <header className="px-4 py-4 ">
        <img src={logo} />
      </header>
      <div className="flex justify-center mt-[98px]">
        <section className="items-center justify-center text-center absolute">
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
      <footer className="mt-32 px-4 ">
        <Input password="text" />
        <Input password="password" label="Senha" />
        <div className="w-full items-center justify-center flex">
          <button className="w-32 h-12  bg-bg_button rounded-md text-secondary text-lg font-semibold hover:bg-pink-400 transition">
            Entrar
          </button>
        </div>
      </footer>
    </div>
  );
}
