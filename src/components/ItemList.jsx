import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";
// import { useItemsContext } from "../lib/hooks";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by unpacked", value: "unpacked" },
  { label: "Sort by packed", value: "packed" },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");
  // const { items, handleDeleteItem, handleToggleItem } = useItemsContext();

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "default") return 0;
        if (sortBy === "unpacked") return a.packed - b.packed;
        if (sortBy === "packed") return b.packed - a.packed;
      }),
    [items, sortBy]
  );
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li className="item">
        <label>
          <input
            onChange={() => {
              onToggleItem(item.id);
            }}
            checked={item.packed}
            type="checkbox"
          />
          {item.name}
        </label>

        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}
