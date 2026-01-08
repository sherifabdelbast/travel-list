export default function Stats({ items }) {
  //Early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems === itemsPacked
          ? "You have everything packed and ready to go! ✈️"
          : `🎒 You have ${numItems} items on your list, and you already packed
      ${itemsPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
