import { CardMenu } from "../components/CardMenu";
import { Header } from "../components/Header";

export function Menu() {
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
      <div className="px-6">
        <CardMenu />
      </div>
    </div>
  );
}
