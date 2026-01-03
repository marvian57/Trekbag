import { useState } from "react";
import { initialItems } from "../constants";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>

      <button className="remove-item" title={`Remove ${item.name} from list`}>
        ❌
      </button>
    </li>
  );
}
