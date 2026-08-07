import { menu } from "../../lib/data";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const visibleMenu = menu.filter((item) => item.inStock);

  if (visibleMenu.length === 0) {
    return (
      <p className="text-center text-slate-500 p-12">
        restaurant is closed today.
      </p>
    );
  }

  return (
    <div>
      <div className="relative">
        <h1 className="relative mt-20 font-bold text-5xl text-center">
          Today's Menu
        </h1>

        <div className="absolute -bottom-6 left-[35%] z-10 h-2 w-100 bg-amber-400 " />
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 lg:grid-cols-3 mt-16 ">
        {visibleMenu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
