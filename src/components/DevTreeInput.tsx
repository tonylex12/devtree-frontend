import { DevTreeLink } from "../types";

type DevTreeInputProps = {
  item: DevTreeLink;
};

const DevTreeInput = ({ item }: DevTreeInputProps) => {
  console.log(item);

  return (
    <div className="bg-white shadow-sm p-5 flex items-center gap-3">
      <div
        className="w-12 h-12 bg-cover"
        style={{ backgroundImage: `url(/social/icon_${item.name}.svg)` }}
      ></div>
      <input
        type="text"
        placeholder={`https://www.${item.name}.com/${item.url}`}
        className="flex-1 border border-gray-100 rounded"
      />
    </div>
  );
};
export default DevTreeInput;
