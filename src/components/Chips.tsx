export function Chips({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((item) => (
        <li className="chip" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
