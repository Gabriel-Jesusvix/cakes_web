interface CakesProps {
  id: string;
  name: string;
  description: string;
  forUntil: string;
}

interface Props {
  data: CakesProps[];
}

export function Carrousel({ data }: Props) {
  return (
    <>
      {data.map((cake) => (
        <div className="px-2 py-2  ">
          <div
            className="          
            shadow-2xl
           tablet:bg-bg_button 
            tablet:w-[150px] 
            tablet:h-[320px] 
            w-[150px] 
            h-[220px] 
           bg-bg_button 
            m-[10px] 
            rounded-[10px]
            laptop:w-[150px] 
            laptop:h-[320px] 
            desktop:w-[150px] 
            desktop:h-[320px]
          "
          >
            <div
              className=" 
              tablet:w-[150px] 
              tablet:h-[110px]  
              rounded-t-[10px]
              laptop:w-[150px] 
              laptop:h-[110px] 
              desktop:w-[150px] 
              desktop:h-[110px] 
              "
            >
              {/* // Image aqui */}
            </div>

            <div className="tablet:w-[150px] tablet:h-[45px] bg-white items-center justify-center flex  text-center">
              <h1 className="font-[Poppins] font-light text-[13px] text-secondary">
                {cake.name}{" "}
              </h1>
            </div>
            <div className="tablet:w-full p-1">
              <strong className="font-[Poppins] font-regular text-[8px] text-secondary">
                descrição
              </strong>
              <p className="font-[Poppins] font-light text-[10px] text-secondary">
                {/* Bolo com massa de chocolate gourmet 50% cacau, com recheio de
    brigadeiro de chocolate nobre e brigadeiro de maracujá. */}
                {cake.description}
              </p>
              <strong className="font-[Poppins] font-regular text-[8px] text-secondary">
                Serve: {cake.forUntil} pessoas
              </strong>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
