export function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-9">
        <div className="text-1xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img
        className="absolute left-[50%] top-5 h-40"
        src={item.src}
      />
    </div>
  );
}
