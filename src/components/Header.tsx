import Logo from "../assets/images/logo.png";

export function Header() {
  return (
    <header className="h-20 flex justify-center items-center">
      <div className="tablet:w-full ">
        <div className="tablet:w-full ">
          <ul className="flex ">
            <div className="flex tablet:mx-[10px] tablet:w-full tablet:justify-between">
              <a href="https://www.instagram.com/nira__cakes/">
                <img
                  className="tablet:w-[98px] tablet:h-[22.08] flex items-center justify-center"
                  src={Logo}
                  alt="Mira Cakes"
                />
              </a>

              <div className="bg-bg_button p-3 h-5 justify-center flex items-center rounded-lg w-[7rem] tablet:w-[98px] tablet:h-[20px]">
                <button className="font-poppins font-normal text-secondary hover:text-secondary hover:underline ">
                  Cardápio
                </button>
              </div>
              <div className="bg-bg_button p-3 h-5 justify-center flex items-center rounded-lg w-[7rem]  tablet:w-[98px] tablet:h-[20px]">
                <button className="font-poppins font-normal text-secondary hover:text-secondary hover:underline ">
                  Contato
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
