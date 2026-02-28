// src/components/ui/CategoryTabs.jsx
"use client";

export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="bg-white/95 backdrop-blur-md w-full sticky top-[56px] z-[90] border-b border-gray-100">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-3 px-4 md:px-6 scroll-smooth">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`
              px-3 py-1.5 rounded-lg text-[14px] font-medium whitespace-nowrap transition-all duration-200
              ${
                active === c
                  ? "bg-[#0f0f0f] text-white"
                  : "bg-[#0000000d] text-[#0f0f0f] hover:bg-[#0000001a] border border-transparent"
              }
            `}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
