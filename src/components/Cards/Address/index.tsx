import React, { HTMLAttributes, ReactNode } from "react";

interface AddressCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const AddressCard = (props: AddressCardProps) => {
  const { children, ...rest } = props;
  return (
    <div
      tabIndex={0}
      className="py-3 px-4 border rounded-lg border-white/5 bg-white/5 hover:bg-white/10 focus:bg-white/20 transition-all cursor-pointer"
      {...rest}
    >
      <p>{children}</p>
    </div>
  );
};

export default AddressCard;
