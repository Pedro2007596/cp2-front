// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="flex w-[100%] justify-between">
        <h1>Meu Dashboard</h1>
        <button className="w-[50px] h-[50px] bg-red-500 rounded border">Sair</button>
      </header>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="shadow-x border rounded p-2 w-[80px]">Card 1</div>
        <div className="shadow-x border rounded p-2 w-[80px]">Card 2</div>
        <div className="shadow-x border rounded p-2 w-[80px]">Card 3</div>
        <div className="shadow-x border rounded p-2 w-[80px]">Card 4</div>
      </main>
    </div>
  );
}
