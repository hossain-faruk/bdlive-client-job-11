export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="tabs">
      {categories.map((c) => (
        <button
          key={c}
          className={active === c ? "active" : ""}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
