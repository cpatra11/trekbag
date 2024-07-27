import Button from "./Button";
// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsInComplete,
  //   handleResetToInitial,
  //   handleRemoveAllItems,
  // } = useItemsContext();
  // const secondaryButtons = [
  //   { text: "Mark all as complete", onClick: markAllAsComplete },
  //   { text: "Mark as incomplete", onClick: markAllAsInComplete },
  //   { text: "Reset to initial", onClick: resetToInitial },
  //   { text: "Remove all items", onClick: removeAllItems },
  // ];
  return (
    <section className="button-group">
      {/* {secondaryButtons.map((text) => (
        <Button
          
          key={text}
          type="secondary"
        >
          {text}
        </Button>
      ))} */}

      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsInComplete} buttonType="secondary">
        Mark as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>

      {/* {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          onClick={onClick}
          buttonType="secondary"
        >
          {text}
        </Button>
      ))} */}
    </section>
  );
}
