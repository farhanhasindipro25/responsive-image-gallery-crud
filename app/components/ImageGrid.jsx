export default function ImageGrid() {
  return (
    <section className="divide-y divide-gray-300 space-y-4 border-md bg-gray-white shadow-md p-4">
      <header>
        <h2 className="text-base font-semibold text-gray-700">Gallery</h2>
      </header>
      <div className="pt-4 grid grid-cols-5 gap-4">
        <div className="bg-slate-200 w-full h-full p-4 col-span-2 row-span-2">
          1
        </div>
        <div className="bg-slate-200 w-full h-full p-4">1</div>
        <div className="bg-slate-200 w-full h-full p-4">2</div>
        <div className="bg-slate-200 w-full h-full p-4">2</div>
        <div className="bg-slate-200 w-full h-full p-4">3</div>
        <div className="bg-slate-200 w-full h-full p-4">3</div>
        <div className="bg-slate-200 w-full h-full p-4">4</div>
        <div className="bg-slate-200 w-full h-full p-4">4</div>
        <div className="bg-slate-200 w-full h-full p-4">5</div>
        <div className="bg-slate-200 w-full h-full p-4">5</div>
        <div className="bg-slate-200 w-full h-full p-4">6</div>
        <div className="bg-slate-200 w-full h-full p-4">6</div>
        <div className="bg-slate-200 w-full h-full p-4">7</div>
        <div className="bg-slate-200 w-full h-full p-4">7</div>
        <div className="bg-slate-200 w-full h-full p-4">8</div>
        <div className="bg-slate-200 w-full h-full p-4">8</div>
      </div>
    </section>
  );
}
