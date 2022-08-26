import Logo from "../assets/images/logo.png";
import maskBackground from "../assets/images/mask.png";
export function Header() {
  return (
    <header>
      <div className="">
        <div className="flex justify-end tablet:hidden">
          <img src={maskBackground} alt="baackground" />
        </div>
        <div className="m-3 absolute w-full top-0 justify-between ">
          <ul className="flex  justify-between flex-row ">
            <a href="https://www.instagram.com/nira__cakes/">
              <img src={Logo} alt="Mira Cakes" />
            </a>
            <button className="font-poppins font-normal hover:text-primary hover:underline tablet:hidden">
              Reviews
            </button>
            <div className="flex justify-around w-full">
              <button className="font-poppins font-normal hover:text-primary hover:underline">
                Cardápio
              </button>
              <button className="font-poppins font-normal hover:text-primary hover:underline">
                Contato
              </button>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
