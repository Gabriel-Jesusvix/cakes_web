interface InfoCakes {
  id: string;
  name: string;
  description: string;
}

export function CardMenu({ name, description }: InfoCakes) {
  const IMAGE_PROVISION =
    "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80";

  return (
    <div
      className="
    bg-bg_button 
      h-25 
      rounded-xl
      p-2
      flex
      desktop: items-center
      mb-5
      
      "
    >
      <div className="w-full flex tablet:flex">
        <div className="justify-center flex items-center">
          <img
            src={IMAGE_PROVISION}
            alt="cake"
            className="object-cover rounded-xl h-20 w-[100px]"
          />
        </div>
        <div className="px-4 max-w-xl tablet:w-full">
          <div className="text-center ">
            <strong className="text-primary"> {name}</strong>
          </div>
          <p className="text-[10px] text-secondary max-w-prose tablet:text-[10px] tablet:text-clip laptop:text-[10.5px] hover:text-clip ">
            {description}.
          </p>
        </div>
      </div>
    </div>
  );
}
