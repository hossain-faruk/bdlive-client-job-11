// src/components/ui/CategoryTabs.jsx
"use client";

export default function CategoryTabs({ categories, active, onChange }) {
  return (
    /* বর্ডার সরানোর জন্য border-b-0 এবং border-none ব্যবহার করা হয়েছে */
    /* মেইন পেজের সাথে সামঞ্জস্য রাখতে এখান থেকে sticky এবং top ক্লাসগুলো কমানো হয়েছে */
    <div className="bg-transparent w-full z-[90] border-none shadow-none">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-3 px-2 md:px-0 scroll-smooth">
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
