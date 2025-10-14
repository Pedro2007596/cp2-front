// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      <div className="flex flex-col justify-center gap-4  p-4 border bg-white rounded-lg shadow md:w-[100%] lg:w-[24rem]">
        <h2 className="text-xl font-bold">Título Card</h2>
        <p className="mt-2 text-gray-700">Texto Card</p>
        <button className="bg-blue-500 text-center rounded hover:bg-blue-800">Button Card</button>
      </div>

    </div>
  );
}