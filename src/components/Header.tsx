import Logo from "../assets/images/logo.png";

interface HeaderProps {
  onNext: () => void;
}
export function Header({ onNext }: HeaderProps) {
  return (
    <header className=" px-4 py-4 w-full  ">
      <div className="tablet:w-full  ">
        <ul className="flex ">
          <div
            className="
              flex
              w-full
              items-center
              justify-between
               tablet:mx-[10px] 
               tablet:w-full 
               tablet:justify-between 
               laptop:w-full 
               laptop:justify-between 
               laptop:items-center 
               laptop:mx-[10px]
               "
          >
            <a href="https://www.instagram.com/nira__cakes/">
              <img
                className="tablet:w-[98px] tablet:h-[22.08] flex items-center justify-center laptop:w-[125px] laptop:h-[30px]"
                src={Logo}
                alt="Mira Cakes"
              />
            </a>

            <div className="bg-bg_button p-3 h-5 justify-center flex items-center rounded-lg w-[7rem] tablet:w-[98px] tablet:h-[20px]">
              <button
                className="font-poppins font-normal text-secondary hover:text-secondary hover:underline"
                onClick={onNext}
              >
                Cardápio
              </button>
            </div>
            <div className="bg-bg_button p-3 h-5 justify-center flex items-center rounded-lg w-[7rem]  tablet:w-[98px] tablet:h-[20px]">
              <button className="font-poppins font-normal text-secondary hover:text-secondary hover:underline ">
                <a href="https://wa.me/5527995899522">Contato</a>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}
