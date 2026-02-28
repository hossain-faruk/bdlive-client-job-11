export default function Sidebar() {
  const menus = [
    { n: "সব চ্যানেল", i: "📺" },
    { n: "বাংলাদেশ TV", i: "🇧🇩" },
    { n: "Sports", i: "⚽" },
    { n: "Kids", i: "🧸" },
    { n: "Music", i: "🎵" },
    { n: "News", i: "📰" },
  ];
  return (
    <div className="p-4 flex flex-col gap-1">
      {menus.map((m) => (
        <div
          key={m.n}
          className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-white/5 text-zinc-400 hover:text-white cursor-pointer transition"
        >
          <span className="text-lg">{m.i}</span>
          <span className="text-sm font-semibold">{m.n}</span>
        </div>
      ))}
    </div>
  );
}
