export default function SectionCard({ section, onChange }) {
  return (
  <div style={{
     
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
    <div>
      <h4 style={{ margin: 0 }}>{section.name}</h4>
      <p style={{ margin: 0 }}>₹ {section.price}</p>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button onClick={() => onChange(section.id, "dec")}>-</button>
      <span>{section.qty}</span>
      <button onClick={() => onChange(section.id, "inc")}>+</button>
    </div>
  </div>
  );
}