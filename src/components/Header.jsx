import Logo from "./Logo";
import Counter from "./Counter";

// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.isPacked).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
