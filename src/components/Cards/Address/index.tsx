import { HTMLAttributes, ReactNode } from "react";

interface AddressCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  selected: boolean;
}
const AddressCard = (props: AddressCardProps) => {
  const { children, selected, ...rest } = props;
  return (
    <div
      tabIndex={0}
      className={`border-slate-700/30 hover:bg-slate-700/50 focus:bg-slate-700/90 outline-none py-3 px-4 border rounded-lg  transition-all cursor-pointer ${
        selected ? "bg-slate-700/90" : "bg-slate-700/30"
      }`}
      {...rest}
    >
      <p>{children}</p>
    </div>
  );
};

export default AddressCard;
