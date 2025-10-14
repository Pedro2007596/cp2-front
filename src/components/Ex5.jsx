// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <div className="flex gap-2 flex-col md:flex-row ">
        <button>Link 1</button>
        <button>Link 2</button>
        <button>Link 3</button>
      </div>
    </div>
  );
}