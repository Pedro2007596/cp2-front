// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      <div className="w-[100%] h-[20rem] grid grid-rows-3">
        <header className="w-[100%] h-[80px] bg-blue-500"></header>
        <main className="w-[100%] bg-gray-500"></main>
        <footer className="w-[100%] h-[80px] bg-red-500"></footer>
      </div>
    </div>
  );
}
