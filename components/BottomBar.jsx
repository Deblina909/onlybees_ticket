export default function BottomBar({ sections }) {
  const totalQty = sections.reduce((sum, s) => sum + s.qty, 0);
  const totalPrice = sections.reduce(
    (sum, s) => sum + s.qty * s.price,
    0
  );

  if (totalQty === 0) return null;

  const handleCheckout = () => {
    console.log(
      "Final Selected Tickets:",
      sections.filter((s) => s.qty > 0)
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        borderTop: "1px solid #ccc",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p>{totalQty} Tickets</p>
        <strong>₹{totalPrice}</strong>
      </div>

      <button onClick={handleCheckout}>Proceed</button>
    </div>
  );
}