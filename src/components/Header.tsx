import Logo from "../assets/images/logo.png";
import maskBackground from "../assets/images/mask.png";
export function Header() {
  return (
    <header>
      <div className="">
        <div className="flex justify-end ">
          <img src={maskBackground} alt="baackground" />
        </div>
        <div className="m-3 absolute w-full top-0">
          <ul className="flex  w-2/3 justify-between flex-row ">
            <img src={Logo} alt="Mira Cakes" />
            <button className="font-poppins font-normal hover:text-primary hover:underline ">
              Reviews
            </button>
            <button className="font-poppins font-normal hover:text-primary hover:underline">
              Cardápio
            </button>
            <button className="font-poppins font-normal hover:text-primary hover:underline">
              Contato
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
