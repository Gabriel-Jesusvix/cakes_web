export function CardMenu() {
  return (
    <div className="bg-bg_button h-24 rounded-xl p-2">
      <div className="">
        <img
          className="w-28 h-20 rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
        />
        <div className="flex-col">
          <span>Bolo de chocolate</span>
          <p className="text-[12px]">
            Impossível não amar bolo de cenoura, né? Para dar aquela inovada na
            receita, fizemos uma versão em camadas de deixar qualquer um com
            água na boca. E o melhor de tudo: além de ser deliciosa, ela é super
            fácil de fazer!
          </p>
        </div>
      </div>
    </div>
  );
}
