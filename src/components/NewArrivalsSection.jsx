import { Card } from "./Card";
export function NewArrivalsSection({ items, onClickCard }) {
  return (
    <div className="mt-20">
      <div className="flex-center">
       
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}
